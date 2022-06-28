import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onArchive }) => {
  const archivedNote = notes.some((item) => item.archived === true);

  return (
    <div className="note-wrapper">
      <div>
        <h2 className="note">List Note</h2>
        <div className="note-list">
          {notes.map(({ id, title, body, createdAt, archived }) => {
            if (archived === false) {
              return (
                <NoteItem
                  key={Math.random().toString()}
                  id={id}
                  title={title}
                  body={body}
                  createdAt={createdAt}
                  onDelete={onDelete}
                  onArchive={onArchive}
                />
              );
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
      {archivedNote && (
        <div>
          <h2 className="archive">Archived Note</h2>
          <div className="note-list">
            {notes.map(({ id, title, body, createdAt, archived }) => {
              if (archived) {
                return (
                  <NoteItem
                    key={Math.random().toString()}
                    id={id}
                    title={title}
                    body={body}
                    createdAt={createdAt}
                    onDelete={onDelete}
                    onArchive={onArchive}
                  />
                );
              } else {
                return <></>;
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteList;
