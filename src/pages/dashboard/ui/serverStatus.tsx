import React from 'react';
import styled from 'styled-components';
import color from '@/shared/styles/color.ts'

const ServerStatusContainer = styled.div`
    width: 21.875rem;
    height: 8.1875rem;
    flex-shrink: 0;

    border-radius: 0.75rem;
    background: ${color.SecondaryColor1};

    padding: 1.5rem 1.4rem
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

const TitleContainer = styled.div`
    display: flex;
    gap: 1rem
    align-items: center;     /* 수직 중앙 */
`;

const Title = styled.p`
    color: ${color.NeutralColor100};
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3125rem;

    margin: 0 1rem;
`;

const ServerStatusValue = styled.p`
    color: ${color.NeutralColor100};
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3rem;

    margin: 1rem 0;
`;

interface ServerStatusProps {
    title: string;
    value: string;
    color: string;
}

export const ServerStatus : React.FC<ServerStatusProps> = ({ title, value, color }) => {
    return (
        <ServerStatusContainer>
            <TitleContainer>
                <StatusContainer bgColor={color} />
                <Title>{title}</Title>
            </TitleContainer>
            <ServerStatusValue>{value}</ServerStatusValue>
        </ServerStatusContainer>
    );
};