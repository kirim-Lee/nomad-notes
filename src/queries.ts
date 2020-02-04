import gql from 'graphql-tag';
import { NOTE_FRAGMENT } from './fragment';

export const GET_NOTE = gql`
  query($id: String!) {
    note(id: $id) @client {
      ...NoteParts
    }
  }
  ${NOTE_FRAGMENT}
`;

export const GET_NOTES = gql`
  {
    notes @client {
      id
      title
      content
    }
  }
`;

export const ADD_NOTE = gql`
  mutation($title: String!, $content: String!) {
    createNote(title: $title, content: $content) @client {
      ...NoteParts
    }
  }
  ${NOTE_FRAGMENT}
`;
