import { GET_NOTES } from './queries';

const NOTES = 'notes';

export const saveNotes = cache => {
  const { notes } = cache.readQuery({ query: GET_NOTES });
  const jsonNote = JSON.stringify(notes);
  try {
    localStorage.setItem(NOTES, jsonNote);
  } catch (err) {
    console.log(err);
  }
};

export const restoreNote = () => {
  const notes = localStorage.getItem(NOTES);

  try {
    const parsedNote = notes ? JSON.parse(notes) : [];
    return Array.isArray(parsedNote) ? parsedNote : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};
