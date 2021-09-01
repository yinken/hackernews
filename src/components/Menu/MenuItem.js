import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const MenuItem = ({ title, href, as, isButton, size }) => {
  const Tag = as;

  const menuItemClassNames = [
    "flex",
    "items-center",
    `md:text-${size}`,
    "text-gray-400",
  ];

  if (size === "sm") {
    menuItemClassNames.push("p-1");
  } else {
    menuItemClassNames.push("md:p-2");
  }

  if (isButton) {
    menuItemClassNames.push("md:pt-4");
  }

  return (
    <Tag className={menuItemClassNames.join(" ")}>
      {href ? (
        isButton ? (
          <Button isExpanded={true}>{title}</Button>
        ) : (
          <Link to={href}>{title}</Link>
        )
      ) : (
        <span>{title}</span>
      )}
    </Tag>
  );
};

MenuItem.defaultProps = {
  as: "li",
  isButton: false,
};

export default MenuItem;
