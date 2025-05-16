import React from 'react';
import { styled } from 'styled-components';
import color from '@/shared/styles/color.ts'

const RecentBuiltServerContainer = styled.div`
    padding: 1.81rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 78.34vw;
    height: 12vh;
    flex-shrink: 0;
    border-radius: 0.9375rem;
    background: ${color.NeutralColor600};   
`;

const Title = styled.p`
    color: ${color.NeutralColor100};
    font-family: "Inter";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5vw;
`;

const RecentBuiltServerStatusContainer = styled.div`
    padding: 0.72rem 0.74rem;
    display: flex;
    gap: 1vw;
    width: 24vw;
    height: 6.25vh;
    flex-shrink: 0;
    border-radius: 0.25rem;
    background: ${color.NeutralColor800};
`;

const StatusContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'bgColor'
})<{ bgColor: string }>`
    margin: auto 0;
    width: 0.45338rem;
    height: 0.5rem;
    flex-shrink: 0;
    border-radius: 2097150rem;
    background-color: ${({ bgColor }) => bgColor};
`;

const CenterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: auto 0;
`;

const ServerName = styled.p`
    color: ${color.NeutralColor100};
    font-family: "Inter";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3125rem; /* 150% */
    flex-direction: column;
    justify-content: center;
`;

const Port = styled.p`
    color: ${color.NeutralColor300};
    font-family: "Inter";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem; /* 150% */
    flex-direction: column;
    justify-content: center;
`;

const Time = styled.p`
    margin: auto 0;
    color: ${color.NeutralColor300};
    text-align: right;
    width: 13vw;
    font-family: "Inter";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem; /* 150% */
    flex-direction: column;
    justify-content: center;
`;

interface Server {
    serverName: string;
    port: string;
    time: string;
    isSuccess: boolean;
}

interface RecentBuiltServersProps {
    servers: Server[];
}

export const RecentBuiltServerStatus: React.FC<RecentBuiltServersProps> = ({ servers }) => {

    return (
        <RecentBuiltServerContainer>
            <Title>최근에 빌드한 서버들</Title>
            <GridContainer>
                {servers.map((item, index) => {
                    return (
                        <li key={index}>
                            <RecentBuiltServerStatusContainer>
                                <StatusContainer bgColor={item.isSuccess ? color.Green : color.Red} />
                                <CenterContainer>
                                    <ServerName>{item.serverName}</ServerName>
                                    <Port>{item.port}</Port>
                                </CenterContainer>
                                <Time>{item.time}</Time>
                            </RecentBuiltServerStatusContainer>
                        </li>
                    )
                })}
            </GridContainer>
        </RecentBuiltServerContainer>
    );
}