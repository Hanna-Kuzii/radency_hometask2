import React, { useState } from "react";
import { connect } from "react-redux";
import { Note, NotesList } from "../../type/Note";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { EditForm } from "../EditForm/EditForm";

interface ActiveTableProps {
  notesData: NotesList;
  editExistingNote: (note: Note) => void;
  archiveExistingNote: (note: Note) => void;
  deleteExistingNote: (note: Note) => void;
}

export const ActiveTable: React.FC<ActiveTableProps> = ({
  notesData,
  editExistingNote,
  archiveExistingNote,
  deleteExistingNote,
}) => {
  const [editNoteForm, setEditForm] = useState(false);
  const [editedNote, setEditedNote] = useState({
    id: 1,
    icon: "",
    name: "",
    created: "",
    category: "",
    content: "",
    dates: "",
  });

  return (
    <>
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
            {notesData?.active.map((note: Note) => (
              <>
                <tr key={note.id} className="table__row active__row">
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
                        setEditForm(true);
                        setEditedNote(note);
                      }}
                    >
                      <img
                        src="https://img.icons8.com/material-outlined/24/edit--v1.png"
                        alt="edit"
                      />
                    </button>
                    <button
                      className="button_archive"
                      onClick={() => {
                        archiveExistingNote(note);
                      }}
                    >
                      <img
                        src="https://img.icons8.com/material-outlined/24/downloads.png"
                        alt="archive"
                      />
                    </button>
                    <button
                      className="button_delete"
                      onClick={() => {
                        deleteExistingNote(note);
                      }}
                    >
                      <img
                        src="https://img.icons8.com/material-outlined/24/trash--v1.png"
                        alt="delete"
                      />
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      {editNoteForm && (
        <EditForm
          note={editedNote}
          editExistingNote={editExistingNote}
          setEditForm={setEditForm}
        />
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(ActiveTable);
