import React from 'react';
import styled from 'styled-components';

interface StatusIndicatorProps {
  status: 'healthy' | 'degraded' | 'unhealthy';
}

const StyledIndicator = styled.div<{ status: 'healthy' | 'degraded' | 'unhealthy' }>`
  text-align: center;
  font-size: 1.75rem; /* 이모지 크기 비율 조정 */

  color: ${({ status }) => {
    switch (status) {
      case 'healthy':
        return 'white';
      case 'degraded':
        return '#FDB52A';
      case 'unhealthy':
        return 'white';
      default:
        return 'white';
    }
  }};
`;

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  const getStatusEmoji = () => {
    switch (status) {
      case 'healthy':
        return '✅';
      case 'degraded':
        return '⚠️';
      case 'unhealthy':
        return '❌';
      default:
        return '❓';
    }
  };

  return (
    <StyledIndicator status={status}>
      {getStatusEmoji()}
    </StyledIndicator>
  );
};
