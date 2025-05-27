import React, { useState } from 'react';
import { styled } from 'styled-components';
import color from '@/shared/styles/color.ts';
import ToggleSwitch from './ToggleSwitch';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SettingsItemProps {
  title: string;
  description: string;
  isOn: boolean;
  handleToggle: () => void;
  children?: React.ReactNode;
}

const SettingsItemContainer = styled.div`
  padding: 0 20px;
  border-bottom: 1px solid ${color.NeutralColor600};
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

const SettingsItemText = styled.div`
  display: flex;
  flex-direction: column;
`;

const SettingsItemTitle = styled.div`
  font-weight: bold;
  color: ${color.NeutralColor100};
  margin-bottom: 5px;
  font-size: 1em;
`;

const SettingsItemDescription = styled.div`
  font-size: 0.9em;
  color: ${color.NeutralColor300};
`;

const ItemControls = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ExpandIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: ${color.NeutralColor300};

  svg {
    width: 100%;
    height: 100%;
  }
`;

const SettingsDetailContent = styled.div<{ isExpanded: boolean }>`
  display: ${props => props.isExpanded ? 'block' : 'none'};
  padding-bottom: 15px;
`;

const SettingsItem: React.FC<SettingsItemProps> = ({ title, description, isOn, handleToggle, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleItemClick = () => {
    if (children) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <SettingsItemContainer onClick={handleItemClick}>
      <ItemHeader>
        <SettingsItemText>
          <SettingsItemTitle>{title}</SettingsItemTitle>
          <SettingsItemDescription>{description}</SettingsItemDescription>
        </SettingsItemText>
        <ItemControls>
          <ToggleSwitch isOn={isOn} handleToggle={handleToggle} />
          {children && (
            <ExpandIconWrapper>
              {isExpanded ? <ChevronUp /> : <ChevronDown />}
            </ExpandIconWrapper>
          )}
        </ItemControls>
      </ItemHeader>
      <SettingsDetailContent isExpanded={isExpanded}>
        {children}
      </SettingsDetailContent>
    </SettingsItemContainer>
  );
};

export default SettingsItem; 