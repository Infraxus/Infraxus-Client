import React from 'react';
import { useForm } from 'react-hook-form';
import color from '@/shared/styles/color.ts'
import styled from 'styled-components';
import { SmallInput } from '../shared/smallInput';

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

interface DeploymentFormData {
  batchSize: string;
  waitingTime: string;
  maxUnavailable: string;
  maxSurge: string;
}

interface DeploymentTabsProps {
  nextTab: () => void;
}

export const DeploymentForm: React.FC<DeploymentTabsProps> = ({ nextTab }) => {
  const { register, handleSubmit } = useForm<DeploymentFormData>();

  const onSubmit = (data: DeploymentFormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SmallInput
        label="배포 단위 (배포 배치 크기)"
        placeholder="배포 단위를 입력해주세요"
        {...register('batchSize')}
      />
      <SmallInput
        label="교체 대기 시간 (초)"
        placeholder="교체 대시 시간을 입력해주세요"
        {...register('waitingTime')}
      />
      <SmallInput
        label="최대 불가용 인스턴스"
        placeholder="최대 불가용 인스턴스를 입력해주세요"
        {...register('maxUnavailable')}
      />
      <SmallInput
        label="최대 서지 (최대 증설 수)"
        placeholder="최대 서지를 입력해주세요"
        {...register('maxSurge')}
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