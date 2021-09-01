import React from "react";
import MenuItem from "./MenuItem";

// Styles
import styles from "./Menu.module.scss";

const Menu = ({ items, as, alignment, size }) => {
  const Tag = as;

  const renderMenuItems = (items) => {
    return items.map((item, index) => {
      return (
        <MenuItem
          as="li"
          key={index}
          href={item.url}
          title={item.title}
          isButton={item.isButton}
          size={size}
        />
      );
    });
  };

  const menuClassNames = [
    styles.Menu,
    "flex",
    "items-center",
    "md:items-start",
    "overflow-x-auto",
  ];

  if (alignment === "vertical") {
    menuClassNames.push("md:flex-col");
  } else if (alignment === "columns") {
    menuClassNames.push("hasColumns", "flex-row", "flex-wrap");
  } else {
    menuClassNames.push("flex-row");
  }

  if (items.length > 0) {
    return (
      <Tag className={menuClassNames.join(" ")}>{renderMenuItems(items)}</Tag>
    );
  }

  return null;
};

Menu.defaultProps = {
  as: "ul",
  alignment: "vertical",
  size: "lg",
};

export default Menu;
