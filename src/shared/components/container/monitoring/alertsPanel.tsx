import React from 'react';
import styled from 'styled-components';
import { StatusIndicator } from './statusIndicator';

const AlertsContainer = styled.div`
  display: flex;
  width: 47vw;
  flex-direction: column;
  gap: 2vh;
  align-items: stretch;
  font-size: 1.5rem;
  font-weight: normal;
  background-color: #0b1739;
  margin: 0 auto;
  padding: 2vh 2.5vw;
  border-radius: 0.8vh;
`;

const AlertsTitle = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;

const AlertItemContainer = styled.div`
  border-radius: 0.5vh;
  display: flex;
  width: 40vw;
  align-items: stretch;
  gap: 2vw;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #081028;
  padding: 1.5vh 1.5vw;
`;

const AlertContent = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0.8vw;
  color: white;
`;

const AlertMessage = styled.div`
  color: white;
  flex-basis: auto;
  font-size: 1.25rem;
`;

const AlertTime = styled.div`
  color: #d1dbf9;
  font-size: 1.25rem;
`;

export interface Alert {
  message: string;
  timeAgo: string;
  severity: 'normal' | 'warning' | 'error';
}

interface AlertProps {
  alerts: Alert[]
}

const AlertItem: React.FC<Alert> = ({ message, timeAgo, severity }) => (
  <AlertItemContainer>
    <AlertContent>
      <StatusIndicator status={severity} />
      <AlertMessage>{message}</AlertMessage>
    </AlertContent>
    <AlertTime>{timeAgo}</AlertTime>
  </AlertItemContainer>
);

export const AlertsPanel: React.FC<AlertProps> = ({
  alerts
}) => {
  return (
    <AlertsContainer>
      <AlertsTitle>Active Alerts</AlertsTitle>
      {alerts.map((alert, index) => (
        <AlertItem key={index} {...alert} />
      ))}
    </AlertsContainer>
  );
};