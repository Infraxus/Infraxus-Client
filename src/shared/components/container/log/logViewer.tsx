import styled from 'styled-components';
import { SearchBar } from "./searchBar";
import { LogList } from "./logList";

const ViewerContainer = styled.div`
  width: 100%;
  max-width: 96.1vw;
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;

interface LogProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedTime: string;
  onTimeChange: (status: string) => void;
  selectedLevel: string;
  onLevelChange: (status: string) => void;
  selectedType: string;
  onTypeChange: (status: string) => void;
  logs: Log[]

}

interface Log {
  timeStamp: string;
  level: string;
  type: string;
  message: string;
}

export const LogViewer: React.FC<LogProps> = ({
  searchTerm,
  onSearchChange,
  selectedTime,
  onTimeChange,
  selectedLevel,
  onLevelChange,
  selectedType,
  onTypeChange,
  logs
}) => {
  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || log.level === selectedLevel;
    const matchesType = selectedType === 'all' || log.type === selectedType;

    const now = new Date();
    const logTime = new Date(log.timeStamp);
    let withinTimeRange = true;

    if (selectedTime === '1') {
      withinTimeRange = now.getTime() - logTime.getTime() <= 1 * 60 * 60 * 1000;
    } else if (selectedTime === '2') {
      withinTimeRange = now.getTime() - logTime.getTime() <= 2 * 60 * 60 * 1000;
    } else if (selectedTime === '3') {
      withinTimeRange = now.getTime() - logTime.getTime() <= 3 * 60 * 60 * 1000;
    }

    return matchesSearch && matchesLevel && matchesType && withinTimeRange;
  });

  return (
    <ViewerContainer>
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          selectedTime={selectedTime}
          onTimeChange={onTimeChange}
          selectedLevel={selectedLevel}
          onLevelChange={onLevelChange}
          selectedType={selectedType}
          onTypeChange={onTypeChange}
        />
        <LogList logs={filteredLogs} />
    </ViewerContainer>
  );
}
