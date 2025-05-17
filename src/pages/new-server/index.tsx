import React from 'react';
import { styled } from 'styled-components';
import color from '@/shared/styles/color.ts'
import { Sidebar } from '@/shared/components/sidebar/sidebar';
import { NewServerForm } from './ui/newServer';

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
    gap: 0.94rem
`;

const PageTitle = styled.p`
    color: ${color.NeutralColor100};
    font-family: "Inter";
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.25rem;
`;

export const NewServer: React.FC = () => {

    const architectures = [
        {architectureName: "모놀리식 아키텍처", architectureDescription: "애플리케이션의 모든 기능이 하나의 단일 코드베이스로 통합되어, 전체 시스템이 하나의 단위로 개발되고 배포되는 구조입니다. 모놀리식 아키텍처와 동일하게 배포가 가능한 아키텍처 : 계층형, 헥사고날, 클린, 마이크로커널, 파이프&필터"},
        {architectureName: "마이크로서비스 아키텍처", architectureDescription: "애플리케이션을 독립적으로 배포 가능한 작은 서비스들로 분리하여, 각 서비스가 독립적으로 개발, 배포, 확장 가능한 구조입니다."},
        {architectureName: "커스텀 아키텍처", architectureDescription: "아키텍처를 마음대로 구축할 수 있습니다. 모든 기능을 제공합니다."},
    ];

    return (
        <PageContainer>
            <Sidebar />
            <MainContainer>
                <PageTitle>새로운 서버</PageTitle>
                <NewServerForm architectures={architectures} />
            </MainContainer>
        </PageContainer>
    );
}