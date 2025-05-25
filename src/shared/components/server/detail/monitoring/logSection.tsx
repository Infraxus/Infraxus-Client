import React, { useState } from 'react';
import styled from 'styled-components';
import { LogEntryProps } from './types';
import { LogPopup } from './log/logPopup';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 65vw;
  background-color: #0b1739;
  padding: 3vh 2vw;
  border-radius: 1vw;
`;

const Heading = styled.h3`
  color: white;
  font-size: 1.75rem;
  font-weight: 600;
`;

const SearchInput = styled.input`
  color: #7e89ac;
  background-color: #081028;
  padding: 1.5vh 1.25vw;
  font-size: 1rem;
  border: 1px solid #081028;
  border-radius: 0.8vw;
  outline: none;

  &:focus {
    border-color: #cb3cff;
  }
`;

const LogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const LogTitle = styled.div`
  color: #d1dbf9;
  font-size: 1.2vw;
`;

const LogEntryWrapper = styled.div`
  border-radius: 0.8vw;
  display: flex;
  width: 65vw;
  background-color: #081028;
  padding: 2vh 0;
  font-size: 1.25rem;
  cursor: pointer;
`;

const Service = styled.div`
  color: white;
  width: 10%;
  text-align: center;
`;

const Message = styled.div`
  color: white;
  width: 60%;
`;

const Timestamp = styled.div`
  color: #d1dbf9;
  width: 40%;
  padding: 0 2vw;
  text-align: right;
`;

const LogEntry: React.FC<
  LogEntryProps & { onClick: () => void }
> = ({ timestamp, service, message, onClick }) => (
  <LogEntryWrapper onClick={onClick}>
    <Service>{service}</Service>
    <Message>{message}</Message>
    <Timestamp>{timestamp}</Timestamp>
  </LogEntryWrapper>
);

export const LogSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLog, setSelectedLog] = useState<LogEntryProps | null>(null);

  const logs: LogEntryProps[] = [
    {
      timestamp: '2024-01-20 15:45:23',
      service: 'api',
      message: 'Connection timeout',
      content: 'Failed to connect to upstream service after 30s timeout',
      header: [
        { key: 'X-Request-ID', value: 'req_abc123' },
        { key: 'User-Agent', value: 'Mozilla/5.0' },
        { key: 'Accept', value: 'application/json' },
      ],
      severity: 'ERROR',
      env: 'production',
    },
    {
      timestamp: '2024-01-20 15:44:12',
      service: 'web',
      message: 'High latency detected',
      content: 'Request processing time exceeded threshold: 2500ms',
      header: [
        { key: 'X-Request-ID', value: 'req_9f8e7d6c' },
        { key: 'User-Agent', value: 'Mozilla/5.0' },
        { key: 'Accept', value: 'text/html' },
      ],
      severity: 'WARNING',
      env: 'production',
    },
  ];
  

  const filteredLogs = logs.filter((log) =>
    log.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Container>
        <Heading>Log Search</Heading>
        <SearchInput
          type="text"
          placeholder="Search logs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <LogContainer>
          <LogTitle>Recent Logs</LogTitle>
          {filteredLogs.map((log) => (
            <LogEntry
              key={log.timestamp}
              {...log}
              onClick={() => setSelectedLog(log)}
            />
          ))}
        </LogContainer>
      </Container>

      {selectedLog && (
        <LogPopup data={selectedLog} onClose={() => setSelectedLog(null)} />
      )}
    </>
  );
};
