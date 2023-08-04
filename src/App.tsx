import "./App.css";
import ActiveTable from "./components/ActiveTable/ActiveTable";
import { Note, NotesList } from "./type/Note";
import { NewNote } from "./components/NewNote/NewNote";
import {
  createNote,
  editNote,
  archiveNote,
  deleteNote,
} from "./actions/activeTableActions";
import notes from "../src/json/notes.json";
import { ArchivedTable } from "./components/ArchivedNotes/ArchivedNotes";
import { useAppDispatch, useAppSelector } from "./hooks";

function App() {
  const notesData = useAppSelector((state: NotesList) => notes);
  const dispatch = useAppDispatch();

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
    dispatch(archiveNote(note));
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
      {/* {<Statistic statistic={statistic}/>} */}
      {
        <ArchivedTable
          notesData={notesData}
          unArchiveExistingNote={unArchiveExistingNote}
        />
      }
      {<NewNote addNewNote={addNewNote} />}
    </div>
  );
}

export default App;
