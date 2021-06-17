export const addDemoNote = ({ title, content }) => {
  const newNote = {
    title: title,
    content: content,
  };

  return { type: "ADD_DEMO_NOTE", note: newNote };
};

export const deleteDemoNote = (id) => {
  return { type: "DELETE_DEMO_NOTE", id };
};
