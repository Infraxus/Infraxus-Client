import color from '@/shared/styles/color';
import React from 'react';
import styled from 'styled-components';

interface StatusIndicatorProps {
  status: 'running' | 'stopped' | 'error';
}

const StyledIndicator = styled.div<{ $status: 'running' | 'stopped' | 'error' }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background-color: ${({ $status }) => {
    switch ($status) {
      case 'running':
        return color.Green;
      case 'stopped':
        return color.Red;
      case 'error':
        return color.SecondaryColor5;
    }
  }};
  margin: 1vh 1vw;
`;

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  return (
    <StyledIndicator
      $status={status}
      role="status"
      aria-label={`Server status: ${status}`}
    />
  );
};
