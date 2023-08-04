import { Note } from "../type/Note";

interface notesDataState {
  active: Note[];
  archive: Note[];
}

const initialState: notesDataState = {
  active: [
    {
      id: 4774,
      icon: "https://img.icons8.com/material-outlined/24/shopping-cart--v1.png",
      name: "Shopping list",
      created: "April 20, 2021",
      category: "Task",
      content: "Potatos, watermelon",
      dates: "",
    },
    {
      id: 333,
      icon: "https://img.icons8.com/material-outlined/24/shopping-cart--v1.png",
      name: "Sport",
      created: "December 23, 2023",
      category: "Task",
      content: "Gym every day",
      dates: "",
    },
    {
      id: 382,
      icon: "https://img.icons8.com/material-outlined/24/shopping-cart--v1.png",
      name: "New house",
      created: "May 10, 2020",
      category: "Task",
      content: "Buy new house",
      dates: "",
    },
    {
      id: 3183,
      icon: "https://img.icons8.com/material-outlined/24/shopping-cart--v1.png",
      name: "Present",
      created: "September 5, 2023",
      category: "Task",
      content: "Present for mother",
      dates: "",
    },
    {
      id: 2221,
      icon: "https://img.icons8.com/material-outlined/24/thinking-bubble.png",
      name: "Bissnes",
      created: "April 25, 2022",
      category: "Random Thought",
      content: "Mini green on Instagram",
      dates: "",
    },
    {
      id: 2811,
      icon: "https://img.icons8.com/material-outlined/24/shopping-cart--v1.png",
      name: "Cleaning",
      created: "June 30, 2023",
      category: "Task",
      content: "Clean room",
      dates: "",
    },
    {
      id: 98,
      icon: "https://img.icons8.com/material-outlined/24/idea--v1.png",
      name: "Meditation",
      created: "April 26, 2022",
      category: "Idea",
      content: "Do everyday",
      dates: "",
    },
  ],

  archive: [],
};

const notesDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "notesData/CREATE":
      return {
        ...state,
        active: [...state.active, action.payload],
      };
    case "notesData/EDIT":
      return {
        ...state,
        active: state.active.map((note: Note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };
    case "notesData/ARCHIVE":
      const noteToArchive = state.active.find(
        (note: Note) => note.id === action.payload.id
      );
      if (noteToArchive) {
        return {
          active: state.active.filter((note) => note.id !== action.payload.id),
          archive: [...state.archive, noteToArchive],
        };
      }
      return state;
    case "notesData/UNARCHIVE":
      const noteToUnarchive = state.archive.find(
        (note: Note) => note.id === action.payload.id
      );
      if (noteToUnarchive) {
        return {
          active: [...state.active, noteToUnarchive],
          archive: state.archive.filter(
            (note) => note.id !== action.payload.id
          ),
        };
      }
      return state;
    case "notesData/DELETE":
      return {
        ...state,
        active: state.active.filter((note) => note.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default notesDataReducer;
