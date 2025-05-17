import React, { InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import color from '@/shared/styles/color.ts'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const InputLabel = styled.label`
  font-size: 1rem;
  color: ${color.NeutralColor100};
`;

const StyledInput = styled.input`
  font-family: "Inter";
  width: 91vw;
  height: 4.25vh;
  background-color: ${color.NeutralColor800};
  border-radius: 4px;
  color: ${color.NeutralColor100};
  font-size: 1rem;
  padding: 0 0.5vw;
  border: none;  /* 테두리 제거 */
`;

interface DeploymentInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
}

export const SmallInput = forwardRef<HTMLInputElement, DeploymentInputProps>(
  ({ label, placeholder, ...props }, ref) => {
    return (
      <InputContainer>
        <InputLabel>{label}</InputLabel>
        <StyledInput ref={ref} {...props} placeholder={placeholder} />
      </InputContainer>
    );
  }
);
