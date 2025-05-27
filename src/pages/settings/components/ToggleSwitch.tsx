import React from 'react';
import { styled } from 'styled-components';
import color from '@/shared/styles/color.ts';

interface ToggleSwitchProps {
  isOn: boolean;
  handleToggle: () => void;
}

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px; /* 스위치 너비 */
  height: 20px; /* 스위치 높이 */
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span<{ isOn: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.isOn ? color.SecondaryColor2 : color.NeutralColor600}; /* 보라색 또는 회색 배경 */
  transition: .4s;
  border-radius: 20px; /* pill 형태 */

  &:before {
    position: absolute;
    content: "";
    height: 16px; /* 원형 버튼 크기 */
    width: 16px; /* 원형 버튼 크기 */
    left: 2px; /* 왼쪽 여백 */
    bottom: 2px; /* 아래 여백 */
    background-color: white;
    transition: .4s;
    border-radius: 50%; /* 원형 */
    transform: ${props => props.isOn ? 'translateX(20px)' : 'translateX(0)'}; /* 토글 위치 */
  }
`;

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, handleToggle }) => {
  return (
    <SwitchContainer>
      <SwitchLabel>
        <SwitchInput type="checkbox" checked={isOn} onChange={handleToggle} />
        <Slider isOn={isOn} />
      </SwitchLabel>
    </SwitchContainer>
  );
};

export default ToggleSwitch; 