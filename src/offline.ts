import { GET_NOTES } from './queries';

export const saveNotes = cache => {
  const { notes } = cache.readQuery({ query: GET_NOTES });
  const jsonNote = JSON.stringify(notes);
  try {
    localStorage.setItem('notes', jsonNote);
  } catch (err) {
    console.log(err);
  }
};
