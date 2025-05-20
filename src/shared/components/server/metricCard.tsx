import color from '@/shared/styles/color';
import React from 'react';
import styled from 'styled-components';

interface MetricCardProps {
  label: string;
  value: string;
}

const CardContainer = styled.div`
  background-color: ${color.NeutralColor800};
  border-radius: 0.5rem;
  width: 16.9vw;
  padding: 0.75rem 0.875rem;

  @media (max-width: 768px) {
    width: calc(50% - 5px);
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const LabelText = styled.div`
  color: ${color.NeutralColor400};
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
`;

const ValueText = styled.div`
  color: white;
  font-size: 1rem;
`;

export const MetricCard: React.FC<MetricCardProps> = ({ label, value }) => {
  return (
    <CardContainer>
      <LabelText>{label}</LabelText>
      <ValueText>{value}</ValueText>
    </CardContainer>
  );
};
