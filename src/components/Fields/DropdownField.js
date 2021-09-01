// Styles
import styles from "./Fields.module.scss";

const DropdownField = () => {
  const dropdownFieldClassNames = [styles.Field];

  return (
    <select className={dropdownFieldClassNames.join(" ")} type="search">
      <option selected value="new">
        New
      </option>
    </select>
  );
};

export default DropdownField;
