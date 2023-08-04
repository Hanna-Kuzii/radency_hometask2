import { Note } from "../../type/Note";

interface NoteProps {
  addNewNote: (note: Note) => void
}

export const NewNote: React.FC<NoteProps> = ({addNewNote}) => {
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
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-2 new-note__button button-add"
          >
            Create note
          </button>
          <button
            // onClick={addNewNote}
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
