import React from 'react';
import styled from 'styled-components';
import { ServiceCommunicationProps } from './types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  font-weight: 400;
  background-color: #0B1739;
  margin: 0 auto;
  padding: 6vh 4vw 31vh 4vw;
  border-radius: 1vw;

  @media (max-width: 768px) {
    margin-top: 2.5vh;
    padding-bottom: 13vh;
    padding-left: 3vw;
    padding-right: 3vw;
  }
`;

const Title = styled.h3`
  color: white;
  font-size: 1.5vw;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;

const StatusCard = styled.div`
  background-color: #081028;
  border-radius: 1vw;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2vw;
  margin-top: 2vh;
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
  font-size: 1.2vw;

  @media (max-width: 768px) {
    font-size: 3.8vw;
  }
`;

const AvgResponse = styled.div`
  color: #D1DBF9;
  margin-top: 1vh;
  font-size: 1vw;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const StatusCode = styled.div<{ success: boolean }>`
  color: ${({ success }) => (success ? '#008000' : '#CB3CFF')};
  font-size: 1.1vw;
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
