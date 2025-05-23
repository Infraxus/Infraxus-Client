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

  @media (max-width: 768px) {
    padding-left: 2vw;
    padding-right: 2vw;
  }
`;

const UsageStatusContainer = styled.div`
  display: flex;
  gap: 1.5vw;
  flex-wrap: wrap;
`;

const SectionWrapper = styled.div`
  margin-top: 2.5vh;
  width: 100%;
`;

const SectionFlex = styled.div`
  display: flex;
  gap: 2vw;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2vh;
  }
`;

const LogWrapper = styled.div`
  width: 71vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ServiceWrapper = styled.div`
  width: 27vw;

  @media (max-width: 768px) {
    width: 100%;
  }
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
                <SectionFlex>
                <LogWrapper>
                    <LogSection />
                </LogWrapper>
                <ServiceWrapper>
                    <ServiceCommunication />
                </ServiceWrapper>
                </SectionFlex>
            </SectionWrapper>
        </Container>
    );
};

export default ServerMonitoring;
