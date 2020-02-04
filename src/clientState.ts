import { NOTE_FRAGMENT } from './fragment';
import { GET_NOTES } from './queries';
import rhg from 'random-hash-generator';

export const resolvers = {
  Query: {
    note: (_, variables, { cache }) => {
      const id = cache.config.dataIdFromObject({
        __typename: 'Note',
        id: variables.id
      });
      const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id });

      return note;
    }
  },
  Mutation: {
    createNote: (_, variables, { cache }) => {
      const { notes } = cache.readQuery({ query: GET_NOTES });
      const { title, content } = variables;
      const newNote = {
        __typename: 'Note',
        title,
        content,
        id: rhg.generate(10, notes.length, 'note').key + notes.length
      };

      cache.writeData({ data: { notes: [newNote, ...notes] } });
      return newNote;
    },
    editNote: (_, { id, title, content }, { cache }) => {
      const noteId = cache.config.dataIdFromObject({
        __typename: 'Note',
        id
      });
      const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id: noteId });
      const updateNote = {
        ...note,
        title,
        content
      };
      cache.writeFragment({
        id: noteId,
        fragment: NOTE_FRAGMENT,
        data: updateNote
      });
      return updateNote;
    }
  }
};
export const defaults = {
  notes: [
    {
      __typename: 'Note',
      id: '1',
      title: 'First',
      content: 'FirstContent'
    }
  ]
};
export const typeDefs = [
  `
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    notes: [Note]!
    note(id:String!): Note
  }
  type Mutation {
    createNote(title: String!, content: String!)
    editNote(id: String!, title:String!, content: String!)
  }
  type Note {
    id: String!
    title: String!
    content: String!
  }
`
];
