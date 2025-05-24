import React from 'react';
import { Container } from './containerTable';
import { StatusIndicator } from './containerStatusIndicator';
import { ActionButtons } from './actionButtons';

interface ContainerTableRowProps {
  container: Container;
  onDetails: () => void;
  onLogs: () => void;
  onRestart: () => void;
}

export const ContainerTableRow: React.FC<ContainerTableRowProps> = ({
  container,
  onDetails,
  onLogs,
  onRestart,
}) => (
  <tr>
    <td>{container.name}</td>
    <td>{container.ipPort}</td>
    <td><StatusIndicator status={container.status} /></td>
    <td>{container.cpu}</td>
    <td>{container.memory}</td>
    <td>
      <ActionButtons
        onDetails={onDetails}
        onLogs={onLogs}
        onRestart={onRestart}
      />
    </td>
  </tr>
);
