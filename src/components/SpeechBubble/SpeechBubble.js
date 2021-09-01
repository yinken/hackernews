import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from "./SpeechBubble.module.scss";

const SpeechBubble = ({ children }) => {
  const bubbleClassNames = [
    styles.SpeechBubble,
    "rounded-md",
    "text-white",
    "p-1",
    "h-6",
    "w-8",
    "flex",
    "justify-center",
    "items-center",
    "text-center",
    "font-bold",
  ];

  const pointClassNames = [styles.Point];

  return (
    <div className={["relative"].join(" ")}>
      <div className={bubbleClassNames.join(" ")}>{children}</div>
      <div className={pointClassNames.join(" ")}></div>
    </div>
  );
};

export default SpeechBubble;
