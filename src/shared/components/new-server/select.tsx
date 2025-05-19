import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import styled from "styled-components";
import color from "@/shared/styles/color";
import { Checkbox } from "./checkbox";

interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  className?: string;
  children?: React.ReactNode;
}

interface SelectContentProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
  className?: string;
  children?: React.ReactNode;
  position?: "popper" | "item-aligned";
}

interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  className?: string;
  children?: React.ReactNode;
}

interface FormSelectProps {
  label : string;
  showCheckbox?: boolean;
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
  value: string;
  isEditMode?: boolean;
}

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const StyledTrigger = styled(SelectPrimitive.Trigger)`
  display: flex;
  flex-direction: coloum;
  align-items: center;
  justify-content: space-between;
  max-width: 92vw;
  min-width: 100%;
  height: 5vh;
  padding: 1vh 1vw;
  border-radius: 0.5vh;
  background-color: ${color.NeutralColor800};
  color: ${color.NeutralColor100};
  font-size: 1.25vh;
  outline: none;
  border: none;
  cursor: pointer;

  & > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const StyledIcon = styled.div`
  width: 2vh;
  height: 2vh;
  opacity: 0.7;
`;

const StyledScrollButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
`;

const StyledContent = styled(SelectPrimitive.Content)<{ position: string }>`
  max-height: 40vh;
  max-width: 50vh;
  overflow-y: auto;
  background-color: ${color.NeutralColor800};
  border-radius: 0.5vh;
  box-shadow: 0 0.5vh 2vh rgba(0, 0, 0, 0.3);
  padding: 0.5vh;
`;

const StyledLabel = styled(SelectPrimitive.Label)`
  padding: 1vh 1vw;
  font-size: 1rem;
  color: ${color.NeutralColor100};
`;

const StyledItem = styled(SelectPrimitive.Item)`
  padding: 1vh 1vw;
  border-radius: 0.5vh;
  color: ${color.NeutralColor100};
  cursor: pointer;

  &:hover {
    background-color: ${color.NeutralColor500};
  }

  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

const StyledSeparator = styled(SelectPrimitive.Separator)`
  height: 0.2vh;
  background-color: ${color.NeutralColor800};
  margin: 0.5vh 0;
`;

const Container = styled.div`
  width: 100%;
`;

const LabelContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "showCheckbox",
})<{ showCheckbox: boolean }>`
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

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <StyledTrigger ref={ref} className={className} {...props}>
      {children}
      <StyledIcon as={SelectPrimitive.Icon}>
        <ChevronDown />
      </StyledIcon>
    </StyledTrigger>
  )
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, value, ...props }, ref) => (
    <StyledItem ref={ref} className={className} value={value} {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <Check />
      </SelectPrimitive.ItemIndicator>
    </StyledItem>
  )
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const FormSelect = React.forwardRef<HTMLButtonElement, FormSelectProps>(
  ({ label, children, onValueChange, value, isEditMode = false, showCheckbox = false }, ref) => {
    const [isChecked, setIsChecked] = React.useState(false);

    React.useEffect(() => {
      console.log("FormSelect isEditMode:", isEditMode, "showCheckbox:", showCheckbox);
    }, [isEditMode, showCheckbox]);

    return (
      <Container>
        {label && (
          <LabelContainer showCheckbox={showCheckbox}>
            {!isEditMode && showCheckbox && (
              <StyledCheckbox
                checked={isChecked}
                onCheckedChange={(checked) => {
                  console.log("Checkbox state changed:", checked);
                  setIsChecked(checked as boolean);
                }}
              />
            )}
            <span>{label}</span>
          </LabelContainer>
        )}
        {(isEditMode || !showCheckbox || isChecked) && (
          <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger ref={ref}>
              <SelectValue placeholder="선택해주세요" />
            </SelectTrigger>
            <StyledContent position="popper">
              {children}
            </StyledContent>
          </Select>
        )}
      </Container>
    );
  }
);

FormSelect.displayName = "FormSelect";

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  FormSelect,
  StyledContent as SelectContent,
  StyledLabel as SelectLabel,
  SelectItem,
  StyledSeparator as SelectSeparator,
};
