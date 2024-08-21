import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.wrap}>
      <label className={css.label}>
        Search by name
        <input className={css.input} type="text" value={value} onChange={(e) => onFilter(e.target.value)} />
      </label>
    </div>
  );
};

export default SearchBox;
