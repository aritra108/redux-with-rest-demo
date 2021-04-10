import api from "../api/contacts";
import { storage } from "../firebase/firebase";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FETCH_CONTACTS,
  SET_UPLOAD_PROGRESS,
  UPDATE_CONTACT,
} from "./actionTypes";

export const addContact = ({ id, name, email, image }) => {
  return async (dispatch) => {
    // Upload image to firebase
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress Function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        dispatch(setUploadProgress(progress));
      },
      (error) => {
        // Error Handler
        alert(error.message);
      },
      () => {
        // Completion Function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(async (url) => {
            // Create the contact object
            const contact = {
              id,
              name,
              email,
              image: url,
            };

            // Post to the REST API
            const response = await api.post("/contacts", contact);

            // Update the Store State
            dispatch({
              type: ADD_CONTACT,
              payload: response.data,
            });

            // Reset the progress to zero
            dispatch(setUploadProgress(0));
          });
      }
    );
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

export const setUploadProgress = (value) => {
  return {
    type: SET_UPLOAD_PROGRESS,
    payload: value,
  };
};
