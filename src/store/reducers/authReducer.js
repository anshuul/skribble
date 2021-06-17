const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGN_IN_ERROR":
      console.log("Signin Error");
      return {
        ...state,
        authError: action.error.message,
      };
    case "SIGN_IN_SUCCESS":
      console.log("Signin Success");
      return {
        ...state,
        authError: null,
      };
    case "LOGOUT_SUCCESS":
      console.log("Logout Successful");
      return {
        ...state,
        authError: null,
      };
    case "LOGOUT_ERROR":
      console.log("Logout Failed");
      return {
        ...state,
        authError: action.error.message,
      };
    case "SIGN_UP_SUCCESS":
      console.log("Signup success");
      return {
        ...state,
        authError: null,
      };
    case "SIGN_UP_ERROR":
      console.log("Signup error");
      return {
        ...state,
        authError: action.error.message,
      };
    default:
      return state;
  }
};

export default authReducer;
