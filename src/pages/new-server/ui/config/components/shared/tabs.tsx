import React from 'react';
import styled from 'styled-components';
import color from '@/shared/styles/color.ts';

const TabsContainer = styled.nav`
  border-bottom: 1px solid ${color.NeutralColor700};
`;

const TabsList = styled.div`
  display: flex;
  flex-direction: row;
`;

interface TabButtonProps {
  active?: boolean;
}

const TabButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})<TabButtonProps>`
  color: ${props => (props.active ? color.NeutralColor100 : color.NeutralColor400)};
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3125rem; /* 150% */
  height: 6vh;
  width: 12.5vw;
  padding: 1.5vh 1.5vw;
  background-color: transparent;
  border: none;
  border-bottom: ${props => (props.active ? '1px solid white' : 'none')};
  cursor: pointer;
`;

interface Tab {
  id: string;
  label: string;
  isActive?: boolean;
}

interface DeploymentTabsProps {
  tabs: Tab[];
  onTabChange: (tabId: string) => void;
}

export const DeploymentTabs: React.FC<DeploymentTabsProps> = ({ tabs, onTabChange }) => {
  return (
    <TabsContainer>
      <TabsList role="tablist">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            role="tab"
            aria-selected={tab.isActive}
            aria-controls={`${tab.id}-panel`}
            active={tab.isActive}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabsList>
    </TabsContainer>
  );
};
