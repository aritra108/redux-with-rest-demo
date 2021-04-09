import api from "../api/contacts";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FETCH_CONTACTS,
  SET_CONTACTS,
} from "./actionTypes";
import { UPDATE_CONTACT } from "./actionTypes";

export const addContact = (contact) => {
  return async (dispatch) => {
    const response = await api.post("/contacts", contact);

    dispatch({
      type: ADD_CONTACT,
      payload: response.data,
    });
  };
};

export const fetchContacts = () => {
  return async (dispatch) => {
    const contacts = await api.get("/contacts");

    dispatch({
      type: FETCH_CONTACTS,
      payload: contacts.data,
    });
  };
};

export const updateContact = (updatedContact) => {
  return async (dispatch) => {
    const response = await api.put(
      `contacts/${updatedContact.id}`,
      updatedContact
    );

    dispatch({
      type: UPDATE_CONTACT,
      payload: response.data,
    });
  };
};

export const deleteContact = (id) => {
  return async (dispatch) => {
    await api.delete(`contacts/${id}`);

    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };
};
