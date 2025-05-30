import styled from 'styled-components';
import { LogItem } from "./logItem";

const ListContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  max-height: 50vh;
  overflow-y: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 2vh;
  background-color: #0B1739;
  padding: 1.9vw;
  border-radius: 0.6vw;
`;

interface Log {
  timeStamp: string;
  level: string;
  type: string;
  message: string;
}

interface LogListProps {
  logs: Log[]
}

export const LogList : React.FC<LogListProps> = ({
  logs
}) => {
  return (
    <ListContainer>
      {logs.map((log, index) => (
        <LogItem key={index} {...log} />
      ))}
    </ListContainer>
  );
}
