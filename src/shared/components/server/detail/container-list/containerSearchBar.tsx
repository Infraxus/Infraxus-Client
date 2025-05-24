import React from 'react';
import styled from 'styled-components';
import { FormSelect, SelectItem } from './select';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 96vw;
  gap: 1vw;
  font-size: 0.9vw;
  align-items: stretch;
`;

const Input = styled.input`
  color: #7e89ac;
  background-color: #0a1330;
  border: 0.1vw solid #0b1739;
  border-radius: 0.5vw;
  padding: 1vh 2vw;
  width: 82.5%;
  &:focus {
    outline: none;
    border-color: #0e43fb;
  }
`;

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedStatus,
  onStatusChange,
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
        value={selectedStatus}
        onValueChange={onStatusChange}
      >
        <SelectItem value="all">All Status</SelectItem>
        <SelectItem value="running">Running</SelectItem>
        <SelectItem value="stopped">Stopped</SelectItem>
        <SelectItem value="error">Error</SelectItem>
      </FormSelect>
    </Container>
  );
};
