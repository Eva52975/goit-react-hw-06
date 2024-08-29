import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContacts } from "../../redux/contactsSlice";

const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();
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
      <button className={css.deleteBtn} onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
