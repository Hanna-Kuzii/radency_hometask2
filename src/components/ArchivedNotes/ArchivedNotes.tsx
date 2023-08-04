import React from "react";
import { Note, NotesList } from "../../type/Note";

interface ArchivedTableProps {
  notesData: NotesList;
  unArchiveExistingNote: (note: Note) => void;
}

export const ArchivedTable: React.FC<ArchivedTableProps> = ({
  notesData,
  unArchiveExistingNote
}) => {
  return (
    <div className="main__archive archive">
      <div className="archive__buttons">
        <button className="archive__show button">Show archived notes</button>
        <button className="archive__hide button">Hide archived notes</button>
      </div>
      <table className="table archive__table">
        <thead>
          <tr className="table__title archive__title">
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
            </th>
          </tr>
        </thead>
        <tbody className="table__body archive__body">
          {notesData.archive?.map((note: Note) => (
            <tr key={note.name} className="table__row archive__row">
              <th scope="row" className="table__block">
                <img src={note.icon} alt="task" />
              </th>
              <td className="table__block">{note.name}</td>
              <td className="table__block">{note.created}</td>
              <td className="table__block">{note.category}</td>
              <td className="table__block">{note.content}</td>
              <td className="table__block">{note.dates}</td>
              <td className="table__block">
                <button className="button_unarchive" onClick={() => {
                  unArchiveExistingNote(note)
                }}>
                  <img
                    src="https://img.icons8.com/material-outlined/24/downloads.png"
                    alt="archive"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
