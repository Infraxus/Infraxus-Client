import React from 'react';
import { styled } from 'styled-components';
import color from '@/shared/styles/color.ts';

const WeeklyTrendContainer = styled.div`
  background-color: ${color.NeutralColor700}; /* 이미지 배경색 참고 */
  padding: 15px;
  border-radius: 5px;
`;

const WeeklyTrendTitle = styled.h2`
  margin-top: 0;
  color: ${color.NeutralColor100}; /* 흰색 */
`;

const WeeklyTrendChartContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 150px; /* 그래프 높이 */
  padding-top: 10px;
`;

const WeeklyTrendBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px; /* 각 막대의 너비 */
`;

const WeeklyTrendBar = styled.div<{ height: string }>`
  width: 100%;
  background-color: ${color.SecondaryColor2}; /* 보라색 계열 막대 색상 */
  margin-bottom: 5px;
  height: ${props => props.height};
`;

const WeeklyTrendDay = styled.div`
  font-size: 0.8em;
  color: ${color.NeutralColor300}; /* 연한 회색 */
`;

const WeeklyTrendChart: React.FC = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dummyData = [60, 80, 100, 40, 90, 70, 50]; // 임시 데이터

  const maxData = Math.max(...dummyData);

  return (
    <WeeklyTrendContainer>
      <WeeklyTrendTitle>Weekly Trend</WeeklyTrendTitle>
      <WeeklyTrendChartContainer>
        {days.map((day, index) => (
          <WeeklyTrendBarContainer key={day}>
            <WeeklyTrendBar height={`${(dummyData[index] / maxData) * 100}%`} />
            <WeeklyTrendDay>{day}</WeeklyTrendDay>
          </WeeklyTrendBarContainer>
        ))}
      </WeeklyTrendChartContainer>
    </WeeklyTrendContainer>
  );
};

export default WeeklyTrendChart; 