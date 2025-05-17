import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface ResourceSliderProps {
  label: string;
  value: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3vh;
  margin-bottom: 3vh;
`;

const Label = styled.div`
  color: white;
  font-size: 1.5vh;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

const Track = styled.div`
  height: 0.5vh;
  width: 100%;
  background-color: white;
  border-radius: 5vw;
`;

const Thumb = styled.div<{ position: number }>`
  position: absolute;
  top: 50%;
  width: 2.5vh;
  height: 2.5vh;
  background-color: #CB3CFF;
  border-radius: 50%;
  cursor: grab;
  transform: translate(-50%, -50%);
  left: ${({ position }) => position}%;
  
  &:active {
    cursor: grabbing;
  }
`;

const InputContainer = styled.div`
  position: absolute;
  left: 0;
  top: 110%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 0.7vh;
`;

const NumberInput = styled.input`
  width: 8vw;
  height: 3vh;
  background-color: #0B1739;
  color: #AEB9E1;
  font-size: 1rem;
  text-align: right;
  padding: 0;
  outline: none;
  border: none;
  border-bottom: 0.3vh solid #AEB9E1;
`;

const ValueText = styled.div`
  color: #AEB9E1;
  font-size: 1rem;
  cursor: pointer;
`;

export const ResourceSlider: React.FC<ResourceSliderProps> = ({
  label,
  value,
  min = 0,
  max = 100,
  defaultValue = 0,
  onChange
}) => {
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(defaultValue.toString());
  const sliderRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    setCurrentValue(defaultValue);
    setInputValue(defaultValue.toString());
  }, [defaultValue]);

  const calculateValue = (clientX: number): number => {
    if (!sliderRef.current) return currentValue;
    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, offsetX / rect.width));
    return Math.round(min + percentage * (max - min));
  };

  const handleDragStart = (clientX: number) => {
    isDraggingRef.current = true;
    const newValue = calculateValue(clientX);
    setCurrentValue(newValue);
    setInputValue(newValue.toString());
    onChange?.(newValue);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDraggingRef.current) return;
    const newValue = calculateValue(clientX);
    setCurrentValue(newValue);
    setInputValue(newValue.toString());
    onChange?.(newValue);
  };

  const handleDragEnd = () => {
    isDraggingRef.current = false;
  };

  const handleMouseDown = (e: React.MouseEvent) => handleDragStart(e.clientX);
  const handleTouchStart = (e: React.TouchEvent) => handleDragStart(e.touches[0].clientX);
  const handleMouseMove = (e: MouseEvent) => handleDragMove(e.clientX);
  const handleTouchMove = (e: TouchEvent) => handleDragMove(e.touches[0].clientX);
  
  useEffect(() => {
    if (isDraggingRef.current) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleDragEnd);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleDragEnd);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleDragEnd);
    };
  }, []);

  const handleEditStart = () => {
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleInputBlur = () => {
    const newValue = Math.max(min, Math.min(max, Number(inputValue) || min));
    setCurrentValue(newValue);
    setInputValue(newValue.toString());
    setIsEditing(false);
    onChange?.(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      handleInputBlur();
    }
  };

  const valueParts = value.split(' ');
  const unit = valueParts.length > 1 ? ` ${valueParts[1]}` : '';
  const position = ((currentValue - min) / (max - min)) * 100;

  return (
    <SliderContainer>
      <Label>{label}</Label>
      <SliderWrapper ref={sliderRef} onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}>
        <Track />
        <Thumb position={position} />
        <InputContainer>
          {isEditing ? (
            <NumberInput
              ref={inputRef}
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <ValueText onClick={handleEditStart}>
              {currentValue}{unit}
            </ValueText>
          )}
        </InputContainer>
      </SliderWrapper>
    </SliderContainer>
  );
};
