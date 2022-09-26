import { useReducer } from "react";
import { ContactsReducer } from "../reducers/ContactsReducer";
import ContactTable from "./ContactTable";
import FormAdd from "./FormAdd";

const contacts = [
  {
    id: "1-1",
    name: "Juan",
    phone: "123456789",
  },
  {
    id: "2-2",
    name: "Pedro",
    phone: "987654321",
  },
  {
    id: "3-3",
    name: "Maria",
    phone: "123456789",
  },
];
const Contact = () => {
  const [state, dispatch] = useReducer(ContactsReducer, contacts);

  return (
    <div className="container mt-3">
      <FormAdd dispatch={dispatch} />
      <ContactTable contacts={state} dispatch={dispatch} />
    </div>
  );
};

export default Contact;
