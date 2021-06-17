import { getFirestore } from "redux-firestore";

export const addUserNote = ({ title, content }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const state = getState();
    const uid = state.firebase.auth.uid;
    const firestore = getFirestore();
    const id =
      Date.now().toString() + (Math.floor(Math.random() * 1000) + 1).toString();
    firestore
      .set(
        { collection: `users/${uid}/notes`, doc: id },
        {
          title: title,
          content: content,
          createdAt: firestore.FieldValue.serverTimestamp(),
          id: id,
        }
      )
      .then((res) => {
        dispatch({ type: "ADD_USER_NOTE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "ADD_USER_NOTE_ERROR", error: err });
      });
  };
};

export const getUserNote = (uid) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.setListener({
      collection: `users/${uid}/notes`,
      orderBy: ["createdAt"],
    });
  };
};

export const deleteUserNote = (noteID) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const state = getState();
    const uid = state.firebase.auth.uid;
    const firestore = getFirestore();
    firestore
      .delete({ collection: `users/${uid}/notes`, doc: noteID })
      .then((res) => {})
      .catch((err) => console.log(err));
  };
};
