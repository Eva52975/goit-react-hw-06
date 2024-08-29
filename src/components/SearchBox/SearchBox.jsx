import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.wrap}>
      <label className={css.label}>
        Search by name
        <input className={css.input} type="text" onChange={(e) => dispatch(changeFilter(e.target.value))} />
      </label>
    </div>
  );
};

export default SearchBox;
