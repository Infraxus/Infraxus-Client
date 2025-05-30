import React from 'react';
import styled from 'styled-components';
import { FormSelect, SelectItem } from './select';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedTime: string
  onTimeChange: (status: string) => void;
  selectedLevel: string
  onLevelChange: (status: string) => void;
  selectedType: string
  onTypeChange: (status: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95.2vw;
  gap: 1vw;
  font-size: 1rem;
  align-items: stretch;
`;

const Input = styled.input`
  color: #7e89ac;
  background-color: #0a1330;
  border: 0.1vw solid #0b1739;
  border-radius: 0.5vw;
  padding: 1vh 1vw;
  width: 55vw;

  &:focus {
    outline: none;
    border-color: #0e43fb;
  }
`;

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedTime,
  onTimeChange,
  selectedLevel,
  onLevelChange,
  selectedType,
  onTypeChange,
}) => {
  return (
    <Container>
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search containers..."
      />
      <FormSelect
        label=""
        value={selectedTime}
        onValueChange={onTimeChange}
      >
        <SelectItem value="recent">Recent</SelectItem>
        <SelectItem value="1">Last 1 hour</SelectItem>
        <SelectItem value="2">Last 2 hour</SelectItem>
        <SelectItem value="3">Last 3 hour</SelectItem>
      </FormSelect>

      <FormSelect
        label=""
        value={selectedLevel}
        onValueChange={onLevelChange}
      >
        <SelectItem value="all">All Level</SelectItem>
        <SelectItem value="running">Running</SelectItem>
        <SelectItem value="stopped">Stopped</SelectItem>
        <SelectItem value="error">Error</SelectItem>
      </FormSelect>

      <FormSelect
        label=""
        value={selectedType}
        onValueChange={onTypeChange}
      >
        <SelectItem value="all">All Types</SelectItem>
        <SelectItem value="application">Application</SelectItem>
        <SelectItem value="system">System</SelectItem>
        <SelectItem value="network">Network</SelectItem>
      </FormSelect>
    </Container>
  );
};
