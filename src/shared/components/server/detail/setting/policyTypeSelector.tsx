import React from 'react';
import styled from 'styled-components';

const policyTypes = [
  { id: 'rolling', label: 'Rolling Update' },
  { id: 'bluegreen', label: 'Blue-Green' },
  { id: 'canary', label: 'Canary' },
  { id: 'manual', label: 'Manual Deployment' },
];

interface PolicyTypeSelectorProps {
  selectedPolicy: string;
  onPolicyChange: (policy: string) => void;
}

// Styled components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  color: #d1dbf9;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4vh;
  margin-top: 1.5vh;
`;

const PolicyButton = styled.button<{ active: boolean }>`
  color: white;
  text-align: center;
  font-weight: 400;
  border-radius: 0.5vh;
  border: none;
  padding: 1vh 2vw;
  font-size: 1rem;
  background-color: ${({ active }) => (active ? '#0E43FB' : '#081028')};
  transition: background-color 0.2s;
`;

export const PolicyTypeSelector: React.FC<PolicyTypeSelectorProps> = ({
  selectedPolicy,
  onPolicyChange,
}) => {
  return (
    <Wrapper>
      <Title>Policy Type</Title>
      <ButtonGroup>
        {policyTypes.map((policy) => (
          <PolicyButton
            key={policy.id}
            active={selectedPolicy === policy.id}
            onClick={() => onPolicyChange(policy.id)}
          >
            {policy.label}
          </PolicyButton>
        ))}
      </ButtonGroup>
    </Wrapper>
  );
};
