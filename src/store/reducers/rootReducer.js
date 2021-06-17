import authReducer from "./authReducer";
import userNotesReducer from "./userNotesReducer";
import { combineReducers } from "redux";
import demoNotesReducer from "./demoNotesReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  userNotes: userNotesReducer,
  demo: demoNotesReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
