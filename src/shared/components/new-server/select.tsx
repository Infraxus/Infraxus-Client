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
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  background-color: ${color.NeutralColor700};
  color: ${color.NeutralColor100};
  font-size: 14px;
  outline: none;
  border: 1px solid ${color.NeutralColor600};
  cursor: pointer;

  & > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const StyledIcon = styled.div`
  width: 16px;
  height: 16px;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const StyledScrollButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
`;

const StyledContent = styled(SelectPrimitive.Content)<{ position: string }>`
  max-height: 200px;
  width: var(--radix-select-trigger-width);
  overflow-y: auto;
  background-color: ${color.NeutralColor700};
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 5px;
  border: 1px solid ${color.NeutralColor600};
`;

const StyledLabel = styled(SelectPrimitive.Label)`
  padding: 10px;
  font-size: 14px;
  color: ${color.NeutralColor300};
`;

const StyledItem = styled(SelectPrimitive.Item)`
  padding: 10px;
  border-radius: 3px;
  color: ${color.NeutralColor100};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${color.NeutralColor600};
  }

  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

const StyledSeparator = styled(SelectPrimitive.Separator)`
  height: 1px;
  background-color: ${color.NeutralColor600};
  margin: 5px 0;
`;

const Container = styled.div`
`;

const LabelContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "showCheckbox",
})<{ showCheckbox: boolean }>`
  font-size: 12px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${color.NeutralColor300};
`;

const StyledCheckbox = styled(Checkbox)`
  width: 16px;
  height: 16px;
  border-color: ${color.NeutralColor400};
  background-color: transparent;

  &[data-state="checked"] {
    background-color: ${color.SecondaryColor2};
    border-color: ${color.SecondaryColor2};
  }

  svg {
    color: ${color.NeutralColor100};
  }
`;

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <StyledTrigger ref={ref} className={className} {...props}>
      <SelectValue placeholder="모두" />
      <StyledIcon as={SelectPrimitive.Icon}>
        <ChevronDown size={16} />
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
        <Check size={16} />
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
