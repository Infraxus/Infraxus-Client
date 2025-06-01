import React from 'react';
import AlertItem from './AlertItem';
import { styled } from 'styled-components';
import color from '@/shared/styles/color.ts';

interface Alert {
  type: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  time: string;
}

const dummyAlerts: Alert[] = [
  {
    type: 'critical',
    title: 'Container CPU Usage High',
    description: 'Production DB\nContainer cpu-prod-db-01 exceeding 90% threshold',
    time: '2 mins ago',
  },
  {
    type: 'warning',
    title: 'Build Pipeline Failed',
    description: 'Frontend App\nBuild #1234 failed due to test errors',
    time: '15 mins ago',
  },
  {
    type: 'info',
    title: 'New Deployment Success',
    description: 'API Gateway\nVersion 2.1.0 deployed successfully',
    time: '1 hour ago',
  },
];

const AlertListContainer = styled.div`
  /* 알람 목록 컨테이너 스타일 */
  border-radius: 5px; /* 전체 목록 컨테이너 라운딩 */
  overflow: hidden; /* 자식 요소의 라운딩 적용 */
`;

const AlertList: React.FC = () => {
  return (
    <AlertListContainer>
      {dummyAlerts.map((alert, index) => (
        <AlertItem
          key={index}
          type={alert.type}
          title={alert.title}
          description={alert.description}
          time={alert.time}
          isFirst={index === 0}
          isLast={index === dummyAlerts.length - 1}
        />
      ))}
    </AlertListContainer>
  );
};

export default AlertList; 