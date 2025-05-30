import styled from 'styled-components';
import { LogType, LogTypes } from "./logTypes";
import { LogLevel, LogLevels } from "./logLevels";
import { Frequency, FrequencyAnalysis } from "./frequencyAnalysis";

const StatisticsContainer = styled.div`
  width: 100%;
  max-width: 96.1vw;
  display: flex;
  gap: 1.3vw;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3.5vw;
  }
`;

interface StatisticsProps {
  frequencies: Frequency[]
  logTypes: LogType[]
  logLevels: LogLevel[]
}

export const Statistics: React.FC<StatisticsProps> = ({
  frequencies,
  logTypes,
  logLevels
}) => {
  return (
    <StatisticsContainer>
      <LogTypes logTypes={logTypes} />
      <LogLevels logLevels={logLevels} />
      <FrequencyAnalysis frequencies={frequencies} />
    </StatisticsContainer>
  );
}
