import React from 'react';
import styled from 'styled-components';

interface MetaInformationProps {
  severity: string;
  environment: string;
}

const MetaContainer = styled.div`
  display: flex;
  gap: 1vw;
  align-items: stretch;
  gap: 2vw;
  font-weight: 400;
  white-space: nowrap;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1vh;
`;

const Label = styled.div`
  color: rgba(174, 185, 225, 1);
  font-size: 1.25rem;
`;

const Value = styled.div`
  color: white;
  font-size: 1rem;
`;

export const MetaInformation: React.FC<MetaInformationProps> = ({
  severity,
  environment,
}) => {
  return (
    <MetaContainer>
      <Column>
        <Label>Severity</Label>
        <Value>{severity}</Value>
      </Column>
      <Column>
        <Label>Environment</Label>
        <Value>{environment}</Value>
      </Column>
    </MetaContainer>
  );
};
