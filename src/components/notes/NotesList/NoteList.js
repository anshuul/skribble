import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import "./NotesList.css";

const NotesList = ({ notes, deleteNote }) => {
  /* const notesList = {notes && notes.map((note) => <NoteCard note={note} key={note.id} />)}; */
  return (
    <div className="container demo-notes-list">
      {notes &&
        notes.map((note) => (
          <NoteCard note={note} key={note.id} deleteNote={deleteNote} />
        ))}
    </div>
  );
};

export default NotesList;
