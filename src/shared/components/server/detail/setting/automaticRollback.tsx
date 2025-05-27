import React from 'react';
import styled from 'styled-components';

interface AutomaticRollbackProps {
  enabled: boolean;
  onToggle: () => void;
}

const Wrapper = styled.div``;

const Title = styled.h3`
  color: #d1dbf9;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5vh;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1vw;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  user-select: none;
  position: relative;
  padding-left: 3vw;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  -webkit-appearance: none;
  width: 1.5vw;
  height: 3vh;
  border: 2px solid #4f9eff;
  border-radius: 0.4vw;
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  transition: background-color 0.2s, border-color 0.2s;

  &:checked {
    background-color: #4f9eff;
    border-color: #4f9eff;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.3vw;
    height: 0.8vw;
    border: solid white;
    border-width: 0 0.3vw 0.3vw 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;


const Text = styled.span`
  font-size: 1rem;
`;

export const AutomaticRollback: React.FC<AutomaticRollbackProps> = ({
  enabled,
  onToggle,
}) => {
  return (
    <Wrapper>
      <Title>Automatic Rollback</Title>
      <Label>
        <Checkbox checked={enabled} onChange={onToggle} />
        <Text>Enable automatic rollback on deployment failure</Text>
      </Label>
    </Wrapper>
  );
};
