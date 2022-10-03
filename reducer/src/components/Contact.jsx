import { useEffect ,useReducer ,useState} from "react";
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

  const [formView, setFormView] = useState(false);
  
  return (
    <div className="container mt-3">
      <button onClick={()=> setFormView(!formView)} className="btn btn-primary">
        {!formView ? 'Add contact' : 'Close'}
      </button>
      {formView &&  <FormAdd dispatch={dispatch} />}
      <ContactTable contacts={state} dispatch={dispatch} />
    </div>
  );
};

export default Contact;
