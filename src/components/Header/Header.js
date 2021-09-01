import React, { useState } from "react";

// Styles
import styles from "./Header.module.scss";

export const Header = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (theme) => {
    if (theme === "light") {
      setTheme("dark");
      document.querySelector("html").classList.add("dark");
    } else {
      setTheme("light");
      document.querySelector("html").classList.remove("dark");
    }
  };

  return (
    <nav
      className={[
        styles.Header,
        "fixed",
        "top-0",
        "left-0",
        "w-screen",
        "z-30",
      ].join(" ")}
    >
      <div
        className={[
          "flex",
          "flex-wrap",
          "flex-row",
          "items-center",
          "justify-start",
        ].join(" ")}
      >
        {children}
      </div>
    </nav>
  );
};
