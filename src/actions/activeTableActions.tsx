import { Note } from "../type/Note";

export const createNote = (note: Note) => ({
  type: 'activeTable/CREATE',
  payload: note,
});

export const editNote = (note: Note) => ({
  type: 'activeTable/EDIT',
  payload: note,
});

export const archiveNote = (note: Note) => ({
  type: 'activeTable/ARCHIVE',
  payload: note,
});

export const restoreNote = (note: Note) => ({
  type: 'activeTable/RESTORE',
  payload: note,
});

export const deleteNote = (note: Note) => ({
  type: 'activeTable/DELETE',
  payload: note,
});
