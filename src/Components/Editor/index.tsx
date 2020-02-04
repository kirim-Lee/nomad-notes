import React, { useState } from 'react';
import styled from 'styled-components';
import MarkdownRenderer from 'react-markdown-renderer';
import TextareaAutosize from 'react-textarea-autosize';

const TitleInput = styled(TextareaAutosize)`
  font-size: 50px;
  font-weight: 600;
  width: 100%;
  &::placeholder {
    font-weight: 600;
  }
`;

const ContentPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
`;

const ContentInput = styled(TextareaAutosize)`
  font-size: 18px;
  margin-top: 15px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Button = styled.button``;

interface IEditor {
  data?: {
    title: string;
    content: string;
    id: string;
  };
  onSave: (title: string, content: string, id: string | null) => void;
}

const Editor = ({ data, onSave }: IEditor) => {
  const [title, setTitle] = useState(data?.title ?? '');
  const [content, setContent] = useState(data?.content ?? '');

  const handleTitle = e => setTitle(e.target.value);
  const handleContent = e => setContent(e.target.value);
  const handleSave = () => onSave(title, content, data?.id ?? null);

  return (
    <>
      <TitleContainer>
        <TitleInput
          value={title}
          onChange={handleTitle}
          placeholder="untitled"
          name="title"
        />
        <Button onClick={handleSave}>Save</Button>
      </TitleContainer>
      <ContentPreview>
        <ContentInput
          value={content}
          onChange={handleContent}
          placeholder="# This supports markdown!"
          name="content"
        />
        <MarkdownRenderer markdown={content} className="markdown" />
      </ContentPreview>
    </>
  );
};

export default Editor;
