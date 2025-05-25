import React from 'react';
import styled from 'styled-components';
import { ServiceCommunicationProps } from './types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  align-items: stretch;
  font-weight: 400;
  background-color: #0B1739;
  padding: 3vh 2vw;
  border-radius: 1vw;
  width: 35vw;
`;

const Title = styled.h3`
  color: white;
  font-size: 1.75rem;
  font-weight: 600;
`;

const StatusCard = styled.div`
  background-color: #081028;
  border-radius: 1vw;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2vw;
  padding: 2vh 2vw;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5vh;
  }
`;

const StatusInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const FromToText = styled.div`
  font-size: 1.2rem;
`;

const AvgResponse = styled.div`
  color: #D1DBF9;
  font-size: 1rem;
`;

const StatusCode = styled.div<{ success: boolean }>`
  color: ${({ success }) => (success ? '#008000' : '#CB3CFF')};
  font-size: 1rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 3.5vw;
  }
`;

const ServiceStatus: React.FC<ServiceCommunicationProps> = ({
  from,
  to,
  avgResponse,
  status,
}) => (
  <StatusCard>
    <StatusInfo>
      <FromToText>{`${from} → ${to}`}</FromToText>
      <AvgResponse>{`Avg Response: ${avgResponse}`}</AvgResponse>
    </StatusInfo>
    <StatusCode success={status.type === 'success'}>{status.code}</StatusCode>
  </StatusCard>
);

export const ServiceCommunication: React.FC = () => {
  const services: ServiceCommunicationProps[] = [
    {
      from: 'web',
      to: 'api',
      avgResponse: '120ms',
      status: { code: '200 OK', type: 'success' },
    },
    {
      from: 'api',
      to: 'db',
      avgResponse: '2.5s',
      status: { code: '500 Error', type: 'error' },
    },
  ];

  return (
    <Wrapper>
      <Title>Service Communication</Title>
      {services.map((service) => (
        <ServiceStatus key={`${service.from}-${service.to}`} {...service} />
      ))}
    </Wrapper>
  );
};
