import color from '@/shared/styles/color';
import React from 'react';
import styled from 'styled-components';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBarWrapper = styled.div`
  background-color: ${color.SecondaryColor1};
  padding: 0 0.75vw;
  width: 15vw;
  display: flex;
  gap: 0.75vw;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const SearchIcon = styled.svg`
  margin: auto;
  width: 0.73vw;
  height: 0.73vw;
`;

const Input = styled.input`
  width: 100%;
  height: 5vh;
  background-color: ${color.SecondaryColor1};
  border: none;
  border-radius: 0.2vw;
  color: white;
  font-size: 1rem;
  box-sizing: border-box;

  ::placeholder {
    color: white;
    opacity: 0.6;
  }
`;

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <SearchBarWrapper>
      <SearchIcon
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_264_17558)">
          <path
            d="M6.3512 11.3264C9.21487 11.3264 11.5364 9.00498 11.5364 6.14126C11.5364 3.27756 9.21487 0.95607 6.3512 0.95607C3.4875 0.95607 1.16602 3.27756 1.16602 6.14126C1.16602 9.00498 3.4875 11.3264 6.3512 11.3264Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.8332 12.6228L10.0137 9.80324"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_264_17558">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </SearchIcon>
      <Input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </SearchBarWrapper>
  );
};
