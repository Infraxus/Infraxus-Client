import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1.2vw;
  font-size: 1rem;
  color: white;
  font-weight: 400;
  text-align: center;
  flex-wrap: wrap;
`;

const BaseButton = styled.button`
  color: white;
  font-size: 1rem;
  border-radius: 0.6vh;
  padding: 1.1vh 2.5vw;
  transition: background-color 0.3s;
  border: none;
`;

const SaveButton = styled(BaseButton)`
  background-color: #cb3cff;

  &:hover {
    background-color: #b935e6;
  }
`;

const DeployButton = styled(BaseButton)`
  background-color: #0e43fb;

  &:hover {
    background-color: #0d3ce6;
  }
`;

const RollbackButton = styled(BaseButton)`
  border: 0.1vh solid #081028;
  padding: 1.1vh 2.2vw;
  background-color: #0b1739;
`;

export const ActionButtons: React.FC = () => {
  return (
    <ButtonContainer>
      <SaveButton onClick={() => console.log('Save Changes')}>Save Changes</SaveButton>
      <DeployButton onClick={() => console.log('Start Deployment')}>Start Deployment</DeployButton>
      <RollbackButton onClick={() => console.log('Rollback')}>Rollback to Previous</RollbackButton>
    </ButtonContainer>
  );
};
