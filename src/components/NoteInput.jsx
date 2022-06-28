import { Component } from "react";

class NoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      createdAt: new Date().toISOString(),
      archived: false,
      charCount: 0,
    };

    this.maxLength = 50;

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.maxLengthsHandler = this.maxLengthsHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      body: event.target.value,
    }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ title: "", body: "" });
  }

  maxLengthsHandler(event) {
    this.setState({ charCount: event.target.value.length });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Note Baru</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Judul"
              minLength={0}
              maxLength={this.maxLength}
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
              onKeyUp={this.maxLengthsHandler}
              required
            />
            <span>
              {this.state.charCount}/{this.maxLength}
            </span>
          </div>
          <div className="form-group">
            <textarea
              placeholder="Pesan"
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
              required
            ></textarea>
          </div>
          <button type="submit">Tambah</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
