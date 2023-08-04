const initialStateStatistic = [
  {
    category: "Random Thought",
    icon: "https://img.icons8.com/material-outlined/24/thinking-bubble.png",
    active: 1,
    archived: 0,
  },
  {
    category: "Task",
    icon: "https://img.icons8.com/material-outlined/24/shopping-cart--v1.png",
    active: 5,
    archived: 0,
  },
  {
    category: "Idea",
    icon: "https://img.icons8.com/material-outlined/24/idea--v1.png",
    active: 1,
    archived: 0,
  },
];

export const statisticsReducer = (
  state = initialStateStatistic,
  action: any
) => {
  switch (action.type) {
    case "notesData/CREATE":
      const newNote = action.payload;
      const updatedState = state.map((item) => {
        if (item.category === newNote.category) {
          return { ...item, active: item.active + 1 };
        }
        return item;
      });
      return updatedState;
    case "notesData/ARCHIVE":
      const archivedNote = action.payload;
      state = [
        ...state.map((item) => {
          if (item.category === archivedNote.category) {
            return {
              ...item,
              active: item.active - 1,
              archived: item.archived + 1,
            };
          }
          return item;
        }),
      ];
      return state;
    case "notesData/UNARCHIVE":
      const unarchivedNote = action.payload;
      state = [
        ...state.map((item) => {
          if (item.category === unarchivedNote.category) {
            return {
              ...item,
              active: item.active + 1,
              archived: item.archived - 1,
            };
          }
          return item;
        }),
      ];
      return state;
      case "notesData/DELETE":
        const note = action.payload;
        state = [
          ...state.map((item) => {
            if (item.category === note.category) {
              return { ...item, active: item.active - 1 };
            }
            return item;
          }),
        ];
        return state;
    default:
      return state;
  }
};
