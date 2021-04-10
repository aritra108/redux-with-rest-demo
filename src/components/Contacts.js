import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../action/actionCreators";
import Contact from "./Contact";
import "./Contacts.css";

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <div className="contacts">
      <h1>My Contacts</h1>
      <div className="contacts__container">
        {contacts?.map(({ id, name, email, image }) => (
          <Contact key={id} id={id} name={name} email={email} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
