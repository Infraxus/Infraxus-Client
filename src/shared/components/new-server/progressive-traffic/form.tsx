import React from 'react';
import { useForm } from 'react-hook-form';
import color from '@/shared/styles/color.ts'
import styled from 'styled-components';
import { SmallInput } from '@/shared/components/new-server/smallInput';

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

interface DeploymentFormData {
  batchSize: string;
  waitingTime: string;
  maxUnavailable: string;
  maxSurge: string;
}

interface DeploymentTabsProps {
  nextTab: () => void;
}

export const ProgressiveTrafficForm: React.FC<DeploymentTabsProps> = ({ nextTab }) => {
  const { register, handleSubmit } = useForm<DeploymentFormData>();

  const onSubmit = (data: DeploymentFormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SmallInput
        label="초기 요청 비율 (%)"
        placeholder="초기 요청 비용을 입력해주세요"
        {...register('batchSize')}
      />
      <SmallInput
        label="스케일링 비율 (%)"
        placeholder="스케일링 비율을 입력해주세요"
        {...register('waitingTime')}
      />
      <SmallInput
        label="스케일링 주기 (seconds)"
        placeholder="스케일링 주기를 입력해주세요"
        {...register('maxUnavailable')}
      />
      <SmallInput
        label="자동 중단 조건 (%)"
        placeholder="자동 중단 조건을 입력해주세요"
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