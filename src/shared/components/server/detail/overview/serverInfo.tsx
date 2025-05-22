import React from 'react';
import styled from 'styled-components';

interface ServerInfoCardProps {
  title: string;
  value: string;
}

const CardContainer = styled.div`
  width: 27.5vw;
  background: #0B1739;
  padding: 2.3vh 1.1vw;
  border-radius: 0.5vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  color: #AEB9E1;
  font-size: 1.1vw;
  line-height: 2.1vh;
  margin-bottom: 1.5vh;

  @media (max-width: 768px) {
    font-size: 1.3vw;
  }
`;

const Value = styled.div`
  color: white;
  font-size: 1.2vw;
  line-height: 2.4vh;

  @media (max-width: 768px) {
    font-size: 1.4vw;
  }
`;  

const FlexContainer = styled.div`
  display: flex;
  gap: 2.5vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ServerInfoCard: React.FC<ServerInfoCardProps> = ({ title, value }) => (
  <CardContainer>
    <Title>{title}</Title>
    <Value>{value}</Value>
  </CardContainer>
);

interface ServerInfoProps {
    cards: ServerInfoCardProps[];
  }
  
  export const ServerInfo: React.FC<ServerInfoProps> = ({ cards }) => {
    return (
      <FlexContainer>
        {cards.map((card, index) => (
          <ServerInfoCard key={index} title={card.title} value={card.value} />
        ))}
      </FlexContainer>
    );
  };