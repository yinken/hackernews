// Styles
import styles from "./Button.module.scss";

const Button = ({ children, isExpanded, action }) => {
  const buttonClassNames = [
    styles.Button,
    "py-2",
    "px-4",
    "text-white",
    "rounded-md",
    "flex",
    "justify-center",
    "items-center",
  ];

  if (isExpanded) {
    buttonClassNames.push("w-full");
  }

  return (
    <button onClick={action} className={buttonClassNames.join(" ")}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  isExpanded: false,
  action: () => {},
};

export default Button;
