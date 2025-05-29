// ContainerStats.tsx
import React from 'react';
import styled from 'styled-components';
import type { ContainerStats as ContainerStatsType } from './types';

interface ContainerStatsProps {
  stats: ContainerStatsType;
}

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1vw;
  font-weight: 400;
`;

const StatBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: rgba(11, 23, 57, 1);
  padding: 2vh 1.5vw;
  border-radius: 0.8vw;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 2vh 2vw;
  }
`;

const Label = styled.div`
  color: rgba(174, 185, 225, 1);
  font-size: 1.5rem;
`;

const Value = styled.div`
  color: white;
  font-size: 1.25rem;
  margin-top: 1vh;

  @media (max-width: 768px) {
    font-size: 1.6vh;
  }
`;

export const ContainerStats: React.FC<ContainerStatsProps> = ({ stats }) => {
  const statItems = [
    { label: 'Container ID', value: stats.containerId },
    { label: 'Image', value: stats.image },
    { label: 'Status', value: stats.status },
    { label: 'Start Time', value: stats.startTime },
    { label: 'Uptime', value: stats.uptime },
    { label: 'Network', value: stats.network },
  ];

  return (
    <StatsWrapper>
      <Row>
        {statItems.slice(0, 3).map((item) => (
          <StatBox key={item.label}>
            <Label>{item.label}</Label>
            <Value>{item.value}</Value>
          </StatBox>
        ))}
      </Row>
      <Row>
        {statItems.slice(3).map((item) => (
          <StatBox key={item.label}>
            <Label>{item.label}</Label>
            <Value>{item.value}</Value>
          </StatBox>
        ))}
      </Row>
    </StatsWrapper>
  );
};
