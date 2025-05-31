import React from 'react';
import styled from 'styled-components';
import { StatusIndicator } from './statusIndicator';

export interface ServiceHealthData {
  label: string;
  value: string;
  serviceStatus: 'normal' | 'warning' | 'error';
}

interface ServiceHealthProps {
  data: ServiceHealthData[];
}

const HealthContainer = styled.div`
  background-color: rgba(11, 23, 57, 1);
  display: flex;
  width: 47vw;
  flex-direction: column;
  gap: 2vh;
  align-items: stretch;
  font-weight: normal;
  margin: 0 auto;
  padding: 2vh 2vw;
  border-radius: 0.8vh;
`;

const HealthTitle = styled.h2`
  color: white;
  font-size: 1.5rem;
  margin: 0;
`;

const HealthItem = styled.div`
  border-radius: 0.5vh;
  background-color: rgba(8, 16, 40, 1);
  display: flex;
  align-items: stretch;
  gap: 2vw;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1.3vh 1.5vw 2vh;
`;

const HealthInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const HealthLabel = styled.div`
  color: rgba(174, 185, 225, 1);
  font-size: 1.1rem;
`;

const HealthValue = styled.div`
  color: white;
  font-size: 1.25rem;
`;

// 수정된 컴포넌트
export const ServiceHealth: React.FC<ServiceHealthProps> = ({ data }) => {
  return (
    <HealthContainer>
      <HealthTitle>Service Health</HealthTitle>
      {data.map((serviceHealth, index) => (
        <HealthItem key={index}>
          <HealthInfo>
            <HealthLabel>{serviceHealth.label}</HealthLabel>
            <HealthValue>{serviceHealth.value}</HealthValue>
          </HealthInfo>
          <StatusIndicator status={serviceHealth.serviceStatus} />
        </HealthItem>
      ))}
    </HealthContainer>
  );
};
