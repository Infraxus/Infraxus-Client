import styled from 'styled-components';
import { LogViewer } from "./logViewer";
import { Statistics } from "./statistics";
import { useState } from 'react';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  width: 95.25vw;
  min-height: 100vh;
  background-color: #081028;
  padding: 3vh 0;
`;

interface Log {
  timeStamp: string;
  level: string;
  type: string;
  message: string;
}

const logs: Log[] = [
  {
    timeStamp: "2024-01-20 15:44:12",
    level: "ERROR",
    type: "application",
    message: "Database connection failed",
  },
  {
    timeStamp: "2024-01-20 15:43:55",
    level: "WARN",
    type: "system",
    message: "High memory usage detected",
  },
  {
    timeStamp: "2024-01-20 15:43:30",
    level: "INFO",
    type: "network",
    message: "New client connection established",
  },
  {
    timeStamp: "2024-01-20 15:42:12",
    level: "ERROR",
    type: "system",
    message: "Out of memory exception",
  },
  {
    timeStamp: "2024-01-20 15:41:55",
    level: "INFO",
    type: "application",
    message: "User authentication successful",
  },
  {
    timeStamp: "2024-01-20 15:41:30",
    level: "WARN",
    type: "network",
    message: "Network latency spike detected",
  },
  {
    timeStamp: "2024-01-20 15:41:30",
    level: "WARN",
    type: "network",
    message: "Network latency spike detected",
  },
  {
    timeStamp: "2024-01-20 15:41:30",
    level: "WARN",
    type: "network",
    message: "Network latency spike detected",
  },
  {
    timeStamp: "2024-01-20 15:41:30",
    level: "WARN",
    type: "network",
    message: "Network latency spike detected",
  },
  {
    timeStamp: "2024-01-20 15:41:30",
    level: "WARN",
    type: "network",
    message: "Network latency spike detected",
  },
  {
    timeStamp: "2024-01-20 15:41:30",
    level: "WARN",
    type: "network",
    message: "Network latency spike detected",
  },
  {
    timeStamp: "2024-01-20 15:41:30",
    level: "WARN",
    type: "network",
    message: "Network latency spike detected",
  },
  {
    timeStamp: "2024-01-20 15:41:30",
    level: "WARN",
    type: "network",
    message: "Network latency spike detected",
  },
];

const frequencies = [
  { message: "Database connection failed", count: 23 },
  { message: "High memory usage detected", count: 15 },
  { message: "New client connection established", count: 45 },
  { message: "Out of memory exception", count: 8 },
  { message: "User authentication successful", count: 67 },
  { message: "Network latency spike detected", count: 12 },
];

const logTypes = [
  { name: "Application Logs", count: 2 },
  { name: "System Logs", count: 2 },
  { name: "Network Logs", count: 2 },
];

const logLevels = [
  { name: "INFO", count: 2 },
  { name: "WARN", count: 2 },
  { name: "ERROR", count: 2 },
];

export const ContainerLog : React.FC = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTime, setSelectedTime] = useState('recent');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  
  return (
    <DashboardContainer>
        <LogViewer 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm}
          selectedTime={selectedTime}
          onTimeChange={setSelectedTime}
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          logs={logs}
        />
        <Statistics 
          frequencies={frequencies} 
          logTypes={logTypes} 
          logLevels={logLevels}
        />
    </DashboardContainer>
  );
}
