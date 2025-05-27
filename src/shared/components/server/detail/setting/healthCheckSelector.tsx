import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Title = styled.h3`
  color: #d1dbf9;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: stretch;
  gap: 2vw;
  margin-top: 2vh;
  text-align: center;
  color: white;
  font-weight: normal;
`;

const MethodButton = styled.button<{ selected: boolean }>`
  color: white;
  border-radius: 1vh;
  border: none;
  padding: 1.5vh 3vw;
  font-size: 1rem;
  background-color: ${({ selected }) => (selected ? '#0E43FB' : '#081028')};
  transition: background-color 0.2s ease;
  cursor: pointer;
`;

const healthCheckMethods = [
  { id: 'http', label: 'HTTP Check' },
  { id: 'tcp', label: 'TCP Check' },
  { id: 'command', label: 'Command Check' }
];

interface HealthCheckSelectorProps {
  selectedMethod: string;
  onMethodChange: (method: string) => void;
}

export const HealthCheckSelector: React.FC<HealthCheckSelectorProps> = ({
  selectedMethod,
  onMethodChange
}) => {
  return (
    <Wrapper>
      <Title>Health Check Method</Title>
      <ButtonGroup>
        {healthCheckMethods.map((method) => (
          <MethodButton
            key={method.id}
            selected={selectedMethod === method.id}
            onClick={() => onMethodChange(method.id)}
          >
            {method.label}
          </MethodButton>
        ))}
      </ButtonGroup>
    </Wrapper>
  );
};
