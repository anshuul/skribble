import React, { Component } from "react";
import NoteList from "../../components/notes/NotesList/NoteList";
import NewNote from "../../components/notes/NewNote/NewNote";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  addDemoNote,
  deleteDemoNote,
} from "../../store/actions/demoNotesActions";

class Demo extends Component {
  render() {
    console.log(this.props);
    if (this.props.auth.uid) {
      return <Redirect to="/notes" />;
    }
    return (
      <div>
        {/* <NewNote addNote={(data) => this.props.addNote(data)} />
        <NotesList
          notes={this.props.notes}
          deleteNote={this.props.deleteNote}
        /> */}

        <NewNote addNote={(data) => this.props.addNote(data)} />
        <NoteList notes={this.props.notes} deleteNote={this.props.deleteNote} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.demo.notes,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch(addDemoNote(note)),
    deleteNote: (id) => dispatch(deleteDemoNote(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
