export const signInUser = ({ email, password }) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .login({ email, password })
      .then((res) => {
        dispatch({ type: "SIGN_IN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_IN_ERROR", error: err });
      });
  };
};

export const logoutUser = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    firebase
      .logout()
      .then((res) => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGOUT_ERROR", error: err });
      });
  };
};

export const signUpUser = ({ name, email, password }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    /*     firebase
      .createUser(
        { email, password },
        {
          name: name,
          email: email,
          initial: name
            .split(" ")
            .map((item) => item[0])
            .join("")
            .toUpperCase(),
        }
      )
      .then((res) => {
        dispatch({ type: "SIGN_UP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_UP_ERROR", error: err });
      }); */

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((resp) => {
        console.log("firestore started");
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            name: name,
            email: email,
            initial: name
              .split(" ")
              .map((item) => item[0])
              .join("")
              .toUpperCase(),
          })
          .then((res) => console.log(res));
      })
      .then((res) => {
        dispatch({ type: "SIGN_UP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_UP_ERROR", error: err });
      });
  };
};
