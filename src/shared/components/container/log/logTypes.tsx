import styled from 'styled-components';

const Container = styled.div`
  width: 27.2vw;
  padding: 2vh 2vw;
  background-color: #0B1739;
  border-radius: 0.6vw;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const Title = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-weight: normal;
`;

const TypeItem = styled.div`
  width: 23vw;
  height: 5vh;
  font-size: 1.25rem;
  border-radius: 0.4vw;
  background-color: #0A1330;
  display: flex;
  padding: 0 2vw;
`;

const TypeName = styled.div`
  margin: auto 0;
  width: 11.25vw;
  color: #AEB9E1;
  font-weight: normal;
`;

const TypeCount = styled.div`
  margin: auto 0;
  width: 11.25vw;
  color: white;
  font-weight: normal;
  text-align: right;
`;

export interface LogType {
  name: string
  count: number
}

interface LogTypeProps {
  logTypes: LogType[]
}

export const LogTypes: React.FC<LogTypeProps> = ({
  logTypes
}) => {
  return (
    <Container>
      <Title>Log Types</Title>
      {logTypes.map((type, index) => (
        <TypeItem key={index}>
          <TypeName>{type.name}</TypeName>
          <TypeCount>{type.count}</TypeCount>
        </TypeItem>
      ))}
    </Container>
  );
}