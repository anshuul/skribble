import React, { Component } from "react";
import NewNote from "../../components/notes/NewNote/NewNote";
import NoteCard from "../../components/notes/NoteCard/NoteCard";
import { connect } from "react-redux";
import NotesList from "../../components/notes/NotesList/NoteList";
import {
  addUserNote,
  getUserNote,
  deleteUserNote,
} from "../..//store/actions/userNotesActions";
import { Redirect } from "react-router-dom";
import nothingFound from "../../nothing-found.png";
import "./Notes.css"

class Notes extends Component {
  componentDidMount() {
    if (this.props.auth.uid) {
      this.props.getNote(this.props.auth.uid);
    }
  }
  render() {
    console.log(this.props);
    if (!this.props.auth.uid) return <Redirect to="/demo" />;
    return (
      <div>
        <NewNote addNote={(note) => this.props.addNote(note)} />
        {this.props.notes && this.props.notes.length > 0 ? (
          <NotesList
            notes={this.props.notes}
            deleteNote={this.props.deleteNote}
          />
        ) : (
            <div className="row center-align">
              <img
                src={nothingFound}
                alt="No Notes Found"
                className="nothing-found-image"
              />
              <h4 className="nothing-found-title">Your Notes List is Empty</h4>
              <p className="nothing-found-description">
                Looks like you don't have any notes. Fill the form above to add
                new notes.
            </p>
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.firestore.ordered[`users/${state.firebase.auth.uid}/notes`],
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch(addUserNote(note)),
    getNote: (uid) => dispatch(getUserNote(uid)),
    deleteNote: (id) => dispatch(deleteUserNote(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
