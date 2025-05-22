import React from 'react';
import styled from 'styled-components';

interface ActionButtonsProps {
  onDetails: () => void;
  onLogs: () => void;
  onRestart: () => void;
}

const ButtonContainer = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1.8vw; // 대략 2.5px 정도에 해당
  text-align: center;
  font-size: 0.9vw; // text-xs에 대응
  color: white;
`;

const BaseButton = styled.button`
  color: white;
  border-radius: 0.6vw;
  padding: 1.2vh 1.5vw;
  transition: background-color 0.3s ease;
  font-size: inherit;
  cursor: pointer;
`;

const DetailsButton = styled(BaseButton)`
  background-color: #0e43fb;
  border: none;

  &:hover {
    background-color: #0b36d9;
  }
`;

const LogsButton = styled(BaseButton)`
  background-color: #0a1330;
  border: 0.1vw solid #0b1739;

  &:hover {
    background-color: #0b1739;
  }
`;

const RestartButton = styled(BaseButton)`
  background-color: #0a1330;
  border: 0.1vw solid #0b1739;

  &:hover {
    background-color: #0b1739;
  }
`;

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onDetails,
  onLogs,
  onRestart,
}) => {
  return (
    <ButtonContainer>
      <DetailsButton onClick={onDetails}>Details</DetailsButton>
      <LogsButton onClick={onLogs}>Logs</LogsButton>
      <RestartButton onClick={onRestart}>Restart</RestartButton>
    </ButtonContainer>
  );
};
