import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/new-server/select";
import color from '@/shared/styles/color';
import { SmallInput } from '@/shared/components/new-server/smallInput';

interface VersionREplacementFormData {
  switchingMethod: string;
  trafficSplitRatio: number;
  monitoringCriteria: string;
  switchingTiming: string;
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 92vw;
  padding: 3vh 1.5vw;
  gap: 2vh;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 1.5vh;
  display: block;
  font-size: 1.5vh;
`;

const StyledSelectTrigger = styled(SelectTrigger)`
  width: 100%;
  background: ${color.NeutralColor800};
  color: ${color.NeutralColor100};
  font-size: 1rem;
  padding: 1vh 1.5vw;
  border-radius: 0.5vh;
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

interface DeploymentTabsProps {
  nextTab: () => void;
}

export const VersionReplacementForm: React.FC<DeploymentTabsProps> = ({ nextTab }) => {
  const { register, handleSubmit, setValue } = useForm<VersionREplacementFormData>();
  const [switchingMethod, setSwitchingMethod] = useState("");
  const [monitoringCriteria, setMonitoringCriteria] = useState("");
  const [switchingTiming, setSwitchingTiming] = useState("");

  const onSubmit = (data: VersionREplacementFormData) => {
    console.log("Form Data:", data);
    nextTab();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {/* 배포 전략 */}
      <div>
        <Label>배포 전략</Label>
        <Select value={switchingMethod} onValueChange={(value) => {
          setSwitchingMethod(value);
          setValue("switchingMethod", value);
        }}>
          <StyledSelectTrigger>
            <SelectValue placeholder="배포 전략을 선택하세요" />
          </StyledSelectTrigger>
          <SelectContent>
            <SelectItem value="batch">Batch</SelectItem>
            <SelectItem value="rolling">Rolling</SelectItem>
            <SelectItem value="blue-green">Blue-Green</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 트래픽 분배 비율 */}
      <SmallInput
        label="트래픽 분배 비율 (%)"
        type="number"
        placeholder="숫자를 입력하세요"
        {...register('trafficSplitRatio')}
      />

      {/* 상태 평가 지표 */}
      <div>
        <Label>상태 평가 지표</Label>
        <Select value={monitoringCriteria} onValueChange={(value) => {
          setMonitoringCriteria(value);
          setValue("monitoringCriteria", value);
        }}>
          <StyledSelectTrigger>
            <SelectValue placeholder="상태 평가 지표를 선택하세요" />
          </StyledSelectTrigger>
          <SelectContent>
            <SelectItem value="error-rate">Error Rate</SelectItem>
            <SelectItem value="latency">Latency</SelectItem>
            <SelectItem value="throughput">Throughput</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 배포 시점 */}
      <div>
        <Label>배포 시점</Label>
        <Select value={switchingTiming} onValueChange={(value) => {
          setSwitchingTiming(value);
          setValue("switchingTiming", value);
        }}>
          <StyledSelectTrigger>
            <SelectValue placeholder="배포 시점을 선택하세요" />
          </StyledSelectTrigger>
          <SelectContent>
            <SelectItem value="automatic">Automatic</SelectItem>
            <SelectItem value="manual">Manual</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
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
