import React from 'react';
import styled from 'styled-components';
import color from '@/shared/styles/color.ts'

const SidebarContainer = styled.aside`
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
  margin: auto;

  @media (max-width: 48rem) {
    margin-top: 1.875rem;
    padding-bottom: 6.25rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

const Logo = styled.div`
  color: ${color.NeutralColor100};
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 1.875rem;
`;

const Nav = styled.nav`
  margin-top: 1.875rem;
`;

const MenuItem = styled.div<{ active: boolean }>`
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
  { icon: 'https://cdn.builder.io/api/v1/image/assets/c8df5d00d5254ba7af7ef0a63b65be18/dc5fcbdc00e6040d720d041e95fd491365aedb4c?placeholderIfAbsent=true', label: '새로운 서버', active: false },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/c8df5d00d5254ba7af7ef0a63b65be18/de4999bbe3dbabeff83583e893ef61404c512807?placeholderIfAbsent=true', label: '어드민 대시보드', active: true },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/c8df5d00d5254ba7af7ef0a63b65be18/f7bf89d5a245b6073f2740ab09bf6de2d2b389e5?placeholderIfAbsent=true', label: '서버 목록', active: false },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/c8df5d00d5254ba7af7ef0a63b65be18/3e4c0c74a73bdc3c69740661c5d84ad110ddd988?placeholderIfAbsent=true', label: '알림', active: false },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/c8df5d00d5254ba7af7ef0a63b65be18/5f741bae96c5657047d21542e16ec7ef580b42f4?placeholderIfAbsent=true', label: '설정', active: false },
];

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Logo>Infraxus</Logo>
      <Nav>
        {menuItems.map((item, index) => (
          <MenuItem key={index} active={item.active}>
            <MenuItemIcon src={item.icon} alt="" />
            <MenuItemLabel>{item.label}</MenuItemLabel>
          </MenuItem>
        ))}
      </Nav>
    </SidebarContainer>
  );
};
