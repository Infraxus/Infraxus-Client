import React from 'react';
import { styled } from 'styled-components';
import { SearchBar } from '../../shared/components/server/searchBar';
import { FormSelect } from '../../shared/components/new-server/select';
import AlertStats from './components/AlertStats';
import AlertList from './components/AlertList';
import WeeklyTrendChart from './components/WeeklyTrendChart';
import color from '@/shared/styles/color.ts';
import { Sidebar } from '@/shared/components/sidebar/sidebar';

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
    gap: 2vh;
`;

const AlertsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const AlertsStatsContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

const AlertsFilters = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`;

const AlertsListContainer = styled.div`
  margin-bottom: 20px;
`;

const PageTitle = styled.p`
    color: ${color.NeutralColor100};
    font-family: "Inter";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.25rem;
`;

const AlertsPage: React.FC = () => {
  return (
    <PageContainer>
      <Sidebar />
      <MainContainer>
        <PageTitle>새로운 서버</PageTitle>
        <AlertsHeader>
          <AlertsStatsContainer>
            <AlertStats />
          </AlertsStatsContainer>
        </AlertsHeader>
        <AlertsFilters>
            <SearchBar onSearch={() => {}} />
            <FormSelect label="" value="" onValueChange={() => {}}>
              <></>
            </FormSelect>
             <FormSelect label="" value="" onValueChange={() => {}}>
                <></>
             </FormSelect>
             <FormSelect label="" value="" onValueChange={() => {}}>
                <></>
             </FormSelect>
        </AlertsFilters>
        <AlertsListContainer>
          <AlertList />
        </AlertsListContainer>
        <WeeklyTrendChart />
      </MainContainer>
    </PageContainer>
  );
};

export default AlertsPage; 