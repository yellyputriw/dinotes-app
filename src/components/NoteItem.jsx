import { showFormattedDate } from "../utils/showFormatedDate";

const NoteItem = ({ id, title, body, createdAt, onDelete, onArchive }) => {
  return (
    <div className="note-item">
      <div className="note-item-body">
        <h3 className="note-title">{title}</h3>
        <p className="note-date">{showFormattedDate(createdAt)}</p>
        <p className="note-body">{body}</p>
      </div>
      <div className="action-button">
        <button className="note-delete" onClick={() => onDelete(id)}>
          Hapus
        </button>
        <button className="note-archive" onClick={() => onArchive(id)}>
          Arsipkan
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
