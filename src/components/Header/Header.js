import React, { useState } from "react";

export const Header = () => {
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
        "fixed",
        "border-black",
        "border-b",
        "border-solid",
        "top-0",
        "left-0",
        "w-screen",
        "bg-gray-300",
        "dark:bg-gray-700",
        "z-30",
      ].join(" ")}
    >
      <div
        className={[
          "p-4",
          "flex",
          "flex-row",
          "items-center",
          "justify-between",
        ].join(" ")}
      >
        <div>
          <h1 className={["text-lg", "font-bold"].join(" ")}>Hackernews</h1>
        </div>

        <div>
          <button
            className={["hover:pointer"].join(" ")}
            onClick={() => toggleTheme(theme)}
          >{`Turn ${theme === "light" ? "off" : "on"} the lights`}</button>
        </div>
      </div>
    </nav>
  );
};
