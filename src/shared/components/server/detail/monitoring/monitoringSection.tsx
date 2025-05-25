import React from 'react';
import styled from 'styled-components';
import { ContainerStatusProps, AlertProps } from './types';

const SectionWrapper = styled.div`
  display: flex;
  gap: 1.5vw;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 42.85vw;
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
  background-color: #0B1739;
  padding: 3vh 2vw;
  border-radius: 1vw;
`;

const Title = styled.h3`
  color: white;
  font-size: 1.75rem;
  font-weight: 600;
`;

const StatusItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #081028;
  padding: 2vh 2.5vw;
  border-radius: 0.8vw;
  flex-wrap: wrap;
  color: white;
`;

const AlertItem = styled(StatusItem)`
  color: white;
`;

const AlertInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
`;

const SeverityDot = styled.div<{ severity: 'error' | 'warning' }>`
  width: 1vw;
  height: 1vw;
  border-radius: 50%;
  background-color: ${(props) =>
    props.severity === 'error' ? '#CB3CFF' : '#FDB52A'};
`;

const TimeAgoText = styled.div`
  color: #D1DBF9;
`;

const ContainerStatus: React.FC<{ containers: ContainerStatusProps[] }> = ({ containers }) => (
  <Card>
    <Title>Container Status</Title>
    {containers.map(({ name, status }) => (
      <StatusItem key={name}>
        <div>{name}</div>
        <div style={{ color: status === 'Healthy' ? '#008000' : '#CB3CFF' }}>{status}</div>
      </StatusItem>
    ))}
  </Card>
);

const ActiveAlerts: React.FC<{ alerts: AlertProps[] }> = ({ alerts }) => (
  <Card style={{ paddingBottom: '9vh' }}>
    <Title>Active Alerts</Title>
    {alerts.map(({ message, timeAgo, severity }) => (
      <AlertItem key={message}>
        <AlertInfo>
          <SeverityDot severity={severity} />
          <div>{message}</div>
        </AlertInfo>
        <TimeAgoText>{timeAgo}</TimeAgoText>
      </AlertItem>
    ))}
  </Card>
);

export const MonitoringSection: React.FC = () => {
  const containers = [
    { name: 'api-server-1', status: 'Healthy' as const },
    { name: 'web-server-1', status: 'Warning' as const },
    { name: 'db-server-1', status: 'Healthy' as const },
  ];

  const alerts = [
    { message: 'CPU Usage > 80%', timeAgo: '2m ago', severity: 'error' as const },
    { message: 'Memory Usage > 70%', timeAgo: '5m ago', severity: 'warning' as const },
  ];

  return (
    <SectionWrapper>
      <ContainerStatus containers={containers} />
      <ActiveAlerts alerts={alerts} />
    </SectionWrapper>
  );
};
