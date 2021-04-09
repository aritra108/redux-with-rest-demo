import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FETCH_CONTACTS,
  UPDATE_CONTACT,
} from "../action/actionTypes";

const contactsReducer = (contacts = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...contacts, action.payload];
    case FETCH_CONTACTS:
      return action.payload;
    case UPDATE_CONTACT:
      return contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
    case DELETE_CONTACT:
      return contacts.filter((contact) => contact.id !== action.payload);
    default:
      return contacts;
  }
};

export default contactsReducer;
