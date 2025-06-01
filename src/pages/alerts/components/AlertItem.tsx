import React from 'react';
import { styled } from 'styled-components';
import color from '@/shared/styles/color.ts';

interface AlertItemProps {
  type: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  time: string;
  isFirst?: boolean; // 첫 번째 항목인지 여부
  isLast?: boolean; // 마지막 항목인지 여부
}

const AlertItemContainer = styled.div<{ isFirst?: boolean; isLast?: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${color.NeutralColor700}; /* 이미지 배경색 참고 */
  padding: 15px;
  /* margin-bottom: 10px; */ /* 간격 제거 */
  /* border-radius: 5px; */ /* 기본 라운딩 제거 */
  border: 2px solid #343B4F; /* 테두리 색상 조정 */
  border-bottom: none; /* 기본 하단 테두리 제거 */

  ${props => props.isFirst && `
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  `}

  ${props => props.isLast && `
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom: 2px solid #343B4F; /* 마지막 항목 하단 테두리 */
  `}

  &:not(:last-child) {
    margin-bottom: 0; /* 항목 사이 간격 제거 확인 */
  }

`;

const AlertItemIndicator = styled.div<{ type: 'critical' | 'warning' | 'info' }>`
  width: 8px;
  height: 8px; /* Adjust height as needed */
  margin-right: 15px;
  margin-bottom: 73px;
  border-radius: 4px;
  background-color: ${props => props.type === 'critical' ? color.SecondaryColor2 : props.type === 'warning' ? color.SecondaryColor3 : color.Green}; /* 보라, 주황, 초록 */
`;

const AlertItemContent = styled.div`
  flex-grow: 1;
`;

const AlertItemTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  color: ${color.NeutralColor100}; /* 제목 색상 */
`;

const AlertItemDescription = styled.div`
  font-size: 0.9em;
  color: ${color.NeutralColor300}; /* 연한 회색 */
  white-space: pre-wrap; /* 줄바꿈 적용 */
`;

const AlertItemDetailsLink = styled.a`
  color: ${color.SecondaryColor2}; /* 보라색 계열 링크 색상 */
  text-decoration: none;
  margin-top: 5px;
  display: inline-block;
  font-size: 0.9em;
`;

const AlertItemTime = styled.div`
  font-size: 0.8em;
  color: ${color.NeutralColor300}; /* 연한 회색 */
`;

const AlertItem: React.FC<AlertItemProps> = ({ type, title, description, time, isFirst, isLast }) => {
  return (
    <AlertItemContainer isFirst={isFirst} isLast={isLast}>
      <AlertItemIndicator type={type} />
      <AlertItemContent>
        <AlertItemTitle>{title}</AlertItemTitle>
        <AlertItemDescription>{description}</AlertItemDescription>
        <AlertItemDetailsLink href="#">View Details</AlertItemDetailsLink>
      </AlertItemContent>
      <AlertItemTime>{time}</AlertItemTime>
    </AlertItemContainer>
  );
};

export default AlertItem; 