const Footer = ({children}) => {
  const footerClassNames = [
    "md:fixed",
    "bottom-0",
    "left-0",
    "w-full",
    "md:w-64",
    "z-30",
    "p-4",
  ];

  return <footer className={footerClassNames.join(" ")}>{children}</footer>;
};

export default Footer;
