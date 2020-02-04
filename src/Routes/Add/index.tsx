import React from 'react';
import { Mutation } from 'react-apollo';
import { ADD_NOTE } from '../../queries';
import Editor from '../../Components/Editor';

const Notes = ({ history }) => {
  const handleSave = createNote => (title: string, content: string) => {
    if (title && content) {
      createNote({ variables: { title, content } });
      history.push('/');
    }
  };
  return (
    <Mutation mutation={ADD_NOTE}>
      {createNote => {
        return <Editor onSave={handleSave(createNote)} />;
      }}
    </Mutation>
  );
};

export default Notes;
