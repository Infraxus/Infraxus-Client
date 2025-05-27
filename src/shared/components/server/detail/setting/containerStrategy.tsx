import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  justify-content: center;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  gap: 2vh;

  @media (max-width: 768px) {
    max-width: 90vw;
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1vw;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 30vw;
`;

const Label = styled.label`
  color: #d1dbf9;
  font-weight: bold;
  font-size: 1.5rem;
`;

const SubText = styled.div`
  color: #7e89ac;
  font-weight: normal;
  font-size: 1.25rem;
`;

const Input = styled.input`
  margin-top: 1.5vh;
  height: 6vh;
  width: 42vw;
  max-width: 645px;
  font-size: 1rem;
  border-radius: 0.5vh;
  border: 1px solid #d1dbf9;
  background-color: #0b1739;
  padding-left: 1vw;
  color: white;
`;

export const ContainerStrategy: React.FC = () => {
  return (
    <Wrapper>
      <FormRow>
        <Label>Container Replacement Strategy</Label>
        <InputContainer>
          <InputGroup>
            <SubText>Replace N containers at a time</SubText>
            <Input type="number" placeholder="Enter number of containers" />
          </InputGroup>
          <InputGroup>
            <SubText>Waiting time between replacements (seconds)</SubText>
            <Input type="number" placeholder="Enter waiting time" />
          </InputGroup>
        </InputContainer>
      </FormRow>
    </Wrapper>
  );
};
