import React from 'react';
import styled from 'styled-components';
import { StatusIndicator } from './statusIndicator';
import { MetricCard } from './metricCard.tsx';
import { useNavigate } from 'react-router-dom';

interface ServerCardProps {
  id: number
  name: string;
  status: 'running' | 'stopped' | 'error';
  metrics: {
    cpu: string;
    memory: string;
    created: string;
    redistribution: string;
  };
}

const CardContainer = styled.div`
  background: #0B1739;
  padding: 2.5vh 1.5vw;
  border-radius: 0.75vw;
  display: flex;
  flex-direction: column;
  gap: 2.5vh;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
`;

const ServerName = styled.p`
  flex: 1;
  color: white;
  font-size: 1.25rem;
  justify-content: center;
  align-items: center;
  height: 3.5vh;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.57vw;
  justify-content: flex-end;
  flex: 1;
`;

const ActionButton = styled.button<{ $variant?: 'primary' | 'danger' | 'outline' }>`
  border-radius: 0.5vw;
  font-size: 1rem;
  cursor: pointer;
  padding: 1.2vh 1.75vw;
  border: ${({ $variant }) =>
    $variant === 'outline' ? '0.15vw solid #DC2626' : 'none'};
  background: ${({ $variant }) =>
    $variant === 'primary' ? '#0E43FB' :
    $variant === 'danger' ? '#DC2626' :
    'transparent'};
  color: ${({ $variant }) =>
    $variant === 'outline' ? '#DC2626' : '#FFFFFF'};
`;

const MetricsSection = styled.div`
  display: flex;
  gap: 1.1vw;
  flex-wrap: wrap;
  @media (max-width: 1440px) {
    gap: 0.5vw;
  }
`;

interface ServerCardProps {
    id: number;
    name: string;
    status: 'running' | 'stopped' | 'error';
    metrics: {
      cpu: string;
      memory: string;
      created: string;
      redistribution: string;
    };
    onToggleStatus: () => void;
    onDelete: () => void;
  }
  
  export const ServerCard: React.FC<ServerCardProps> = ({
    id,
    name,
    status,
    metrics,
    onToggleStatus,
    onDelete,
  }) => {
    const isRunning = status === 'running';
    const navigate = useNavigate();
  
    const onHandleDetail = () => {
      navigate(`/server/detail/${id}`);
    };
  
    return (
        <CardContainer>
            <TopSection>
                <StatusIndicator status={status} />
                <ServerName onClick={onHandleDetail}>{name}</ServerName>
                <ButtonGroup>
                    <ActionButton $variant={isRunning ? 'danger' : 'primary'} onClick={onToggleStatus}>
                    {isRunning ? 'Stop' : 'Start'}
                    </ActionButton>
                    <ActionButton $variant="outline" onClick={onDelete}>
                    Delete
                    </ActionButton>
                </ButtonGroup>
            </TopSection>
            <MetricsSection>
                <MetricCard label="CPU Usage" value={metrics.cpu} />
                <MetricCard label="Memory Usage" value={metrics.memory} />
                <MetricCard label="Created" value={metrics.created} />
                <MetricCard label="Redistribution" value={metrics.redistribution} />
            </MetricsSection>
        </CardContainer>
    );
};
  