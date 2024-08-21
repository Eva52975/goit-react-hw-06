import { useState, useEffect } from "react";

import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("key"));

    if (savedContacts !== null) {
      return savedContacts;
    }

    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  useEffect(() => {
    window.localStorage.setItem("key", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const addContacts = (newContact) => {
    setContacts((prev) => {
      return [...prev, newContact];
    });
    console.log(newContact);
  };

  const deleteContact = (idContact) => {
    setContacts((prev) => {
      return prev.filter((contact) => contact.id !== idContact);
    });
  };

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
