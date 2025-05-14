import React from 'react';
import { styled } from 'styled-components';
import color from '@/shared/styles/color.ts'

const ErrorServerContainer = styled.div`
    padding: 1.81rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.94rem;
    width: 67.5rem;
    height: 19.125rem;
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
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

const ErrorServerStatusContainer = styled.div`
    padding: 0.72rem 0.74rem;
    display: flex;
    gap: 0.81rem;
    width: 32.1875rem;
    height: 3.7535rem;
    flex-shrink: 0;
    border-radius: 0.25rem;
    background: ${color.NeutralColor800};
`;

const StatusContainer = styled.div`
    margin: auto 0;
    width: 0.45338rem;
    height: 0.5rem;
    flex-shrink: 0;
    border-radius: 2097150rem;
    background-color: ${color.Red};
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

const ErrorMessage = styled.p`
    color: ${color.Red};
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
    width: 19rem;
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
    error: string;
    time: string;
}

interface ErrorServersProps {
    servers: Server[];
}

export const ErrorServerStatus: React.FC<ErrorServersProps> = ({ servers }) => {

    return (
        <ErrorServerContainer>
            <Title>에러가 발생한 서버들</Title>
            <GridContainer>
                {servers.map((item, index) => {
                    return (
                        <li key={index}>
                            <ErrorServerStatusContainer>
                                <StatusContainer />
                                <div>
                                    <ServerName>{item.serverName}</ServerName>
                                    <ErrorMessage>{item.error}</ErrorMessage>
                                </div>
                                <Time>{item.time}</Time>
                            </ErrorServerStatusContainer>
                        </li>
                    )
                })}
            </GridContainer>
        </ErrorServerContainer>
    );
}