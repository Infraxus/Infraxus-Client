import styled from 'styled-components';

const ItemContainer = styled.div`
  width: 86.5vw;
  height: 5vh;
  display: flex;
  gap: 5vw;
  align-items: center;
  padding: 2vh 2vw;
  border-radius: 0.4vw;
  background-color: #0A1330;
`;

const Timestamp = styled.div`
  color: #AEB9E1;
  font-size: 1vw;
  font-weight: normal;
  width: 10vw;
  height: 3vh;
`;

const Level = styled.div`
  font-size: 1vw;
  font-weight: normal;
  width: 5vw;
  height: 3vh;
`;

const Type = styled.div`
  color: #AEB9E1;
  font-size: 1vw;
  font-weight: normal;
  width: 5vw;
  height: 3vh;
`;

const Message = styled.div`
  color: white;
  font-size: 1vw;
  font-weight: normal;
  width: 50vw;
  height: 3vh;
`;

interface LogItemProps {
  timeStamp: string;
  level: string;
  type: string;
  message: string;
}

export function LogItem({ timeStamp, level, type, message }: LogItemProps) {
  return (
    <ItemContainer>
      <Timestamp>{timeStamp}</Timestamp>
      <Level>{level}</Level>
      <Type>{type}</Type>
      <Message>{message}</Message>
    </ItemContainer>
  );
}