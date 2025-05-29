import React, { useState } from 'react';
import styled from 'styled-components';
import type { EnvironmentVariable } from './types';
import color from '@/shared/styles/color';

interface ContainerEnvironmentProps {
  variables: EnvironmentVariable[];
  onAddVariable: (newVariable: EnvironmentVariable) => void;
  onRemoveVariable: (variable: EnvironmentVariable) => void;
}

// Styled Components
const Wrapper = styled.div`
  background-color: rgba(11, 23, 57, 1);
  width: 91.25vw;
  font-weight: 400;
  padding: 2vh 2vw;
  border-radius: 1vw;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
  color: white;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 1.25rem;
`;

const AddButton = styled.button`
  border-radius: 0.8vw;
  background-color: rgba(8, 16, 40, 1);
  color: white;
  font-size: 0.9vw;
  text-align: center;
  padding: 1.5vh 2.5vw;
  transition: background-color 0.3s;
  border: none;

  &:hover {
    background-color: rgba(18, 26, 50, 1);
  }
`;

const VariableBox = styled.div`
  background-color: rgba(8, 16, 40, 1);
  border-radius: 1vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2vw;
  padding: 2.5vh 2vw;
  white-space: nowrap;
`;

const VariableList = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 1rem;
  gap: 1vh;
`;

const EnvBox = styled.div`
  display: flex;
  width: 87.25vw;
`;

const EnvVar = styled.div`
  width: 75%;
`;

const Input = styled.input`
  padding: 0 1vw;
  background-color: ${color.NeutralColor600};
  border-radius: 0.26vh;  /* 약 4px */
  border: none;
  color: ${color.NeutralColor100};
  font-size: 1rem;  /* 약 14px */
  padding: 1vh 1vw;
`;

const RemoveButton = styled.button`
  color: inherit;
  transition: color 0.3s;
  color: rgba(203, 60, 255, 1);
  font-size: 1vw;
  border: none;
  background: none;
  text-align: right;
  width: 25%;

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    color: rgba(183, 40, 235, 1);
  }
`;

export const ContainerEnvironment: React.FC<ContainerEnvironmentProps> = ({
    variables,
    onAddVariable,
    onRemoveVariable,
  }) => {
    const [isAdding, setIsAdding] = useState(false);
    const [keyInput, setKeyInput] = useState('');
    const [valueInput, setValueInput] = useState('');
  
    const handleSubmit = () => {
      if (!keyInput || !valueInput) return;
      onAddVariable({ key: keyInput, value: valueInput });
      setKeyInput('');
      setValueInput('');
      setIsAdding(false);
    };
  
    return (
      <Wrapper>
        <Header>
          <Title>Environment Variables</Title>
          <AddButton onClick={() => setIsAdding(!isAdding)}>
            {isAdding ? 'Cancel' : 'Add Variable'}
          </AddButton>
        </Header>
  
        {isAdding && (
          <VariableBox style={{ flexDirection: 'column', gap: "2vh" }}>
            <Input
              placeholder="Key"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
            />
            <Input
              placeholder="Value"
              value={valueInput}
              onChange={(e) => setValueInput(e.target.value)}
            />
            <AddButton onClick={handleSubmit}>Add</AddButton>
          </VariableBox>
        )}
  
        <VariableBox>
          <VariableList>
            {variables.map((variable, index) => (
              <EnvBox key={index}>
                <EnvVar>{`${variable.key}=${variable.value}`}</EnvVar>
                <RemoveButton onClick={() => onRemoveVariable(variable)}>
                  Remove
                </RemoveButton>
              </EnvBox>
            ))}
          </VariableList>
        </VariableBox>
      </Wrapper>
    );
  };
