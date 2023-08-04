import React from "react";
import { connect } from "react-redux";
import { Note, NotesList } from "../../type/Note";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

interface ActiveTableProps {
  notesData: NotesList;
  editExistingNote: (note: Note) => void;
  archiveExistingNote: (note: Note) => void;
  deleteExistingNote: (note: Note) => void;
}

const ActiveTable: React.FC<ActiveTableProps> = ({
  notesData,
  editExistingNote,
  archiveExistingNote,
  deleteExistingNote,
}) => {
  // const dispatch = useDispatch();
  const handleCreateNote = () => {
    // // Dispatch the createNote action to add a new note
    // const newNote = {
    //   icon: "icon-url",
    //   name: "New Note",
    //   create: "2023-08-04",
    //   category: "General",
    //   content: "Note content",
    //   dates: "2023-08-04",
    // };
    // dispatch(createNote(newNote));
  };
  return (
    <div className="main__active active">
      <table className="table active__table">
        <thead>
          <tr className="table__title">
            <th scope="col" className="table__title_block"></th>
            <th scope="col" className="table__title_block">
              Name
            </th>
            <th scope="col" className="table__title_block">
              Created
            </th>
            <th scope="col" className="table__title_block">
              Category
            </th>
            <th scope="col" className="table__title_block">
              Content
            </th>
            <th scope="col" className="table__title_block">
              Dates
            </th>
            <th scope="col" className="table__title_block">
              <img
                src="https://img.icons8.com/material-outlined/24/downloads.png"
                alt="archive"
              />
              <img
                src="https://img.icons8.com/material-outlined/24/trash--v1.png"
                alt="delete"
              />
            </th>
          </tr>
        </thead>
        <tbody className="table__body active__body">
          {notesData.active.map((note: Note) => (
            <tr key={note.name} className="table__row active__row">
              <th scope="row" className="table__block">
                <img src={note.icon} alt="task" />
              </th>
              <td className="table__block">{note.name}</td>
              <td className="table__block">{note.created}</td>
              <td className="table__block">{note.category}</td>
              <td className="table__block">{note.content}</td>
              <td className="table__block">{note.dates}</td>
              <td className="table__block">
                <button
                  className="button_edit"
                  onClick={() => {
                    editExistingNote(note);
                  }}
                >
                  <img
                    src="https://img.icons8.com/material-outlined/24/edit--v1.png"
                    alt="edit"
                  />
                </button>
                <button className="button_archive"
                onClick={() => {
                  archiveExistingNote(note);
                }}>
                  <img
                    src="https://img.icons8.com/material-outlined/24/downloads.png"
                    alt="archive"
                  />
                </button>
                <button className="button_delete" onClick={() => {
                  deleteExistingNote(note)
                }}>
                  <img
                    src="https://img.icons8.com/material-outlined/24/trash--v1.png"
                    alt="delete"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleCreateNote} className="button">
        Create Note
      </button>{" "}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(ActiveTable);
