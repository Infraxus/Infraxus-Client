import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import styled from "styled-components";
import color from "@/shared/styles/color";

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

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const StyledTrigger = styled(SelectPrimitive.Trigger)`
  display: flex;
  flex-direction: coloum;
  align-items: center;
  justify-content: space-between;
  width: 92vw;
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

const SelectScrollUpButton = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>>(
  ({ className, ...props }, ref) => (
    <StyledScrollButton ref={ref} {...props}>
      <ChevronUp />
    </StyledScrollButton>
  )
);
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>>(
  ({ className, ...props }, ref) => (
    <StyledScrollButton ref={ref} {...props}>
      <ChevronDown />
    </StyledScrollButton>
  )
);
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, position = "popper", ...props }, ref) => (
    <SelectPrimitive.Portal>
      <StyledContent ref={ref} className={className} position={position} {...props}>
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport>
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </StyledContent>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>>(
  ({ className, ...props }, ref) => (
    <StyledLabel ref={ref} {...props} />
  )
);
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, ...props }, ref) => (
    <StyledItem ref={ref} {...props}>
      <span>
        <SelectPrimitive.ItemIndicator>
          <Check />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </StyledItem>
  )
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>>(
  ({ className, ...props }, ref) => (
    <StyledSeparator ref={ref} {...props} />
  )
);
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
