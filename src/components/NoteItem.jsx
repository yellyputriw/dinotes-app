import { showFormattedDate } from "../utils/showFormatedDate";

const NoteItem = ({
  id,
  title,
  body,
  createdAt,
  onDelete,
  onArchive,
  isArchive,
}) => {
  return (
    <div className="note-item">
      <div className="note-item-body">
        <h3 className="note-title">{title}</h3>
        <p className="note-date">{showFormattedDate(createdAt)}</p>
        <p className="note-body">{body}</p>
      </div>
      <div className="action-button">
        <button className="note-delete note-btn" onClick={() => onDelete(id)}>
          Hapus
        </button>
        <button className="note-archive note-btn" onClick={() => onArchive(id)}>
          {isArchive ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
