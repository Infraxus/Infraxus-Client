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

export const DeploymentStabilityForm: React.FC<DeploymentTabsProps> = ({ nextTab }) => {
  const { register, handleSubmit } = useForm<DeploymentFormData>();

  const onSubmit = (data: DeploymentFormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SmallInput
        label="헬스 체크 URL"
        placeholder="헬스 체크 URL을 입력해주세요"
        {...register('batchSize')}
      />
      <SmallInput
        label="상태 점검 주기 (seconds)"
        placeholder="상태 점검 주기를 입력해주세요"
        {...register('waitingTime')}
      />
      <SmallInput
        label="최대 허용 장애 수"
        placeholder="최대 허용 장애 수를 입력해주세요"
        {...register('maxUnavailable')}
      />
      <SmallInput
        label="복구 조건"
        placeholder="복구 조건을 입력해주세요"
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