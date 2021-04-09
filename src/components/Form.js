import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../action/actionCreators";
import api from "../api/contacts";
import "./Form.css";

const Form = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function generateID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contact = {
      id: generateID(),
      name,
      email,
    };

    // const response = await api.post("/contacts", request);
    dispatch(addContact(contact));

    setName("");
    setEmail("");
  };

  return (
    <div className="form">
      <h2>Add a Contact</h2>
      <form className="form__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
