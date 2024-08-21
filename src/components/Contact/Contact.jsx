import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ data: { name, number, id }, onDelete }) => {
  return (
    <div className={css.wrap}>
      <p className={css.text}>
        <FaUser className={css.icon} />
        {name}
      </p>
      <p className={css.text}>
        <FaPhoneAlt className={css.icon} />
        {number}
      </p>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
