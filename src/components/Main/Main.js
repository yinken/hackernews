import React from "react";
import PropTypes from "prop-types";

// Components
import { Header } from "../Header/Header";

// Styles
import styles from "./Main.module.scss";

export const Main = ({ children }) => {
  return (
    <div
      className={[styles.main, "mx-auto", "border-grey-300", "pt-20"].join(" ")}
    >
      <Header />
      {children}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};
