import color from "@/shared/styles/color";
import React from "react";
import { styled } from "styled-components";

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Container = styled.div`
  width: 100%;
`;

const Label = styled.label`
  color: ${color.NeutralColor100};
  font-size: 0.9375vh;  /* 약 12px */
  margin: 0.5vh 0;  /* 약 2px */
  display: block;
`;

const StyledInput = styled.input`
  width: 97.65%;
  height: 5vh;  /* 약 50px */
  background-color: ${color.NeutralColor600};
  border-radius: 0.26vh;  /* 약 4px */
  border: none;
  padding: 0 1vw;  /* 약 15px */
  color: ${color.NeutralColor100};
  font-size: 1rem;  /* 약 14px */
`;

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, type, ...props }, ref) => {
    return (
      <Container>
        {label && <Label>{label}</Label>}
        <StyledInput type={type} ref={ref} {...props} />
      </Container>
    );
  }
);

FormInput.displayName = "FormInput";
