import React from 'react';
import styled from 'styled-components';
import { StatusIndicator } from './containerStatusIndicator';
import { ActionButtons } from './actionButtons';

interface ContainerRowProps {
  name: string;
  ipPort: string;
  status: 'healthy' | 'degraded' | 'unhealthy';
  cpu: number;
  memory: number;
  onDetails: () => void;
  onLogs: () => void;
  onRestart: () => void;
}

// styled-components 정의
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 2.8vh; /* 약 21px */
`;

const Text = styled.div`
  color: white;
`;

const MetricsContainer = styled.div`
  display: flex;
  gap: 2vw;
  color: white;
  justify-content: center; /* 가로 가운데 */
  align-items: center;     /* 세로 가운데 */
`;

export const ContainerRow: React.FC<ContainerRowProps> = ({
  name,
  ipPort,
  status,
  cpu,
  memory,
  onDetails,
  onLogs,
  onRestart,
}) => {
  return (
    <FlexContainer>
      <Text>{name}</Text>
      <Text>{ipPort}</Text>
      <MetricsContainer>
        <StatusIndicator status={status} />
        <span>{cpu}</span>
        <span>{memory}</span>
      </MetricsContainer>
      <Text>{status}</Text>
      <ActionButtons
        onDetails={onDetails}
        onLogs={onLogs}
        onRestart={onRestart}
      />
    </FlexContainer>
  );
};
