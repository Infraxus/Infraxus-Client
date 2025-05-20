import React, { useState } from 'react';
import { styled } from 'styled-components';
import color from '@/shared/styles/color.ts';
import { Sidebar } from '@/shared/components/sidebar/sidebar';
import { SearchBar } from '@/shared/components/server/searchBar';
import { ServerCard } from '@/shared/components/server/serverCard';

const PageContainer = styled.div`
  display: flex;
  background: ${color.NeutralColor800};
`;

const MainContainer = styled.div`
  padding: 2.5vh 2.25vw;
  width: 80vw;
  height: 100vh;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 2.5vh;
`;

const PageTitle = styled.p`
  color: ${color.NeutralColor100};
  font-family: "Inter";
  font-size: 2.5vh;
  font-style: normal;
  font-weight: 600;
  line-height: 3.25vh;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5vh;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2vh;
  }
`;

const ServerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5vh;
`;

const serverData = [
  {
    id: 1,
    name: 'server name / architecture',
    status: 'running' as const,
    metrics: {
      cpu: '0.2%',
      memory: '128MB',
      created: '2 hours ago',
      redistribution: '2 hours ago',
    },
  },
  {
    id: 2,
    name: 'server name / architecture',
    status: 'running' as const,
    metrics: {
      cpu: '0.5%',
      memory: '256MB',
      created: '1 day ago',
      redistribution: '1 day ago',
    },
  },
  {
    id: 3,
    name: 'server name / architecture',
    status: 'stopped' as const,
    metrics: {
      cpu: '0%',
      memory: '0MB',
      created: '3 days ago',
      redistribution: '3 days ago',
    },
  },
];

export const Server: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServers = serverData.filter(server =>
    server.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageContainer>
      <Sidebar />
      <MainContainer>
        <HeaderContainer>
          <PageTitle>서버 리스트</PageTitle>
          <SearchBar onSearch={setSearchQuery} />
        </HeaderContainer>
        <ServerList>
          {filteredServers.map(server => (
            <ServerCard
              key={server.id}
              id={server.id}
              name={server.name}
              status={server.status}
              metrics={server.metrics}
            />
          ))}
        </ServerList>
      </MainContainer>
    </PageContainer>
  );
};
