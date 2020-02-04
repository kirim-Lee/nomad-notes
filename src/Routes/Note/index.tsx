import React from 'react';
import { Query } from 'react-apollo';
import { GET_NOTE } from '../../queries';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MarkDownRenderer from 'react-markdown-renderer';

const TitleComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  padding: 0;
`;

const Button = styled.button``;

const Note = ({ match }) => {
  const id = match?.params?.id;
  return (
    <Query query={GET_NOTE} variables={{ id }}>
      {({ data }) => (data?.note ? <View note={data.note} /> : null)}
    </Query>
  );
};

const View = ({ note }) => {
  return (
    <>
      <TitleComponent>
        <Title>{note.title}</Title>
        <Link to={`/note/${note.id}/edit`}>
          <Button>Edit</Button>
        </Link>
      </TitleComponent>
      <MarkDownRenderer markdown={note.content} />
    </>
  );
};

export default Note;
