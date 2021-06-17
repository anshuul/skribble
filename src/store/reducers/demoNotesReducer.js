const initState = {
  notes: [
    {
      id: "12345",
      title: "Hello World",
      content: "My name is John Doe !!",
      createdAt: Date.now().toString(),
    },
  ],
};

const demoNotesReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_DEMO_NOTE":
      const newNote = {
        title: action.note.title,
        content: action.note.content,
        id:
          Date.now().toString() +
          (Math.floor(Math.random() * 1000) + 1).toString(),
        createdAt: Date.now().toString(),
      };
      console.log(newNote);
      return { ...state, notes: [...state.notes, newNote] };
    case "DELETE_DEMO_NOTE":
      const newNotes = state.notes.filter((note) => note.id !== action.id);
      return {
        ...state,
        notes: newNotes,
      };
    default:
      return state;
  }
};

export default demoNotesReducer;
