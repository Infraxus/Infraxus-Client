import React from 'react';
import styled from 'styled-components';

interface LogDetailsProps {
  timestamp: string;
  onClose: () => void;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2vw;
  width: 100%;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  justify-content: center;
`;

const Title = styled.h2`
  color: white;
  font-size: 2.2vh;
  font-weight: 600;
`;

const Time = styled.time`
  color: rgba(174, 185, 225, 1);
  font-size: 1.7vh;
  font-weight: 400;
`;

const ControlColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  align-items: flex-end;
  font-weight: 400;
  white-space: nowrap;
`;

const CloseButton = styled.button`
  color: rgba(174, 185, 225, 1);
  font-size: 2.5vh;
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: white;
  }
`;

const Tag = styled.div`
  background-color: rgba(10, 19, 48, 1);
  color: white;
  font-size: 1.6vh;
  padding: 0.7vh 1vw;
  border-radius: 0.5vw;
`;

export const LogDetails: React.FC<LogDetailsProps> = ({ timestamp, onClose }) => {
  return (
    <Wrapper>
      <InfoColumn>
        <Title>Log Details</Title>
        <Time>{timestamp}</Time>
      </InfoColumn>
      <ControlColumn>
        <CloseButton onClick={onClose} aria-label="Close log details">
          ×
        </CloseButton>
        <Tag>web</Tag>
      </ControlColumn>
    </Wrapper>
  );
};
