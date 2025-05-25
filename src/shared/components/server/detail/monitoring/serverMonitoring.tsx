import React from 'react';
import { UsageStatus } from './usageStatus';
import { MonitoringSection } from './monitoringSection';
import { LogSection } from './logSection';
import { ServiceCommunication } from './serviceCommunication';
import color from '@/shared/styles/color';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  background-color: #081028;
  padding: 3vh 0;
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;

const UsageStatusContainer = styled.div`
  display: flex;
  gap: 1.5vw;
  flex-wrap: wrap;
`;

const SectionWrapper = styled.div`
  display: flex;
  gap: 2vw;
`;

export const ServerMonitoring: React.FC = () => {

    const usageStatusDatas = [
        {title: "CPU 사용량", percent: 82, color: color.PrimaryColor},
        {title: "Memory 사용량", percent: 78, color: color.SecondaryColor4},
        {title: "Disk I/O", percent: 45, color: color.SecondaryColor3},
        {title: "GPU 사용량", percent: 67, color: color.SecondaryColor2},
        {title: "Network", percent: 20, color: color.Green},
    ];

    return (
        <Container>
            <UsageStatusContainer>
                {usageStatusDatas.map((item, index) => {
                    return (
                        <UsageStatus key={index} title={item.title} percent={item.percent} color={item.color} />
                    );
                })}
            </UsageStatusContainer>
            <MonitoringSection />
            <SectionWrapper>
              <LogSection />
              <ServiceCommunication />
            </SectionWrapper>
        </Container>
    );
};

export default ServerMonitoring;
