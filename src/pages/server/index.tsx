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

// 기존 serverData를 state로 관리하도록 변경
export const Server: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [servers, setServers] = useState(serverData); // 상태로 관리
  
    const handleToggleStatus = (id: number) => {
      setServers(prev =>
        prev.map(server =>
          server.id === id
            ? {
                ...server,
                status: server.status === 'running' ? 'stopped' : 'running',
              }
            : server
        )
      );
    };
  
    const handleDelete = (id: number) => {
      setServers(prev => prev.filter(server => server.id !== id));
    };
  
    const filteredServers = servers.filter(server =>
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
                onToggleStatus={() => handleToggleStatus(server.id)}
                onDelete={() => handleDelete(server.id)}
              />
            ))}
          </ServerList>
        </MainContainer>
      </PageContainer>
    );
  };
  
