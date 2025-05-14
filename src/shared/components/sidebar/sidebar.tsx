import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import color from '@/shared/styles/color.ts'
//nomarl
import nomarlBell from '@/assets/nomarl-bell-icon.svg';
import nomarlBrowser from '@/assets/nomarl-browser-icon.svg';
import nomarlPlus from '@/assets/nomarl-plus-icon.svg';
import nomarlServer from '@/assets/nomarl-server-icon.svg';
import nomarlSetting from '@/assets/nomarl-settings-icon.svg';
// active
import activeBell from '@/assets/active-bell-icon.svg';
import activeBrowser from '@/assets/active-browser-icon.svg';
import activePlus from '@/assets/active-plus-icon.svg';
import activeServer from '@/assets/active-server-icon.svg';
import activeSetting from '@/assets/active-settings-icon.svg';

const SidebarContainer = styled.aside`
  hegiht: 100vh;
  width: 18.75rem;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
  text-align: center;
  font-size: 0.875rem;
  color: ${color.NeutralColor400};
  font-weight: normal;
  line-height: 1;
  background-color: ${color.NeutralColor800};
  box-shadow: 0.3125rem 0 0.25rem 0 rgba(0, 0, 0, 0.5);
  border-radius: 0 0.9375rem 0.9375rem 0;
  padding: 1.875rem 1.75rem 46.25rem;

  @media (max-width: 18.75rem) {
    margin-top: 1.875rem;
    padding-bottom: 6.25rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

const Logo = styled.div`
  color: ${color.NeutralColor100};
  text-align: center;
  font-family: 'Anta';
  font-weight: 400;
  font-size: 2.25rem;
  font-style: normal;
  line-height: 2.5rem;
`;

const Nav = styled.nav`
  margin-top: 1.875rem;
`;

const MenuItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0.625rem;
  border-radius: 0.4375rem;
  background-color: ${({ active }) => (active ? color.NeutralColor600 : color.NeutralColor800)};
  color: ${({ active }) => (active ? color.NeutralColor100 : color.NeutralColor400)};
  cursor: pointer;
`;

const MenuItemIcon = styled.img`
  width: 1.5rem;
  height: auto;
  flex-shrink: 0;
`;

const MenuItemLabel = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  width: 11.1875rem;
  margin: auto 0;
`;

const menuItems = [
  { nomarlIcon: `${nomarlPlus}`, activeIcon: `${activePlus}`, label: '새로운 서버', path: "/new" },
  { nomarlIcon: `${nomarlBrowser}`, activeIcon: `${activeBrowser}`, label: '어드민 대시보드', path: "/" },
  { nomarlIcon: `${nomarlServer}`, activeIcon: `${activeServer}`, label: '서버 목록', path: "/server" },
  { nomarlIcon: `${nomarlBell}`, activeIcon: `${activeBell}`, label: '알림', path: "/alram" },
  { nomarlIcon: `${nomarlSetting}`, activeIcon: `${activeSetting}`, label: '설정', path: "/setting" },
];

export const Sidebar: React.FC = () => {

  
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <SidebarContainer>
      <Logo>Infraxus</Logo>
      <Nav>
        {menuItems.map((item, index) => {
          return (
            <MenuItem key={index} active={location.pathname === item.path} onClick={() => navigate(item.path)}>
              <MenuItemIcon src={location.pathname === item.path ? item.activeIcon : item.nomarlIcon} alt="" />
              <MenuItemLabel>{item.label}</MenuItemLabel>
            </MenuItem>
        )})}
      </Nav>
    </SidebarContainer>
  );
};
