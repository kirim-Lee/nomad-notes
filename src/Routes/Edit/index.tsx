import React from 'react';
import Editor from '../../Components/Editor';
import { Query, Mutation } from 'react-apollo';
import { GET_NOTE, EDIT_NOTE } from '../../queries';

const Notes = ({ match, history }) => {
  const id = match?.params?.id;
  const handleSave = editNote => (
    title: string,
    content: string,
    id: string | null
  ) => {
    if (title && content && id) {
      editNote({ variables: { id, title, content } });
      history.push(`/note/${id}`);
    }
  };

  return (
    <Query query={GET_NOTE} variables={{ id }}>
      {({ data }) =>
        data.note ? (
          <Mutation mutation={EDIT_NOTE}>
            {editNote => (
              <Editor data={data.note} onSave={handleSave(editNote)} />
            )}
          </Mutation>
        ) : null
      }
    </Query>
  );
};

export default Notes;
