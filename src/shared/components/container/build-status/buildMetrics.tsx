import React from 'react';
import styled from 'styled-components';

interface BuildMetricsProps {
  status: 'success' | 'warning' | 'error';
  buildTime: string;
  progress: number;
}

const Wrapper = styled.div`
  width: 100%;
`;

const CardRow = styled.div`
  display: flex;
  gap: 1vw;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: rgba(11, 23, 57, 1);
  border-radius: 0.8vw;
  padding: 3vh 2vw;
  flex: 1 1 30vw;
  min-width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
`;

const Label = styled.div`
  color: rgba(174, 185, 225, 1);
  font-size: 1.5rem;
  font-weight: 400;
`;

const ValueRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6vw;
  color: white;
  font-size: 1.25rem;
  white-space: nowrap;
`;

const Value = styled.div`
  color: white;
  font-size: 1.25rem;
`;

const ProgressBarContainer = styled.div`
  background-color: rgba(10, 19, 48, 1);
  border-radius: 0.3vw;
  height: 1.5vh;
  width: 100%;
`;

const ProgressBar = styled.div<{ progress: number }>`
  background-color: rgba(67, 24, 209, 1);
  height: 100%;
  width: ${({ progress }) => progress}%;
  border-radius: 0.3vw;
`;

const Percentage = styled.div`
  color: white;
  font-size: 1.25rem;
`;

export const BuildMetrics: React.FC<BuildMetricsProps> = ({
  status,
  buildTime,
  progress,
}) => {
  return (
    <Wrapper>
      <CardRow>
        <Card>
          <Label>Build Status</Label>
          <ValueRow>
            <div>{status.charAt(0).toUpperCase() + status.slice(1)}</div>
          </ValueRow>
        </Card>

        <Card>
          <Label>Build Time</Label>
          <Value>{buildTime}</Value>
        </Card>

        <Card>
          <Label>Build Progress</Label>
          <ProgressBarContainer>
            <ProgressBar progress={progress} />
          </ProgressBarContainer>
          <Percentage>{progress}%</Percentage>
        </Card>
      </CardRow>
    </Wrapper>
  );
};
