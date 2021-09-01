// Styles
import styles from "./Sidebar.module.scss";

const Sidebar = ({ children, action, isExpanded }) => {
  const sidebarClassNames = [
    styles.Sidebar,
    "md:fixed",
    "h-full",
    "p-2",
    "w-full",
    "md:w-64",
    "z-10",
    "left-0"
  ];

  if (!isExpanded) {
    // sidebarClassNames.push("transform md:-translate-x-64")
  }

  return (
    <aside className={sidebarClassNames.join(" ")}>
      <div>{children}</div>
    </aside>
  );
};

Sidebar.defaultProps = {
  action: () => {},
};

export default Sidebar;
