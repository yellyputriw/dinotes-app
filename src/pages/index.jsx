import { Component } from "react";
import { getInitialData } from "../utils/getInitialData";
import Header from "../components/Header";
import NoteInput from "../components/NoteInput";
import Search from "../components/Search";
import NoteList from "../components/NoteList";

class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData,
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date().toISOString(),
          archived: false,
        },
      ],
    }));
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const archivedNote = this.state.notes.find((note) => note.id === id);
    archivedNote.archived = archivedNote.archived ? false : true;

    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: [...notes, archivedNote] });
  }

  onSearchHandler(event) {
    const noteItem = document.querySelectorAll(".note-item");
    noteItem.forEach((item) => {
      const noteTitle = item.firstChild.firstChild.textContent.toLowerCase();
      if (noteTitle.indexOf(event) !== -1) {
        item.setAttribute("style", "display: flex");
      } else {
        item.setAttribute("style", "display: none");
      }
    });
  }

  render() {
    return (
      <div className="note-app">
        <Header />
        <div id="content">
          <div className="container">
            <NoteInput addNote={this.onAddNoteHandler} />
            <Search onSearch={this.onSearchHandler} />
            {this.state.notes.length !== 0 ? (
              <NoteList
                notes={this.state.notes}
                onDelete={this.onDeleteHandler}
                onArchive={this.onArchiveHandler}
              />
            ) : (
              <div className="not-found">
                <h2>
                  Belum Ada Catatan{" "}
                  <img src="/images/dinosur.svg" alt="dino" height={24} />
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NoteApp;
