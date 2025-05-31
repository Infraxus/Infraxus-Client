import React from 'react';
import styled from 'styled-components';

const StatusContainer = styled.div`
  display: flex;
  width: 12.5vw;
  align-items: stretch;
  gap: 8vw;
  font-weight: normal;
  flex-wrap: wrap;
`;

const StatusInfo = styled.div`
  border-radius: 0.5vh;
  display: flex;
  align-items: stretch;
  gap: 1vw;
  font-size: 1rem;
  flex: 1;
  background-color: #0b1739;
  padding: 1vh;
`;

const StatusLabel = styled.div`
  color: #d1dbf9;
`;

const StatusValue = styled.div`
  color: white;
`;

export const StatusBar: React.FC = () => {
  return (
    <StatusContainer>
      <StatusInfo>
        <StatusLabel>Last updated:</StatusLabel>
        <StatusValue>Just now</StatusValue>
      </StatusInfo>
    </StatusContainer>
  );
};
