// serverTab.tsx
import React from 'react';
import styled from 'styled-components';

const navigationItems = [
  'Container Status',
  'Build Status',
  'Monitoring',
  'Log',
];

const NavContainer = styled.nav`
  display: flex;
  border-bottom: 0.3vh solid #0B1739;
  overflow-x: auto;
`;

const NavButton = styled.button<{ $active: boolean }>`
  width: 11vw;
  height: 8.3vh;
  font-size: 1.1vw;
  line-height: 3.1vh;
  cursor: pointer;
  min-width: 11vw;
  border: none;
  background: none;
  color: ${({ $active }) => ($active ? '#FFFFFF' : '#AEB9E1')};
  border-bottom: ${({ $active }) =>
    $active ? '0.3vh solid #CB3CFF' : 'none'};
`;

interface ServerTabProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const ContainerTab: React.FC<ServerTabProps> = ({ activeTab, onTabChange }) => {
  return (
    <NavContainer>
      {navigationItems.map((item) => (
        <NavButton
          key={item}
          onClick={() => onTabChange(item)}
          $active={activeTab === item}
        >
          {item}
        </NavButton>
      ))}
    </NavContainer>
  );
};
