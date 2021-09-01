// Styles
import styles from "./Logo.module.scss";

const Logo = ({ title, isSpinning, hasDropShadow }) => {
  const containerClassNames = ["flex", "flex-row"];

  const logoClassNames = [
    styles.Logo,
    "h-12",
    "w-12",
    "border-4",
    "border-white",
    "flex",
    "justify-center",
    "items-center",
    "rounded-tl-lg",
    "rounded-br-lg",
  ];

  if (hasDropShadow) {
    logoClassNames.push(styles.hasDropShadow);
  }

  if (isSpinning) {
    logoClassNames.push("animate-spin");
  }

  return (
    <div className={containerClassNames.join(" ")}>
      <div className={logoClassNames.join(" ")}>
        <span className={["text-2xl", "text-white", "font-bold"].join(" ")}>
          Y
        </span>
      </div>
      {title && (
        <h1
          className={["ml-2", "text-2xl", "font-bold", "leading-none"].join(
            " "
          )}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
      )}
    </div>
  );
};

Logo.defaultProps = {
  isSpinning: false,
  hasDropShadow: true,
};

export default Logo;
