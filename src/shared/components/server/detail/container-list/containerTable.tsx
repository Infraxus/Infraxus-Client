import React from 'react';
import styled from 'styled-components';
import { ContainerRow } from './containerRow';

interface Container {
  name: string;
  ipPort: string;
  status: 'healthy' | 'degraded' | 'unhealthy';
  cpu: number;
  memory: number;
}

interface ContainerTableProps {
  containers: Container[];
  onDetails: (name: string) => void;
  onLogs: (name: string) => void;
  onRestart: (name: string) => void;
}

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 96vw;
  background-color: #0A1330;
  padding: 3vh 3vw;
  border-radius: 1vw;

  @media (max-width: 1440px) {
    width: 90vw;
  }
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: #AEB9E1;
  font-size: 1vw;
  font-weight: bold;
`;

const HeaderGroup = styled.div`
  display: flex;
  gap: 3vw;
`;

export const ContainerTable: React.FC<ContainerTableProps> = ({
  containers,
  onDetails,
  onLogs,
  onRestart,
}) => {
  return (
    <TableWrapper>
      <TableHeader>
        <div>Name</div>
        <div>IP/Port</div>
        <HeaderGroup>
          <div>Status</div>
          <div>CPU (%)</div>
          <div>Memory (GB)</div>
        </HeaderGroup>
        <div>Health</div>
        <div>Actions</div>
      </TableHeader>
      {containers.map((container) => (
        <ContainerRow
          key={container.name}
          {...container}
          onDetails={() => onDetails(container.name)}
          onLogs={() => onLogs(container.name)}
          onRestart={() => onRestart(container.name)}
        />
      ))}
    </TableWrapper>
  );
};
