import { useState } from "react";
import { Note } from "../../type/Note";

interface NoteProps {
  note: Note;
  editExistingNote: (note: Note) => void;
  setEditForm: (arg: boolean) => void;
}

export const EditForm: React.FC<NoteProps> = ({
  note,
  editExistingNote,
  setEditForm,
}) => {
  const [noteName, setNoteName] = useState(note.name);
  const [noteText, setNoteText] = useState(note.content);
  const [noteCategory, setNoteCategory] = useState(note.category);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoteName(event.target.value || "");
  };
  const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(event.target.value || "");
  };
  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNoteCategory(event.target.value || "choosed");
  };

  const handleEditNote = (event: any) => {
    if (noteName === "" || noteText === "" || noteCategory === "choosed") {
      window.alert("You have to add right data");
    } else {
      let icon = "";
      switch (noteCategory) {
        case "Idea":
          icon = "https://img.icons8.com/material-outlined/24/idea--v1.png";
          break;
        case "Task":
          icon =
            "https://img.icons8.com/material-outlined/24/shopping-cart--v1.png";
          break;
        case "Random Thought":
          icon =
            "https://img.icons8.com/material-outlined/24/thinking-bubble.png";
          break;
        default:
          console.log(`Mistake.`);
      }

      const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g;
      const dates = noteText.match(dateRegex);

      const editNote = {
        id: note.id,
        icon: icon,
        name: noteName,
        created: note.created,
        category: noteCategory,
        content: noteText,
        dates: dates?.toString() || "",
      };

      editExistingNote(editNote);

      event.preventDefault();
      document.forms[0].reset();
      setEditForm(false);
    }
  };
  return (
    <div className="new-note">
      <div className="new-note__container">
        <form className="new-note__form">
          <div className="form-group">
            <label htmlFor="noteName">Note's name</label>
            <input
              id="noteName"
              type="text"
              className="form-control new-note__name"
              onChange={handleChangeName}
              value={noteName}
              required
              placeholder="Name of your note"
            />
          </div>
          <div className="form-group">
            <label htmlFor="choosedCategory">Choose category</label>
            <select
              id="choosedCategory"
              defaultValue={noteCategory}
              className="form-control new-note__category"
              required
              onChange={handleChangeCategory}
            >
              <option value="choosed" disabled>
                -Category-
              </option>
              <option id="task" value="Task">
                Task
              </option>
              <option id="idea" value="Idea">
                Idea
              </option>
              <option id="thought" value="Random Thought">
                Random Thought
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="textArea">Notes</label>
            <textarea
              id="textArea"
              className="form-control new-note__text"
              rows={3}
              required
              value={noteText}
              onChange={handleChangeText}
            ></textarea>
          </div>
          <button
            onClick={handleEditNote}
            type="button"
            className="btn btn-primary mb-2 new-note__button button-edit"
          >
            Edit note
          </button>
        </form>
      </div>
    </div>
  );
};
