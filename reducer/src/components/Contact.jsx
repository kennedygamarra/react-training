import { useEffect } from "react";
import { useReducer } from "react";
import { ContactsReducer } from "../reducers/ContactsReducer";
import ContactTable from "./ContactTable";
import FormAdd from "./FormAdd";

const init = () => {
  const contacts = localStorage.getItem("contacts");

  return contacts ? JSON.parse(contacts) : [];
}
const Contact = () => {
  const [state, dispatch] = useReducer(ContactsReducer,[],init);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state));
  }, [state])
  
  return (
    <div className="container mt-3">
      <FormAdd dispatch={dispatch} />
      <ContactTable contacts={state} dispatch={dispatch} />
    </div>
  );
};

export default Contact;
