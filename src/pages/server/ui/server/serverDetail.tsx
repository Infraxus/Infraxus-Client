import React, { useState } from 'react';
import { styled } from 'styled-components';
import color from '@/shared/styles/color.ts';
import { ServeOverview } from '@/shared/components/server/detail/overview/serverOverview';
import { ServerHeader } from '@/shared/components/server/detail/serverHeader';
import { ServerTab } from '@/shared/components/server/detail/serverTab';
import { StatusIndicator } from '@/shared/components/server/statusIndicator';
import { ServerContainerList } from '@/shared/components/server/detail/container-list/containerList';
import ServerMonitoring from '@/shared/components/server/detail/monitoring/serverMonitoring';
import { ServerDeploymentSetting } from '@/shared/components/server/detail/setting/serverSetting';

const MainContainer = styled.div`
  max-width: 100vw;
  min-height: 92vh;
  color: white;
  background-color: #081028;
  margin: 0 auto;
  padding: 4vh 2vw;

  @media (max-width: 991px) {
    max-width: 99vw;
  }

  @media (max-width: 640px) {
    max-width: 100vw;
    padding: 2vh 2vw;
  }
`;

export const ServerDetail: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Status');
    const [serverStatus, setServerStatus] = useState<'running' | 'stopped'>('running');
  
    const handleRestart = () => {
      console.log('Restarting server...');
      setServerStatus('running');
    };

    const handleStart = () => {
      setServerStatus('running');
    }
  
    const handleStop = () => {
      console.log('Stopping server...');
      setServerStatus('stopped');
    };
    
    const renderTabContent = () => {
        switch (activeTab) {
        case 'Status':
          return <ServeOverview />;
        case 'Container list':
          return <ServerContainerList />;
        case 'Monitoring':
          return <ServerMonitoring />;
          case 'Deployment Setting':
            return <ServerDeploymentSetting />;
        default:
            return null;
        }
    };

    return (
        <MainContainer>
          <ServerHeader
            serverName="server name / architecture"
            onRestart={handleRestart}
            onStart={handleStart}
            onStop={handleStop}
            statusIndicator={<StatusIndicator status={serverStatus} />}
            serverStatus={serverStatus}
          />
          <ServerTab activeTab={activeTab} onTabChange={setActiveTab} />
          {renderTabContent()}
        </MainContainer>
    );
};
