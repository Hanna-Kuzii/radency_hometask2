import { Note } from "../type/Note";

export const createNote = (note: Note) => ({
  type: 'notesData/CREATE',
  payload: note,
});

export const editNote = (note: Note) => ({
  type: 'notesData/EDIT',
  payload: note,
});

export const archiveNote = (note: Note) => ({
  type: 'notesData/ARCHIVE',
  payload: note,
});

export const unArchiveNote = (note: Note) => ({
  type: 'notesData/UNARCHIVE',
  payload: note,
});

export const deleteNote = (note: Note) => ({
  type: 'notesData/DELETE',
  payload: note,
});
