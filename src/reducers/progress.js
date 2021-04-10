import { SET_UPLOAD_PROGRESS } from "../action/actionTypes";

const progressReducer = (progress = 0, action) => {
  switch (action.type) {
    case SET_UPLOAD_PROGRESS:
      return action.payload;
    default:
      return progress;
  }
};

export default progressReducer;
