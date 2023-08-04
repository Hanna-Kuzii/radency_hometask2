export interface Note {
  icon: string,
  name: string,
  created: string,
  category: string,
  content: string,
  dates: string
};

export interface NotesList {
  active: Note[],
  archive?: Note[],
}