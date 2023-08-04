import "./App.css";
import { Note, NotesList } from "./type/Note";
import { NewNote } from "./components/NewNote/NewNote";
import {
  createNote,
  editNote,
  archiveNote,
  deleteNote,
  unArchiveNote,
} from "./actions/notesDataActions";
import { ArchivedTable } from "./components/ArchivedNotes/ArchivedNotes";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useState } from "react";
import ActiveTable from "./components/ActiveTable/ActiveTable";
import { Statistic } from "./components/Statistic/Statistic";

function App() {
  const notesData = useAppSelector((state: any) => state.notesData);
  const statistic = useAppSelector((state: any) => state.statistic);
  const dispatch = useAppDispatch();

  const [newNoteForm, setNewNoteForm] = useState(false);

  const addNewNote = (note: Note) => {
    dispatch(createNote(note));
  };
  const editExistingNote = (note: Note) => {
    dispatch(editNote(note));
  };
  const archiveExistingNote = (note: Note) => {
    dispatch(archiveNote(note));
  };
  const unArchiveExistingNote = (note: Note) => {
    dispatch(unArchiveNote(note));
  };
  const deleteExistingNote = (note: Note) => {
    dispatch(deleteNote(note));
  };

  return (
    <div className="App main">
      {
        <ActiveTable
          notesData={notesData}
          editExistingNote={editExistingNote}
          archiveExistingNote={archiveExistingNote}
          deleteExistingNote={deleteExistingNote}
        />
      }
      <button className="button" onClick={() => setNewNoteForm(true)}>
        Create Note
      </button>{" "}
      {<Statistic statistic={statistic} />}
      {notesData.archive.length !== 0 && (
        <ArchivedTable
          notesData={notesData}
          unArchiveExistingNote={unArchiveExistingNote}
        />
      )}
      {newNoteForm && (
        <NewNote addNewNote={addNewNote} setNewNoteForm={setNewNoteForm} />
      )}

    </div>
  );
}

export default App;
