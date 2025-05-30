import styled from 'styled-components';

const Container = styled.div`
  width: 27.2vw;
  min-height: 50vh;
  max-height: 50vh;
  overflow-y: auto;
  background-color: #0B1739;
  border-radius: 0.6vw;
  display: flex;
  flex-direction: column;
  gap: 2vh 2vw;
  padding: 2vh 2vw;
`;

const Title = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-weight: normal;
`;

const FrequencyItem = styled.div`
  width: 22.75vw;
  height: 5vh;
  font-size: 1.25rem;
  background-color: #0A1330;
  border-radius: 0.4vw;
  display: flex;
  padding: 0 2vw;
`;

const Message = styled.div`
  margin: auto 0;
  width: 20vw;
  color: #AEB9E1;
  font-weight: normal;
`;

const Count = styled.div`
  margin: auto 0;
  color: white;
  font-weight: normal;
`;

export interface Frequency {
  message: string
  count: number
}

interface FrequenciesProps {
  frequencies: Frequency[]
}

export const FrequencyAnalysis: React.FC<FrequenciesProps> = ({
  frequencies
}) => {
  return (
    <Container>
      <Title>Frequency Analysis</Title>
      {frequencies.map((item, index) => (
        <FrequencyItem key={index}>
          <Message>{item.message}</Message>
          <Count>{item.count}</Count>
        </FrequencyItem>
      ))}
    </Container>
  );
}
