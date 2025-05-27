import React from 'react';
import { styled } from 'styled-components';
import color from '@/shared/styles/color.ts';

interface AlertStatProps {
  icon: string; // 또는 ReactNode (SVG 등)
  title: string;
  count: number;
  color: string;
}

const AlertStatCard = styled.div<{ color: string }>`
  background-color: ${color.NeutralColor700}; /* 이미지 배경색 참고 */
  padding: 22px;
  border-radius: 8px;
  border: 2px solid #343B4F;
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
`;

const AlertStatIcon = styled.div`
  font-size: 2em;
`;

const AlertStatContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const AlertStatTitle = styled.div`
  font-size: 0.9em;
  color: ${color.NeutralColor300}; /* 연한 회색 */
`;

const AlertStatCount = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: ${color.NeutralColor100};
`;

const AlertStat: React.FC<AlertStatProps> = ({ icon, title, count, color }) => {
  return (
    <AlertStatCard color={color}>
      <AlertStatIcon>{icon}</AlertStatIcon>
      <AlertStatContent>
        <AlertStatTitle>{title}</AlertStatTitle>
        <AlertStatCount>{count}</AlertStatCount>
      </AlertStatContent>
    </AlertStatCard>
  );
};

const AlertStats: React.FC = () => {
  return (
    <>
      <AlertStat icon="⭐" title="Critical Alerts" count={12} color="#9333EA" /> {/* 보라색 예시 */}
      <AlertStat icon="❗" title="Warnings" count={45} color="#F59E0B" /> {/* 주황색 예시 */}
      <AlertStat icon="✅" title="Info Notifications" count={89} color="#22C55E" /> {/* 초록색 예시 */}
    </>
  );
};

export default AlertStats; 