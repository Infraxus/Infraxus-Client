import React, { useState } from 'react';
import styled from 'styled-components';
import { ResourceSlider } from './resourceSlider';
import color from '@/shared/styles/color';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 3vh 1.5vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 30px;
`;

const CancelButton = styled.button`
  width: 95px;
  height: 40px;
  background-color: ${color.SecondaryColor1};
  color: white;
  border-radius: 4px;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 95px;
  height: 40px;
  background-color: ${color.PrimaryColor};
  color: white;
  border-radius: 4px;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;

const DEFAULT_VALUES = {
  cpuCores: 1,
  memory: 1,
  gpu: 0,
  storage: 50,
};

const MAX_VALUES = {
  cpuCores: 16,
  memory: 64,
  gpu: 8,
  storage: 1000,
};

interface DeploymentTabsProps {
    nextTab: () => void;
}

export const ResourceAllocationForm: React.FC<DeploymentTabsProps> = ({ nextTab }) => {
  const [cpuCores, setCpuCores] = useState(DEFAULT_VALUES.cpuCores);
  const [memory, setMemory] = useState(DEFAULT_VALUES.memory);
  const [gpu, setGpu] = useState(DEFAULT_VALUES.gpu);
  const [storage, setStorage] = useState(DEFAULT_VALUES.storage);

  return (
    <Form>
        <ResourceSlider
            label="CPU 코어"
            value={`${cpuCores} 코어`}
            max={MAX_VALUES.cpuCores}
            defaultValue={cpuCores}
            onChange={setCpuCores}
        />
        <ResourceSlider
            label="메모리"
            value={`${memory} GB`}
            max={MAX_VALUES.memory}
            defaultValue={memory}
            onChange={setMemory}
        />
        <ResourceSlider
            label="GPU"
            value={`${gpu} 개`}
            max={MAX_VALUES.gpu}
            defaultValue={gpu}
            onChange={setGpu}
        />
        <ResourceSlider
            label="스토리지"
            value={`${storage} GB`}
            max={MAX_VALUES.storage}
            defaultValue={storage}
            onChange={setStorage}
        />
        <ButtonContainer>
            <CancelButton type="button">
                취소
            </CancelButton>
            <SubmitButton type="button" onClick={nextTab}>
                다음
            </SubmitButton>
      </ButtonContainer>
    </Form>
  );
};
