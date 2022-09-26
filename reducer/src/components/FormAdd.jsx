import { useState } from "react";
import { v4 as uuid } from "uuid";

const FormAdd = ({ dispatch }) => {
  const [data, setData] = useState({ name: "", phone: "" });
  const { name, phone } = data;
  const actionAdd = {
    type: "add",
    payload: {
      id: uuid(),
      name,
      phone,
    },
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    dispatch(actionAdd);
  };
  return (
    <div className="container">
      <label className="mx-1 d-grid gap-2">
        Name:{" "}
        <input
          value={name}
          onChange={handleChange}
          name="name"
          type="text"
          className="form-control"
          autoComplete="off"
        />
      </label>
      <label className="mx-1 d-grid gap-2">
        Phone:{" "}
        <input
          value={phone}
          onChange={handleChange}
          name="phone"
          type="text"
          className="form-control"
          autoComplete="off"
        />
      </label>
      <div className="mx-1 d-grid gap-2">
        <button className="btn btn-primary mt-2" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default FormAdd;
