import React, { useState } from 'react';
import styled from 'styled-components';
import { LogEntryProps } from './types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #0B1739;
  padding: 8vh 3.6vw;
  border-radius: 1vw;
`;

const Heading = styled.h3`
  color: white;
  font-size: 1.8vw;
  font-weight: 600;
`;

const SearchInput = styled.input`
  margin-top: 2.4vh;
  color: #7E89AC;
  background-color: #081028;
  padding: 2.4vh 4vw;
  font-size: 1.2vw;
  border: 1px solid #081028;
  border-radius: 0.8vw;
  outline: none;

  &:focus {
    border-color: #CB3CFF;
  }
`;

const FilterTitle = styled.div`
  margin-top: 2.4vh;
  color: #D1DBF9;
  font-size: 1.2vw;
`;

const FilterButton = styled.button`
  margin-top: 2vh;
  background-color: #081028;
  padding: 2vh 9vw;
  border-radius: 0.8vw;
  color: white;
  font-size: 1.2vw;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0E1D45;
  }
`;

const NewFilterButton = styled(FilterButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NewFilterContent = styled.div`
  display: flex;
  width: 16vw;
  gap: 2vw;
  align-items: center;
  justify-content: space-between;
`;

const FilterIcon = styled.img`
  width: 3.4vw;
  object-fit: contain;
`;

const LogTitle = styled.div`
  margin-top: 2.4vh;
  color: #D1DBF9;
  font-size: 1.2vw;
`;

const LogEntryWrapper = styled.div`
  border-radius: 0.8vw;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #081028;
  margin-top: 1vh;
  padding: 2vh 2.5vw;
`;

const LogEntryHeader = styled.div`
  display: flex;
  gap: 4vw;
  font-size: 1vw;
`;

const Timestamp = styled.div`
  color: #D1DBF9;
`;

const Service = styled.div`
  color: white;
  text-align: center;
`;

const Message = styled.div`
  margin-top: 1vh;
  color: white;
  font-size: 1.2vw;
`;

const LogEntry: React.FC<LogEntryProps> = ({ timestamp, service, message }) => (
  <LogEntryWrapper>
    <LogEntryHeader>
      <Timestamp>{timestamp}</Timestamp>
      <Service>{service}</Service>
    </LogEntryHeader>
    <Message>{message}</Message>
  </LogEntryWrapper>
);

export const LogSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Server Error');

  const logs: LogEntryProps[] = [
    {
      timestamp: '2024-01-20 15:45:23',
      service: 'api',
      message: 'Connection timeout',
    },
    {
      timestamp: '2024-01-20 15:44:12',
      service: 'web',
      message: 'High latency detected',
    },
  ];

  return (
    <Container>
      <Heading>Log Search</Heading>
      <SearchInput
        type="text"
        placeholder="Search logs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <FilterTitle>Filters</FilterTitle>
      <FilterButton onClick={() => setSelectedFilter('Server Error')}>
        {selectedFilter}
      </FilterButton>

      <NewFilterButton onClick={() => console.log('Add new filter')}>
        <NewFilterContent>
          <FilterIcon
            src="https://cdn.builder.io/api/v1/image/assets/c8df5d00d5254ba7af7ef0a63b65be18/e9bc4f562426ed4432d396812c9ef3972547fb92?placeholderIfAbsent=true"
            alt="Add filter"
          />
          <div>New Filter</div>
        </NewFilterContent>
      </NewFilterButton>

      <LogTitle>Recent Logs</LogTitle>
      {logs.map((log) => (
        <LogEntry key={log.timestamp} {...log} />
      ))}
    </Container>
  );
};