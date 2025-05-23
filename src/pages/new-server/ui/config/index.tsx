import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import color from '@/shared/styles/color.ts';
import { DeploymentTabs } from '@/shared/components/new-server/tabs';
import { DeploymentForm } from '@/shared/components/new-server/zero-downtime/form';
import { VersionReplacementForm } from '@/shared/components/new-server/version-replacement/form';
import { ProgressiveTrafficForm } from '@/shared/components/new-server/progressive-traffic/form';
import { DeploymentStabilityForm } from '@/shared/components/new-server/deployment-stability/form';
import { TimeControlForm } from '@/shared/components/new-server/time-control/form';
import { CustomizationForm } from '../../../../shared/components/new-server/customization/form';
import { ResourceAllocationForm } from '@/shared/components/new-server/resource-allocation/form';
import { useParams, useSearchParams } from 'react-router-dom';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: ${color.NeutralColor800};
  color: white;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  padding: 2.5vh 2.5vw;
`;

const Title = styled.h1`
  color: ${color.NeutralColor100};
  font-family: "Inter";
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.25rem;
`;

const DeploymentSection = styled.section`
  background-color: ${color.NeutralColor600};
  width: 100%;
  border-radius: 10px;
`;

const deploymentTabs = [
  { id: 'zero-downtime', label: '무중단 배포' },
  { id: 'version-replacement', label: '버전 교체' },
  { id: 'progressive-traffic', label: '점진적 트래픽 배포' },
  { id: 'deployment-stability', label: '배포 안정성' },
  { id: 'time-control', label: '시간 제한' },
  { id: 'customization', label: '커스터마이징' },
  { id: 'resource-allocation', label: '리소스 할당' },
];

const TabContent = ({ activeTab, nextTab, name, architecture }: { activeTab: string, nextTab: () => void, name: string, architecture: string }) => {
  switch (activeTab) {
    case 'zero-downtime':
      return <DeploymentForm nextTab={nextTab} />;
    case 'version-replacement':
      return <VersionReplacementForm nextTab={nextTab} />;
    case 'progressive-traffic':
      return <ProgressiveTrafficForm nextTab={nextTab} />;
    case 'deployment-stability':
      return <DeploymentStabilityForm nextTab={nextTab} />;
    case 'time-control':
      return <TimeControlForm nextTab={nextTab} />;
    case 'customization':
      return <CustomizationForm nextTab={nextTab} />;
    case 'resource-allocation':
      return <ResourceAllocationForm name={name} architecture={architecture} />;
    default:
      return null;
  }
};

export const NewServerConfig: React.FC = () => {
  const [activeTab, setActiveTab] = useState('zero-downtime');
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const architecture = (searchParams.get("architecture") as "monolithic" | "microservices") || "microservices";

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const nextTab = () => {
    const currentIndex = deploymentTabs.findIndex(tab => tab.id === activeTab);
    const nextIndex = (currentIndex + 1) % deploymentTabs.length;
    setActiveTab(deploymentTabs[nextIndex].id);
  };

  return (
    <MainContainer>
      <ContentContainer>
        <Title>서버 생성</Title>
        <DeploymentSection>
          <DeploymentTabs
            tabs={deploymentTabs.map(tab => ({
              ...tab,
              isActive: tab.id === activeTab,
            }))}
            onTabChange={handleTabChange}
          />
          <TabContent activeTab={activeTab} nextTab={nextTab} name={name} architecture={architecture} />
        </DeploymentSection>
      </ContentContainer>
    </MainContainer>
  );
};
