import React from 'react';
import styled from 'styled-components';

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
  gap: 2.5vw; /* 19px → 2.5vw */
  font-size: 0.9vw;
  align-items: stretch;
`;

const Input = styled.input`
  color: #7e89ac;
  background-color: #0a1330;
  border: 0.1vw solid #0b1739;
  border-radius: 0.5vw;
  padding: 1vh 2vw; /* py-3.5 px-17px → vh, vw */
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
  width: auto;
  &:focus {
    outline: none;
    border-color: #0e43fb;
  }
`;

const StatusWrapper = styled.div`
  position: relative;
`;

const StatusButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #0a1330;
  border: 0.1vw solid #0b1739;
  border-radius: 0.5vw;
  color: white;
  padding: 1.8vh 1vw 1.8vh 2vw; /* top/bottom: 15px, right: 9px, left: 18px */
  gap: 3vw; /* gap-[40px_100px] → 주 gap 기준 */
`;

const StatusImage = styled.img`
  width: 1vw; /* 11px → 1vw */
  aspect-ratio: 1.22;
  object-fit: contain;
  stroke-width: 1px;
  stroke: white;
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
      <StatusWrapper>
        <StatusButton
          onClick={() =>
            onStatusChange(selectedStatus === 'all' ? '' : 'all')
          }
        >
          <span>All Status</span>
          <StatusImage
            src="https://cdn.builder.io/api/v1/image/assets/c8df5d00d5254ba7af7ef0a63b65be18/0b6436bd41cfa5fa77a48f9306b49cfbf1e779a6?placeholderIfAbsent=true"
            alt="Dropdown arrow"
          />
        </StatusButton>
      </StatusWrapper>
    </Container>
  );
};
