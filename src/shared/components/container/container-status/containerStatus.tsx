import styled from 'styled-components';
import { ContainerStats } from './containerStats';
import { ContainerMetadata } from './containerMetadata';
import { ContainerPorts } from './containerPorts';
import { ContainerVolumes } from './containerVolumes';
import { ContainerEnvironment } from './containerEnvironment';
import { ContainerEvents } from './containerEvents';
import type {
  ContainerStats as ContainerStatsType,
  ContainerMetadata as ContainerMetadataType,
  PortMapping,
  VolumeMapping,
  EnvironmentVariable,
  ContainerEvent,
} from './types';
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  overflow: hidden;
  background-color: #081028;
  padding: 3vh 0;
`;

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1vw;
`;

export default function ContainerStatus() {
  // mock data
  const containerStats: ContainerStatsType = {
    containerId: 'c4d3ae1',
    image: 'nginx:latest',
    status: 'Running',
    startTime: '2024-01-20 10:30 AM',
    uptime: '5d 12h 30m',
    network: 'bridge',
  };

  const metadata: ContainerMetadataType = {
    tags: ['production', 'web-tier'],
    description: 'Production web server instance',
  };

  const ports: PortMapping[] = [
    { host: '80', container: '8080' },
    { host: '443', container: '8443' },
  ];

  const [volumes, setVolumes] = useState<VolumeMapping[]>([
    { source: '/data', target: '/app/data' },
  ]);

  const [envVariables, setEnvVariables] = useState<EnvironmentVariable[]>([
    { key: 'NODE_ENV', value: 'production' },
    { key: 'API_KEY', value: '********' },
  ]);

  const events: ContainerEvent[] = [
    { timestamp: '2024-01-20 14:30:00', description: 'Container started' },
    { timestamp: '2024-01-20 14:29:00', description: 'Memory usage exceeded 80%' },
    { timestamp: '2024-01-20 14:28:00', description: 'Connected to bridge network' },
  ];

  const handleRestart = () => {
    console.log('Restarting container...');
  };

  const handleStop = () => {
    console.log('Stopping container...');
  };

  const handleDelete = () => {
    console.log('Deleting container...');
  };

  const handleAddVolume = (volume: VolumeMapping) => {
    setVolumes((prev) => [...prev, volume]);
  };

  const handleDetachVolume = (volume: VolumeMapping) => {
    setVolumes((prev) => prev.filter((v) => !(v.source === volume.source && v.target === volume.target)));
  };

  const handleAddVariable = (newVariable: EnvironmentVariable) => {
    setEnvVariables((prev) => [...prev, newVariable]);
  };

  const handleRemoveVariable = (target: EnvironmentVariable) => {
    setEnvVariables((prev) =>
      prev.filter((v) => !(v.key === target.key && v.value === target.value))
    );
  };

  return (
    <Wrapper>
      <ContainerStats stats={containerStats} />
      <ContainerMetadata metadata={metadata} />

      <SectionWrapper>
        <ContainerPorts ports={ports} />
        <ContainerVolumes
            volumes={volumes}
            onAddVolume={handleAddVolume}
            onDetachVolume={handleDetachVolume}
        />
      </SectionWrapper>

      <ContainerEnvironment
        variables={envVariables}
        onAddVariable={handleAddVariable}
        onRemoveVariable={handleRemoveVariable}
      />

      <ContainerEvents
        events={events}
      />
    </Wrapper>
  );
}
