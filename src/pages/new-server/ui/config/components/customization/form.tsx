import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/shared/components/new-server/select";
import color from '@/shared/styles/color';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 30px;
`;

const CancelButton = styled.button`
  width: 95px;
  height: 40px;
  background-color: #0B1739;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 95px;
  height: 40px;
  background-color: #CB3CFF;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 3vh 1.5vw;
`;

const Label = styled.label`
  color: ${color.NeutralColor100};
  font-size: 1.5vh;
  margin-bottom: 1.5vh;
`;

const TextArea = styled.textarea`
  width: 91vw;
  height: 15vh;
  background-color: ${color.NeutralColor800};
  border: 1px solid ${color.NeutralColor700};
  border-radius: 1vh;
  color: ${color.NeutralColor100};
  padding: 0.5vh 0.5vw;
  font-size: 1rem;
  resize: none;
`;

interface DeploymentFormProps {
  nextTab: () => void;
}

export const CustomizationForm: React.FC<DeploymentFormProps> = ({ nextTab }) => {
  const [failureHandling, setFailureHandling] = useState('Pause Deployment');
  const [preDeploymentHook, setPreDeploymentHook] = useState('');
  const [postDeploymentHook, setPostDeploymentHook] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="pre-deployment">Pre-deployment Hook</Label>
        <TextArea
          id="pre-deployment"
          value={preDeploymentHook}
          onChange={(e) => setPreDeploymentHook(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="post-deployment">Post-deployment Hook</Label>
        <TextArea
          id="post-deployment"
          value={postDeploymentHook}
          onChange={(e) => setPostDeploymentHook(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="failure-handling">Failure Handling</Label>
        <Select value={failureHandling} onValueChange={setFailureHandling}>
          <SelectTrigger>
            <SelectValue placeholder="Select Failure Handling" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Pause Deployment">Pause Deployment</SelectItem>
            <SelectItem value="Rollback">Rollback</SelectItem>
            <SelectItem value="Continue">Continue</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ButtonContainer>
        <CancelButton type="button">
          취소
        </CancelButton>
        <SubmitButton type="button" onClick={nextTab}>
          다음
        </SubmitButton>
      </ButtonContainer>
    </FormContainer>
  );
};
