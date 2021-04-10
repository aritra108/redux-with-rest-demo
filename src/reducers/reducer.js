import { combineReducers } from "redux";
import contactsReducer from "./contacts";
import progressReducer from "./progress";

const reducer = combineReducers({
  contacts: contactsReducer,
  progress: progressReducer,
});

export default reducer;
