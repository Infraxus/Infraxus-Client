import React from 'react';
import styled from 'styled-components';
import { ServerInfo } from './serverInfo';
import { SystemStatus } from './systemStatus';

const Container = styled.div`
  max-width: 100vw;
  min-height: 50vh;
  color: white;
  background-color: #081028;
  margin: 0 auto;
  padding: 3vh 0;
  display: flex;
  flex-direction: column;
  gap: 3vh 0;
`;

// 서버 정보 카드 데이터
const serverInfoData = [
  { title: 'Creation Date', value: 'January 15, 2024' },
  { title: 'Technology Stack', value: 'Node.js, PostgreSQL, Redis' },
  { title: 'Server Status', value: 'Running' },
];

export const ServeOverview: React.FC = () => {
  return (
    <Container>
      <ServerInfo cards={serverInfoData} />
      <SystemStatus />
    </Container>
  );
};
