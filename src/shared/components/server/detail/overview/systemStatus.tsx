import React from 'react';
import styled from 'styled-components';

// 카드 컴포넌트 스타일
const Card = styled.div`
  background-color: #081028;
  border-radius: 0.75vw;
  padding: 2.2vh 1.45vw;

  @media (max-width: 640px) {
    padding: 2vh;
  }
`;

const Title = styled.div`
  color: #AEB9E1;
  font-size: 0.9vw;
  line-height: 2.1vh;
  margin-bottom: 1.2vh;

  @media (max-width: 640px) {
    font-size: 1.1vw;
  }
`;

const Value = styled.div`
  color: white;
  font-size: 1vw;
  line-height: 2.4vh;

  @media (max-width: 640px) {
    font-size: 1.2vw;
  }
`;

// 시스템 상태 전체 박스 스타일
const Section = styled.section`
  background-color: #0B1739;
  padding: 3vh 2.2vw;
  border-radius: 0.8vw;

  @media (max-width: 640px) {
    padding: 2vh;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.1vw;
  line-height: 2.4vh;
  color: white;
  margin-bottom: 2.5vh;

  @media (max-width: 640px) {
    font-size: 1.3vw;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

interface StatusCardProps {
  title: string;
  value: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ title, value }) => (
  <Card>
    <Title>{title}</Title>
    <Value>{value}</Value>
  </Card>
);

export const SystemStatus: React.FC = () => {
  return (
    <Section>
      <SectionTitle>System Status</SectionTitle>
      <Grid>
        <StatusCard title="CPU Usage" value="45%" />
        <StatusCard title="Memory Usage" value="3.2GB / 8GB" />
        <StatusCard title="Disk Usage" value="156GB / 500GB" />
        <StatusCard title="Network I/O" value="125MB/s" />
      </Grid>
    </Section>
  );
};
