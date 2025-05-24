import React from 'react';
import styled from 'styled-components';
import { ContainerTableHeader } from './containerTableHeader';
import { ContainerTableRow } from './containerRow';

export interface Container {
  name: string;
  ipPort: string;
  status: 'healthy' | 'degraded' | 'unhealthy';
  cpu: number;
  memory: number;
}

interface ContainerTableProps {
  containers: Container[];
  onDetails: (containerId: number) => void;
  onLogs: (containerId: number) => void;
  onRestart: (name: string) => void;
}

const TableWrapper = styled.div`
  width: 96vw;
  background-color: #0A1330;
  border-radius: 1vw;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: white;
  font-size: 1vw;

  th, td {
    min-width: 10vw;
    padding: 1vh 1vw;
    text-align: center;
    border-bottom: 1px solid #1A2450;
    white-space: nowrap;
  }

  th {
    color: #AEB9E1;
    font-weight: bold;
    background-color: #0F1B3F;
  }
`;

export const ContainerTable: React.FC<ContainerTableProps> = ({
  containers,
  onDetails,
  onLogs,
  onRestart,
}) => {
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <ContainerTableHeader />
        </thead>
        <tbody>
          {containers.map((container, index) => (
            <ContainerTableRow
              key={container.name}
              container={container}
              onDetails={() => onDetails(index)}
              onLogs={() => onLogs(index)}
              onRestart={() => onRestart(container.name)}
            />
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};
