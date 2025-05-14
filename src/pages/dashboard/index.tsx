import React from 'react';
import { styled } from 'styled-components';
import { ServerStatus } from './ui/serverStatus';
import color from '@/shared/styles/color.ts'
import { Sidebar } from '@/shared/components/sidebar/sidebar';
import { UsageStatus } from './ui/usageStatus';
import { ErrorServerStatus } from './ui/errorServerStatus';
import { RecentBuiltServerStatus } from './ui/recentBuiltServerStatus';
import { RunningServerStatus } from './ui/runningServerStatus';

const PageContainer = styled.div`
    display: flex;
    background: ${color.NeutralColor800};
`;

const MainContainer = styled.div`
    padding: 1.87rem 1.88rem;
    width: 71.25rem;
    height: 100vh;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 0.94rem
`;

const ServerStatusContainer = styled.div`
    display: flex;
    gap: 0.94rem;
`;

const UsageStatusContainer = styled.div`
    display: flex;
    gap: 0.94rem
`;

export const Dashboard : React.FC = () => {

    const errorServers = [
        {serverName: "stage-server-05", error: "Memory allocation failed", time: "1 min"},
        {serverName: "stage-server-05", error: "Memory allocation failed", time: "12 min"},
        {serverName: "stage-server-05", error: "Memory allocation failed", time: "1 hour"},
        {serverName: "stage-server-05", error: "Memory allocation failed", time: "12 hour"},
        {serverName: "stage-server-05", error: "Memory allocation failed", time: "1 day"},
        {serverName: "stage-server-05", error: "Memory allocation failed", time: "12 day"},
    ];

    const recentBuiltServers = [
        {serverName: "stage-server-05", port: "10.0.0.124", time: "1 min", isSuccess: true},
        {serverName: "stage-server-05", port: "10.0.0.124", time: "12 min", isSuccess: false},
        {serverName: "stage-server-05", port: "10.0.0.124", time: "1 hour", isSuccess: true},
    ];

    const runningServers = [
        {serverName: "stage-server-05", port: "10.0.0.124", time: "1 min"},
        {serverName: "stage-server-05", port: "10.0.0.124", time: "12 min"},
        {serverName: "stage-server-05", port: "10.0.0.124", time: "1 hour"},
    ];

    return (
        <PageContainer>
            <Sidebar />
            <MainContainer>
                <ServerStatusContainer>
                    <ServerStatus title="총 서버" value="156" color={color.SecondaryColor4} />
                    <ServerStatus title="실행 중인 서버" value="142" color={color.Green} />
                    <ServerStatus title="에러가 발생한 서버" value="14" color={color.Red} />
                </ServerStatusContainer>
                <UsageStatusContainer>
                    <UsageStatus title="CPU 사용량" percent={82} color={color.PrimaryColor} />
                    <UsageStatus title="Memory 사용량" percent={78} color={color.SecondaryColor4} />
                    <UsageStatus title="Disk I/O" percent={45} color={color.SecondaryColor3} />
                    <UsageStatus title="GPU 사용량" percent={67} color={color.SecondaryColor2} />
                    <UsageStatus title="Network" percent={20} color={color.Green} />
                </UsageStatusContainer>
                <ErrorServerStatus servers={errorServers} />
                <RecentBuiltServerStatus servers={recentBuiltServers} />
                <RunningServerStatus servers={runningServers} />
            </MainContainer>
        </PageContainer>
    );
}