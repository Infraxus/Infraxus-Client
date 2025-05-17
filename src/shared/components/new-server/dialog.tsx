import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import styled, { css } from "styled-components";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.8);
  transition: opacity 0.2s ease-in-out;
  &[data-state="open"] {
    opacity: 1;
  }
  &[data-state="closed"] {
    opacity: 0;
  }
`;

const DialogContentWrapper = styled(DialogPrimitive.Content)`
  position: fixed;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
  z-index: 50;
  display: grid;
  gap: 2vh;
  width: 80vw;
  max-width: 70vw;
  padding: 4vh 2.5vw;
  background-color: #1f2937;
  border-radius: 1.5vh;
  box-shadow: 0 2vh 4vh rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease-in-out;

  &[data-state="open"] {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  &[data-state="closed"] {
    transform: translate(-50%, -50%) scale(0.95);
    opacity: 0;
  }
`;

const CloseButton = styled(DialogPrimitive.Close)`
  position: absolute;
  top: 2vh;
  right: 2vh;
  width: 2vh;
  height: 2vh;
  color: #9ca3af;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 0.5vh;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: 2px solid #4b5563;
    outline-offset: 0.5vh;
  }
`;

const DialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const DialogFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 2vh;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 2vw;
  }
`;

const DialogTitle = styled(DialogPrimitive.Title)`
  font-size: 2vh;
  font-weight: 600;
  color: #f9fafb;
`;

const DialogDescription = styled(DialogPrimitive.Description)`
  font-size: 1.8vh;
  color: #9ca3af;
`;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogContentWrapper ref={ref} {...props}>
      {children}
      <CloseButton>
        <X />
        <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }}>Close</span>
      </CloseButton>
    </DialogContentWrapper>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
