import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Avatar } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import "./Contact.css";
import api from "../api/contacts";
import { deleteContact, updateContact } from "../action/actionCreators";

const Contact = ({ id, name, email, image }) => {
  const dispatch = useDispatch();

  const [update, setUpdate] = useState(false);
  const [inputName, setInputName] = useState(name);
  const [inputEmail, setInputEmail] = useState(email);

  const handleUpdate = async () => {
    setUpdate(false);

    const updatedContact = {
      id,
      name: inputName,
      email: inputEmail,
    };

    dispatch(updateContact(updatedContact));
  };

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="contact">
      <div className="contact__left">
        <Avatar className="contact__avatar" src={image} alt={name} />
        <div className="contact__leftDetails">
          <h4 className={update && "hide"}>{name}</h4>
          <p className={update && "hide"}>{email}</p>
          <input
            type="text"
            className={`contact__inputName ${!update && "hide"}`}
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <input
            type="text"
            className={`contact__inputEmail ${!update && "hide"}`}
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="contact__right">
        <EditIcon
          className={`contact__editIcon ${update && "hide"}`}
          onClick={() => setUpdate(true)}
        />
        <DeleteIcon
          className={`contact__deleteIcon ${update && "hide"}`}
          onClick={handleDelete}
        />
        <button
          className={`contact__updateBtn ${!update && "hide"}`}
          onClick={handleUpdate}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Contact;
