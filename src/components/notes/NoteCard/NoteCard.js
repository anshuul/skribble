import React, { Component } from "react";
import "./NoteCard.css";

class NoteCard extends Component {
  deleteCurrentNote = () => {
    this.props.deleteNote(this.props.note.id);
  };
  render() {
    return (
      <div className="row">
        <div className="col hide-on-small-only m2"></div>
        <div className="col s12 m6">
          <div className="card z-depth-2 hoverable">
            <div className="card-content">
              <span className="card-title demo-note-title">
                {this.props.note.title}
              </span>
              <p className="demo-note-content">{this.props.note.content}</p>
            </div>
            <div className="card-action">
              <a
                className="waves-effect waves-light red darken-2 btn-small modal-trigger"
                onClick={this.deleteCurrentNote}
              >
                <i className="material-icons left ">delete</i>Delete
              </a>
            </div>
          </div>
        </div>
        {/*     <div id={"deleteNote" + this.props.note.id} className="modal">
          <div className="modal-content">
            <h4>Confirm</h4>
            <p>
              Are you sure that you want to delete the following note -{" "}
              {this.props.note.title}?
            </p>
          </div>
          <div className="modal-footer">
            <div className="modal-close waves-effect waves-green btn-flat note-card-modal-button">
              No
            </div>
            <a
              className="modal-close waves-effect red-text waves-red btn-flat note-card-modal-button"
              onClick={this.deleteCurrentNote}
            >
              Yes
            </a>
          </div>
        </div> */}
        <div className="col hide-on-small-only m2"></div>
      </div>
    );
  }
}

export default NoteCard;
