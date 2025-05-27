import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchBar } from './containerSearchBar';
import { ContainerTable } from './containerTable';
import { useNavigate } from 'react-router-dom';

const MOCK_CONTAINERS = [
  {
    name: 'api-gateway',
    ipPort: '172.16.0.2:8080',
    status: 'healthy' as const,
    cpu: 35,
    memory: 0.2,
  },
  {
    name: 'auth-service',
    ipPort: '172.16.0.3:8081',
    status: 'degraded' as const,
    cpu: 78,
    memory: 0.5,
  },
  {
    name: 'database',
    ipPort: '172.16.0.4:5432',
    status: 'unhealthy' as const,
    cpu: 92,
    memory: 1,
  },
];

const NAVIGATION_ITEMS = [
  { id: 'status', label: 'Status' },
  { id: 'containers', label: 'Container list', active: true },
  { id: 'monitoring', label: 'Monitoring' },
  { id: 'deployment', label: 'Deployment Setting' },
];

const PageWrapper = styled.div`
  overflow: hidden;
  font-weight: 400;
  background-color: #081028;
  padding: 3vh 0;
  display: flex;
  flex-direction: column;
  gap: 2.5vh;
`;

export const ServerContainerList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const navigate = useNavigate();

  const handleContainerDetails = (containerId: number) => {
    navigate(`${containerId}`);
  };

  const handleContainerLogs = (containerId: number) => {
    navigate(`${containerId}?tab=log`);
  };

  const handleContainerRestart = (name: string) => {
    console.log(`Restarting container ${name}`);
  };

  const filteredContainers = MOCK_CONTAINERS.filter(container =>
    container.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageWrapper>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />
      <ContainerTable
        containers={filteredContainers}
        onDetails={handleContainerDetails}
        onLogs={handleContainerLogs}
        onRestart={handleContainerRestart}
      />
    </PageWrapper>
  );
};
