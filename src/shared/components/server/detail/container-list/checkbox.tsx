import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import styled from "styled-components";
import color from "@/shared/styles/color";

const CheckboxRoot = styled(CheckboxPrimitive.Root)`
  width: 1vw;
  height: 2vh;
  flex-shrink: 0;
  border-radius: 0.26vw;
  border: 0.1vw solid ${color.PrimaryColor};
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
  
  &:focus-visible {
    border-color: ${color.PrimaryColor};
    box-shadow: 0 0 0 0.26vw ${color.PrimaryColor};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &[data-state="checked"] {
    background-color: ${color.PrimaryColor};
    color: ${color.PrimaryColor};
  }
`;

const Indicator = styled(CheckboxPrimitive.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
  color: ${color.NeutralColor100};
  width: 100%;
  height: 100%;
`;

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxRoot ref={ref} {...props}>
    <Indicator>
      <Check />
    </Indicator>
  </CheckboxRoot>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
