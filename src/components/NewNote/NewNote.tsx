import "./NewNote.css";
import { useState } from "react";
import { Note } from "../../type/Note";

interface NoteProps {
  addNewNote: (note: Note) => void;
  setNewNoteForm: (arg: boolean) => void;
}

export const NewNote: React.FC<NoteProps> = ({
  addNewNote,
  setNewNoteForm,
}) => {
  const [noteName, setNoteName] = useState("");
  const [noteText, setNoteText] = useState("");
  const [noteCategory, setNoteCategory] = useState("choosed");

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

  const handleCreateNote = (event: any) => {
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

      const date = new Date();
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const created = `${
        months[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;

      const newNote = {
        id: +date,
        icon: icon,
        name: noteName,
        created: created,
        category: noteCategory,
        content: noteText,
        dates: dates?.toString() || "",
      };

      addNewNote(newNote);

      event.preventDefault();
      document.forms[0].reset();
      setNewNoteForm(false);
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
              required
              placeholder="Name of your note"
            />
          </div>
          <div className="form-group">
            <label htmlFor="choosedCategory">Choose category</label>
            <select
              id="choosedCategory"
              defaultValue={"choosed"}
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
              onChange={handleChangeText}
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-primary mb-2 new-note__button button-add"
            onClick={handleCreateNote}
          >
            Create note
          </button>
        </form>
      </div>
    </div>
  );
};
