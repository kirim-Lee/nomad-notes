export const resolvers = {
  Query: {
    note: (_, variables, { cache }) => {
      const id = cache.config.dataIdFromObject({
        __typename: 'Note',
        id: variables.id
      });
      console.log(id);

      return null;
    }
  }
};
export const defaults = {
  notes: [
    {
      __typename: 'Note',
      id: 1,
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
  note(id:Int!): Note
}
type Mutation {
  createNote(title: String!, content: String!)
  editNote(id: String!, title:String!, content: String!)
}
type Note {
  id: Int!
  title: String!
  content: String!
}
`
];
