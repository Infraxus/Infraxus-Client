import React from 'react';
import styled from 'styled-components';
import { StatusIndicator } from '../statusIndicator';

const HeaderWrapper = styled.div`
  position: relative;
  margin-bottom: 9.3vh; /* 70px → 9.3vh (기준: 대략 750px height) */
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
`;

const BackButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;

const Dot = styled.div`
  width: 0.7vw;   /* 10px → 0.7vw */
  height: 0.7vw;
  background-color: #4318D1;
  margin: 0 1.8vw; /* 13px → 1.8vw */
  border-radius: 50%;
`;

const ServerTitle = styled.h1`
  font-size: 2.1vw; /* 28px → 2.1vw */
  line-height: 2vh;
  color: white;
`;

const ActionButtons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  gap: 2.5vw;
`;

const RestartButton = styled.button`
  border-radius: 0.6vw;
  font-size: 1vw;
  line-height: 1.5vh;
  cursor: pointer;
  color: #AEB9E1;
  background-color: #0B1739;
  padding: 1.8vh 2.5vw;
  transition: background-color 0.3s ease;
  border: none;

  &:hover {
    background-color: #0D1B42;
  }
`;

const ActionButton = styled.button`
  border-radius: 0.6vw;
  font-size: 1vw;
  line-height: 1.5vh;
  cursor: pointer;
  color: white;
  background-color: #CB3CFF;
  padding: 1.8vh 2.5vw;
  transition: background-color 0.3s ease;
  border: none;

  &:hover {
    background-color: #B935E6;
  }
`;

interface ServerHeaderProps {
    serverName: string;
    onRestart: () => void;
    onStop: () => void;
    onStart: () => void;
    statusIndicator: React.ReactNode;
    serverStatus: 'running' | 'stopped' | 'error';
  }

export const ServerHeader: React.FC<ServerHeaderProps> = ({
    serverName,
    onRestart,
    onStop,
    onStart,
    statusIndicator,
    serverStatus,
}) => {
    const isRunning = serverStatus === 'running';

  return (
    <HeaderWrapper>
      <HeaderRow>
        <BackButton aria-label="Go back" onClick={() => window.history.back()}>
            <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M15.5938 19.2954L9.40414 13.1057L15.5938 6.91614"
                stroke="#8951FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
        </BackButton>
        {statusIndicator}
        <ServerTitle>{serverName}</ServerTitle>
      </HeaderRow>

      <ActionButtons>
        <RestartButton onClick={onRestart}>Restart</RestartButton>
        <ActionButton onClick={isRunning ? onStop : onStart}>
          {isRunning ? 'Stop Server' : 'Start Server'}
        </ActionButton>
      </ActionButtons>
    </HeaderWrapper>
  );
};
