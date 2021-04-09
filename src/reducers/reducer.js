import { combineReducers } from "redux";
import contactsReducer from "./contacts";

const reducer = combineReducers({
  contacts: contactsReducer,
});

export default reducer;
