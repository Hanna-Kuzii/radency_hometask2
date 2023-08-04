import { Note } from "../type/Note";

interface ActiveTableState {
  active: Note[];
  archive: Note[];
}

const initialState: ActiveTableState = {
  active: [], // You can leave it empty here or initialize with any initial active notes if needed
  archive: [], // You can leave it empty here or initialize with any initial archived notes if needed
};

const activeTableReducer = (state = initialState, action: any) => {
console.log(state);

  switch (action.type) {
    case "activeTable/CREATE":
      return {
        ...state,
        active: [...state.active, action.payload],
      };
    case "activeTable/EDIT":
      return {
        ...state,
        active: state.active.map((note: Note) =>
          note.name === action.payload.name ? action.payload : note
        ),
      };
    case "activeTable/ARCHIVE":
      const noteToArchive = state.active.find(
        (note: Note) => note.name === action.payload.name
      );
      if (noteToArchive) {
        return {
          ...state,
          active: state.active.filter((note) => note.name !== action.payload.name),
          archive: [...state.archive, noteToArchive],
        };
      }
      return state;
    case "activeTable/RESTORE":
      const noteToRestore = state.archive.find(
        (note) => note.name === action.payload.name
      );
      if (noteToRestore) {
        return {
          ...state,
          archive: state.archive.filter((note) => note.name !== action.payload.name),
          active: [...state.active, noteToRestore],
        };
      }
      return state;
    case "activeTable/DELETE":
      return {
        ...state,
        active: state.active.filter((note) => note.name !== action.payload.name),
      };
    default:
      return state;
  }

};

export default activeTableReducer;
