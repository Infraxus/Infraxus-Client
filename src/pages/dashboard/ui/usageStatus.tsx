import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import color from '@/shared/styles/color.ts';

interface UsageStatusProps {
    title: string;
    percent: number;
    color: string;
}
 
const UsageStatusContainer = styled.div`
    width: 14.3vw;
    height: 10.75vh;
    flex-shrink: 0;
    padding: 1.5vh 1vw;
    border-radius: 0.5rem;
    background: ${color.NeutralColor600};
    display: flex;
    flex-direction: column;
    gap: 0.1rem
`;

const Title = styled.p`
    color: ${color.NeutralColor300};
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
`;

const PercentValue = styled.p`
    color: ${color.NeutralColor100};
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.25rem; /* 150% */
`;

const ProgressBarContainer = styled.div`
    width: 12.5vw;
    height: 0.5vh;
    flex-shrink: 0;
    background-color: ${color.NeutralColor800};
    border-radius: 1rem;
    overflow: hidden;
    margin: 0.5rem 0;
`;

const Progress = styled.div<{ percent: number, color: string }>`
    width: ${({ percent }) => percent}%;
    height: 100%;
    background-color: ${({ color }) => color};
    transition: width 0.4s ease;
    border-radius: 1rem;
`;

export const UsageStatus: React.FC<UsageStatusProps> = ({ title, percent, color }) => {
    return (
        <UsageStatusContainer>
            <Title>{title}</Title>
            <PercentValue>{percent}%</PercentValue>
            <ProgressBarContainer>
                <Progress percent={percent} color={color} />
            </ProgressBarContainer>
        </UsageStatusContainer>
    );
};