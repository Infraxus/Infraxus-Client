import React from 'react';
import styled from 'styled-components';

interface BuildHistoryProps {
  startTime: string;
  endTime: string;
  duration: string;
}

// 전체 컨테이너
const Wrapper = styled.div`
  background-color: rgba(11, 23, 57, 1);
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
  width: 91.25vw;
  font-weight: 400;
  padding: 2.5vh 2vw;
  border-radius: 1vw;
`;

// 제목
const Title = styled.div`
  color: white;
  font-size: 1.5rem;
`;

// 섹션 컨테이너
const InfoBox = styled.div`
  background-color: rgba(8, 16, 40, 1);
  display: flex;
  flex-wrap: wrap;
  gap: 27.5vw;
  padding: 2vh 2vw;
  border-radius: 0.8vw;
`;

// 각 항목 블록
const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vh;
`;

// 항목 라벨
const Label = styled.div`
  color: rgba(174, 185, 225, 1);
  font-size: 1.4rem;
`;

// 항목 값
const Value = styled.div`
  color: white;
  font-size: 1.2rem;
`;

export const BuildHistory: React.FC<BuildHistoryProps> = ({
  startTime,
  endTime,
  duration,
}) => {
  return (
    <Wrapper>
      <Title>Build History</Title>
      <InfoBox>
        <InfoItem>
          <Label>Start Time</Label>
          <Value>{startTime}</Value>
        </InfoItem>
        <InfoItem>
          <Label>End Time</Label>
          <Value>{endTime}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Duration</Label>
          <Value>{duration}</Value>
        </InfoItem>
      </InfoBox>
    </Wrapper>
  );
};
