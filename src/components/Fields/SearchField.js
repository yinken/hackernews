// Styles
import styles from "./Fields.module.scss";

const SearchField = () => {
  const searchFieldClassNames = [styles.Field];

  return (
    <input
      className={searchFieldClassNames.join(" ")}
      placeholder="Search"
      type="search"
    ></input>
  );
};

export default SearchField;
