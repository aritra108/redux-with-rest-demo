import { LinearProgress } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../action/actionCreators";
import api from "../api/contacts";
import "./Form.css";

const Form = () => {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.progress);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);

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

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contact = {
      id: generateID(),
      name,
      email,
      image,
    };

    // Dispatch to store
    dispatch(addContact(contact));

    // Reset Form
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
        <div className="form__profilePic">
          <h4>Add a Profile Picture</h4>
          <input type="file" onChange={handleChange} />
        </div>
        <LinearProgress
          variant="determinate"
          value={progress}
          className={(progress === 0 || progress === 100) && "hide"}
        />
        <p className={`form__feedback ${progress !== 100 && "hide"}`}>
          Contact Created Successfully!
        </p>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
