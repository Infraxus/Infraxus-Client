import color from '@/shared/styles/color';
import React from 'react';
import styled from 'styled-components';

interface StatusIndicatorProps {
  status: 'normal' | 'warning' | 'error';
}

const StyledIndicator = styled.div<{ $status: 'normal' | 'warning' | 'error' }>`
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  background-color: ${({ $status }) => {
    switch ($status) {
      case 'normal':
        return color.Green;
      case 'warning':
        return color.Red;
      case 'error':
        return color.SecondaryColor5;
    }
  }};
  margin: auto 1vw;
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
