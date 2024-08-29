import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectConacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectConacts);
  const filter = useSelector(selectNameFilter);

  const filteredData = contacts.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul className={css.contactsList}>
      {filteredData.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
