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
      search: "",
    };
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
  onDeleteHandler = (id) => {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  };
  onArchiveHandler = (id) => {
    const archivedNote = this.state.notes.find((note) => note.id === id);
    archivedNote.archived = archivedNote.archived ? false : true;
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: [...notes, archivedNote] });
  };
  onSearchHandler = (search) => {
    this.setState({ search: search ?? "" });
    // const noteItem = document.querySelectorAll(".note-item");
    // noteItem.forEach((item) => {
    //   const noteTitle = item.firstChild.firstChild.textContent.toLowerCase();
    //   if (noteTitle.indexOf(event) !== -1) {
    //     item.setAttribute("style", "display: flex");
    //   } else {
    //     item.setAttribute("style", "display: none");
    //   }
    // });
  };
  render() {
    const {
      state,
      onAddNoteHandler,
      onSearchHandler,
      onDeleteHandler,
      onArchiveHandler,
    } = this;
    const { search, notes } = state;
    let filtered = notes;
    if (search.length > 0)
      filtered = notes.filter((note) =>
        note.title.toLowerCase().includes(search)
      );
    return (
      <div className="note-app">
        <Header />
        <div id="content">
          <div className="container">
            <NoteInput addNote={onAddNoteHandler} />
            <Search onSearch={onSearchHandler} />
            {filtered.length !== 0 ? (
              <NoteList
                notes={filtered}
                onDelete={onDeleteHandler}
                onArchive={onArchiveHandler}
              />
            ) : (
              <div className="not-found">
                <h2>
                  Tidak Ada Catatan{" "}
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
