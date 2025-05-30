import styled from 'styled-components';

const Container = styled.div`
  width: 27.2vw;
  display: flex;
  flex-direction: column;
  gap: 2vh;
  background-color: #0B1739;
  border-radius: 0.6vw;
  padding: 2vh 2vw;
`;

const Title = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-weight: normal;
`;

const LevelItem = styled.div`
  width: 22.75vw;
  height: 5vh;
  border-radius: 0.4vw;
  background-color: #0A1330;
  display: flex;
  padding: 0 2vw;
  font-size: 1.25rem;
`;

const LevelName = styled.div`
  margin: auto 0;
  width: 11.25vw;
  color: #AEB9E1;
  font-weight: normal;
`;

const LevelCount = styled.div`
  margin: auto 0;
  width: 11.25vw;
  color: white;
  font-weight: normal;
  text-align: right;
`;

export interface LogLevel {
  name: string
  count: number
}

interface LogLevelProps {
  logLevels: LogLevel[]
}

export const LogLevels : React.FC<LogLevelProps> = ({
  logLevels
}) => {
  return (
    <Container>
      <Title>Log Levels</Title>
      {logLevels.map((level, index) => (
        <LevelItem key={index}>
          <LevelName>{level.name}</LevelName>
          <LevelCount>{level.count}</LevelCount>
        </LevelItem>
      ))}
    </Container>
  );
}
