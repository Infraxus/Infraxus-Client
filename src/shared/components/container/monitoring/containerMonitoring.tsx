
import React from 'react';
import styled from 'styled-components';
import { StatusBar } from './statusBar';
import { UsageStatus } from './usageStatus';
import { ServiceHealth, ServiceHealthData } from './serviceHealth';
import { Alert, AlertsPanel } from './alertsPanel';
import color from '@/shared/styles/color';

const MonitoringSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  overflow: hidden;
  background-color: #081028;
  padding: 3vh 0;
`;

const UsageStatusContainer = styled.div`
  display: flex;
  gap: 1.5vw;
  flex-wrap: wrap;
`;

const BottomSection = styled.div`
  display: flex;
  gap: 0 2vw;
`;

const ContainerMonitoring: React.FC = () => {

  const usageStatusDatas = [
    {title: "CPU 사용량", percent: 82, color: color.PrimaryColor},
    {title: "Memory 사용량", percent: 78, color: color.SecondaryColor4},
    {title: "Disk I/O", percent: 45, color: color.SecondaryColor3},
    {title: "GPU 사용량", percent: 67, color: color.SecondaryColor2},
    {title: "Network", percent: 20, color: color.Green},
  ];

  const serviceHealthList: ServiceHealthData[] = [
    { label: "HTTP Status", value: "200", serviceStatus: "normal" },
    { label: "Response Time", value: "124ms", serviceStatus: "normal" }
  ];  

  const alerts: Alert[] = [
    {
      message: 'CPU Usage > 80%',
      timeAgo: '2m ago',
      severity: 'warning'
    },
    {
      message: 'Memory Usage > 70%',
      timeAgo: '5m ago',
      severity: 'warning'
    }
  ];

  return (
    <MonitoringSection>
      <StatusBar />
      <UsageStatusContainer>
        {usageStatusDatas.map((item, index) => {
            return (
                <UsageStatus key={index} title={item.title} percent={item.percent} color={item.color} />
            );
        })}
      </UsageStatusContainer>
      <BottomSection>
        <ServiceHealth data={serviceHealthList} />
        <AlertsPanel alerts={alerts} />
      </BottomSection>
    </MonitoringSection>
  );
};

export default ContainerMonitoring;