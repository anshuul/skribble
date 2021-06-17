const initState = {
  notes: [
    {
      id: "12345",
      title: "Hello World",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quia magnam temporibus voluptatum vero dolorem assumenda praesentium, saepe reiciendis. Perspiciatis sed consequuntur corrupti. Voluptates blanditiis suscipit voluptatem saepe sapiente velit.",
      createdAt: Date.now().toString(),
    },
  ],
  addNotesError: null,
};

const userNotesReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_USER_NOTE_SUCCESS":
      console.log(state.notes);
      console.log("Add User Note Success");
      return {
        ...state,
        addNotesError: null,
      };
    case "ADD_USER_NOTE_ERROR":
      console.log(state.notes);
      console.log("Add User Note Error", action.error);
      return {
        ...state,
        addNotesError: action.error.message,
      };
    default:
      return state;
  }
};

export default userNotesReducer;
