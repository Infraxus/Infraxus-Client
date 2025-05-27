import React, { useState } from 'react';
import { styled } from 'styled-components';
import color from '@/shared/styles/color.ts';
import { ContainerHeader } from '@/shared/components/container/containerHeader';
import { StatusIndicator } from '@/shared/components/container/statusIndicator';
import { ContainerTab } from '@/shared/components/container/containerTab';
import ContainerStatus from '@/shared/components/container/container-status/containerStatus';
import ContainerBuildStatus from '@/shared/components/container/build-status/containerBuildStatus';
import ContainerMonitoring from '@/shared/components/container/monitoring/containerMonitoring';
import { ContainerLog } from '@/shared/components/container/log/containerLog';

const MainContainer = styled.div`
  max-width: 100vw;
  min-height: 92vh;
  color: white;
  background-color: #081028;
  margin: 0 auto;
  padding: 4vh 2vw;
`;

export const ContainerDetail: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Container Status');
    const [containerStatus, setContainerStatus] = useState<'running' | 'stopped'>('running');
  
    const handleRestart = () => {
      console.log('Restarting Container...');
      setContainerStatus('running');
    };

    const handleStart = () => {
      setContainerStatus('running');
    }
  
    const handleStop = () => {
      console.log('Stopping Container...');
      setContainerStatus('stopped');
    };

    const handleDelete = () => {
      console.log('Stopping Container...');
      setContainerStatus('stopped');
      //delete 로직
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Container Status':
              return <ContainerStatus />;
            case 'Build Status':
              return <ContainerBuildStatus />;
            case 'Monitoring':
              return <ContainerMonitoring />;
              case 'Log':
                return <ContainerLog />;
        default:
            return null;
        }
    };

    return (
        <MainContainer>
          <ContainerHeader
            containerName="Container name #???"
            onRestart={handleRestart}
            onStart={handleStart}
            onStop={handleStop}
            onDelete={handleDelete}
            statusIndicator={<StatusIndicator status={containerStatus} />}
            containerStatus={containerStatus}
          />
          <ContainerTab activeTab={activeTab} onTabChange={setActiveTab} />
          {renderTabContent()}
        </MainContainer>
    );
};
