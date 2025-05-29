import React from 'react';
import styled from 'styled-components';
import type { ContainerEvent } from './types';

interface ContainerEventsProps {
  events: ContainerEvent[];
}

const Wrapper = styled.div`
  background-color: rgba(11, 23, 57, 1);
  width: 90.25vw;
  padding: 3vh 2.5vw;
  border-radius: 1vw;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5vw;
  color: white;
  font-weight: 400;
`;

const Title = styled.div`
  font-size: 1.25rem;
  align-self: center;
`;

const EventBox = styled.div`
  background-color: rgba(8, 16, 40, 1);
  border-radius: 0.8vw;
  padding: 2vh 1.5vw;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const CompactLog = styled.div`
  width: 100%;
  color: rgba(174, 185, 225, 1);
  font-size: 1vw;
  font-weight: 400;
  display: flex;
`;

const TimestampItem = styled.div`
  width: 25%;
`;

const DescriptionItem = styled.div`
  width: 75%;
`;

export const ContainerEvents: React.FC<ContainerEventsProps> = ({
  events,
}) => {
  return (
    <Wrapper>
      <Header>
        <Title>Event History</Title>
      </Header>
      <EventBox>
        <Row>
            {events.map((event, index) => (
                <CompactLog>
                    <TimestampItem key={index}>
                        {event.timestamp}
                    </TimestampItem>
                    <DescriptionItem key={index}>
                        {event.description}
                    </DescriptionItem>
                </CompactLog>
            ))}
        </Row>
      </EventBox>
    </Wrapper>
  );
};
