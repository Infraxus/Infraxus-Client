import React from 'react';
import styled from 'styled-components';

interface HeaderItem {
  key: string;
  value: string;
}

interface RequestHeadersProps {
  headers: HeaderItem[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const Label = styled.div`
  color: rgba(174, 185, 225, 1);
  font-size: 1.25rem;
  font-weight: 400;
`;

const HeaderBox = styled.div`
  border-radius: 0.5vw;
  background-color: rgba(10, 19, 48, 1);
  display: flex;
  flex-wrap: wrap;
  gap: 3vh 5vw;
  font-size: 1rem;
  font-weight: 400;
  white-space: nowrap;
  padding: 1.2vh 0.6vw;
  width: 100%;
`;

const KeyColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vh;
  flex: 1;
  color: rgba(174, 185, 225, 1);

  & > div {


    &:first-child {
  
    }
  }
`;

const ValueColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vh;
  flex: 1;
  color: white;

  & > div {

    padding-left: 1vw;

    &:first-child {
  
    }
  }
`;

export const RequestHeaders: React.FC<RequestHeadersProps> = ({ headers }) => {
  return (
    <Container>
      <Label>Request Headers</Label>
      <HeaderBox>
        <KeyColumn>
          {headers.map((header) => (
            <div key={header.key}>{header.key}</div>
          ))}
        </KeyColumn>
        <ValueColumn>
          {headers.map((header) => (
            <div key={`${header.key}-value`}>{header.value}</div>
          ))}
        </ValueColumn>
      </HeaderBox>
    </Container>
  );
} 