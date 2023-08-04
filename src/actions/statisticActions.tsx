import { StatisticItem } from "../type/StatisticItem";

export const upadateStatistic = (item: StatisticItem) => ({
  type: 'notesData/CREATE',
  payload: item,
});

export const editNote = (item: StatisticItem) => ({
  type: 'notesData/EDIT',
  payload: item,
});

export const archiveNote = (item: StatisticItem) => ({
  type: 'notesData/ARCHIVE',
  payload: item,
});

export const unArchiveNote = (item: StatisticItem) => ({
  type: 'notesData/UNARCHIVE',
  payload: item,
});

export const deleteNote = (item: StatisticItem) => ({
  type: 'notesData/DELETE',
  payload: item,
});
