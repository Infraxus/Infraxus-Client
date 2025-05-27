import React, { useState } from 'react';
import { styled } from 'styled-components';
import color from '@/shared/styles/color.ts';
import { ChevronDown, ChevronUp, Plus } from 'lucide-react';

interface SettingsSectionProps {
  title: string;
  children: React.ReactNode; // SettingsItem 목록
}

const SectionContainer = styled.div`
  background-color: ${color.NeutralColor700}; /* 이미지 배경색 참고 */
  border-radius: 5px; /* 이미지 라운딩 */
  padding: 0; /* 상하 패딩 제거, 하위 요소에서 관리 */
  margin-bottom: 20px; /* 섹션 간 간격 */
  overflow: hidden; /* 라운딩 내부 컨텐츠 처리 */
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px; /* 패딩 조정 */
  border-bottom: 1px solid ${color.NeutralColor600}; /* 헤더 하단 구분선 */
  cursor: pointer; /* 클릭 가능 표시 */

  /* 마지막 섹션의 헤더에는 하단 구분선 없음 */
  ${SectionContainer}:last-child & {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h2`
  margin: 0;
  color: ${color.NeutralColor100};
  font-size: 1.1em; /* 이미지 폰트 크기 참고 */
  display: flex; /* 아이콘과 제목 정렬 */
  align-items: center;
  gap: 10px; /* 아이콘과 제목 사이 간격 */
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px; /* 아이콘 크기 */
  height: 20px; /* 아이콘 크기 */
  color: ${color.SecondaryColor2}; /* 보라색 */

  svg {
    width: 100%;
    height: 100%;
  }
`;

const SectionContent = styled.div<{ isExpanded: boolean }>`
  display: ${props => props.isExpanded ? 'block' : 'none'};
`;

const SettingsSection: React.FC<SettingsSectionProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(true); // 기본적으로 확장된 상태

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SectionContainer>
      <SectionHeader onClick={handleToggle}>
         <SectionTitle>
            <IconWrapper>
               {isExpanded ? <ChevronDown /> : <Plus />}
            </IconWrapper>
            {title}
         </SectionTitle>
      </SectionHeader>
      <SectionContent isExpanded={isExpanded}>
         {children}
      </SectionContent>
    </SectionContainer>
  );
};

export default SettingsSection; 