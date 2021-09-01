import React, { useState } from "react";
import PropTypes from "prop-types";

// Components
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../Logo/Logo";
import SearchField from "../Fields/SearchField";

// Styles
import styles from "./Main.module.scss";
import Menu from "../Menu/Menu";

// Data
import mainNavigation from "../../data/mainNavigation.json";
import footerNavigation from "../../data/footerNavigation.json";
import DropdownField from "../Fields/DropdownField";

export const Main = ({ children }) => {
  const [hasExpandedSidebar, setHasExpandedSidebar] = useState(false);

  const mainClassNames = [
    "mx-auto",
    "pt-28",
    "md:pt-24",
    "flex",
    "flex-col",
    "md:flex-row",
    "w-full",
  ];

  const contentContainerClassNames = ["w-full", "md:ml-64"];

  if (hasExpandedSidebar) {
    contentContainerClassNames.push("ml-64");
  }

  const toggleSidebar = () => {
    setHasExpandedSidebar(!hasExpandedSidebar);
  };

  return (
    <>
      <Header>
        <div className={["p-2", "md:p-4", "w-full", "md:w-64"].join(" ")}>
          <Logo title="Hacker<br/>News"></Logo>
        </div>
        <div className={["p-2", "md:p-4", "flex-auto", "text-left"].join(" ")}>
          <SearchField />
        </div>
        <div className={["p-2", "md:p-4", "flex-auto", "text-right"].join(" ")}>
          <DropdownField />
        </div>
      </Header>
      <div className={mainClassNames.join(" ")}>
        <Sidebar isExpanded={hasExpandedSidebar} action={toggleSidebar}>
          <Menu
            alignment="vertical"
            items={mainNavigation}
            as="ul"
            size="2xl"
          />
        </Sidebar>
        <div className={contentContainerClassNames.join(" ")}>{children}</div>
      </div>
      <Footer>
        <Menu alignment="columns" items={footerNavigation} as="ul" size="sm" />
      </Footer>
    </>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};
