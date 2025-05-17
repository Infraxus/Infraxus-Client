import * as React from "react";
import styled from "styled-components";
import { Checkbox } from "./checkbox";
import color from "@/shared/styles/color";

export interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  showCheckbox?: boolean;
}

const Container = styled.div`
  width: 100%;
`;

const LabelContainer = styled.div<{ showCheckbox: boolean }>`
  font-size: 1.04vh;
  margin-bottom: 1.04vh;
  display: flex;
  align-items: center;
  gap: 0.83vw;
  color: ${({ showCheckbox }) => (showCheckbox ? "#AEB9E1" : "#FFFFFF")};
`;

const StyledCheckbox = styled(Checkbox)`
  width: 1.56vw;
  height: 1.56vh;
  border-color: #7e89ac;
  background-color: #ffffff;

  &[data-state="checked"] {
    background-color: #cb3cff;
    border-color: #cb3cff;
  }
`;

const SelectContainer = styled.div`
  position: relative;
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 6.25vh;
  background-color: #d1dbf9;
  border-radius: 0.83vh;
  padding: 1.04vh 2.08vw;
  appearance: none;
`;

const Arrow = styled.div`
  position: absolute;
  right: 1.04vw;
  top: 2.6vh;
  border-width: 0.52vh;
  border-style: solid;
  border-color: black transparent transparent black;
  transform: rotate(45deg);
  pointer-events: none;
`;

export const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, showCheckbox, children, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(false);

    return (
      <Container>
        {label && (
          <LabelContainer showCheckbox={showCheckbox || false}>
            {showCheckbox && (
              <StyledCheckbox
                checked={isChecked}
                onCheckedChange={(checked) => setIsChecked(checked as boolean)}
              />
            )}
            <span>{label}</span>
          </LabelContainer>
        )}
        {(!showCheckbox || isChecked) && (
          <SelectContainer>
            <StyledSelect ref={ref} {...props}>
              {children}
            </StyledSelect>
            <Arrow />
          </SelectContainer>
        )}
      </Container>
    );
  }
);

FormSelect.displayName = "FormSelect";
