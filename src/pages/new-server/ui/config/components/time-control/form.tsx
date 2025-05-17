import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment-timezone';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/shared/components/new-server/select";
import color from '@/shared/styles/color';

interface TimeControlProps {
  nextTab: () => void;
}

const Container = styled.div`
  padding: 3vh 1.5vw;
`;

const Label = styled.label`
  color: ${color.NeutralColor100};
  font-size: 1.5vh;
  margin-bottom: 1.5vh;
  display: block;
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

export const TimeControlForm: React.FC<TimeControlProps> = ({ nextTab }) => {
    const [timezones, setTimezones] = useState<string[]>([]);
    const [time, setTime] = useState<string>();
    
    useEffect(() => {
        const allTimezones = moment.tz.names();
        setTimezones(allTimezones);
    }, []);
    
    return (
        <Container>
            <Label htmlFor="timezone">배포 시간대</Label>
            <Select value={time} onValueChange={setTime}>
                <SelectTrigger>
                <SelectValue placeholder="시간대를 선택해주세요." />
                </SelectTrigger>
                <SelectContent>
                {timezones.map((tz) => (
                    <SelectItem key={tz} value={tz}>
                    {tz} ({moment.tz(tz).format("Z")})
                    </SelectItem>
                ))}
                </SelectContent>
            </Select>
            <ButtonContainer>
                <CancelButton type="button">
                취소
                </CancelButton>
                <SubmitButton type="button" onClick={nextTab}>
                다음
                </SubmitButton>
            </ButtonContainer>
        </Container>
    );
};
