import React from 'react';
import styled from 'styled-components';

interface LogContentProps {
  title: string;
  content: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const Title = styled.h3`
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Subtitle = styled.div`
  color: rgba(174, 185, 225, 1);
  font-size: 1.25rem;
  font-weight: 400;
`;

const ContentBox = styled.div`
  background-color: rgba(10, 19, 48, 1);
  border-radius: 0.8vw;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  padding: 2vh 1vw;
  width: 95%;
  word-break: break-word;
`;

export const LogContent: React.FC<LogContentProps> = ({ title, content }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>Log Content</Subtitle>
      <ContentBox>{content}</ContentBox>
    </Container>
  );
};
