import React from "react";
import styled from "styled-components";

interface DeploymentStatusProps {
  environment: string;
  server: string;
}

// Styled Components
const Container = styled.div`
  background-color: rgba(11, 23, 57, 1);
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 91.25vw;
  font-weight: 400;
  padding: 2vh 2vw;
  border-radius: 1vw;
`;

const Title = styled.div`
  color: white;
  font-size: 1.5rem;
`;

const InfoBox = styled.div`
  background-color: rgba(8, 16, 40, 1);
  display: flex;
  flex-wrap: wrap;
  gap: 30vw;
  padding: 1.5vh 1.5vw;
  border-radius: 1vw;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  color: rgba(174, 185, 225, 1);
  font-size: 1.25rem;
`;

const Value = styled.div`
  color: white;
  font-size: 1.25rem;
`;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6vw;
  color: white;
  font-size: 1vw;
`;

export const DeploymentStatus: React.FC<DeploymentStatusProps> = ({
  environment,
  server,
}) => {
  return (
    <Container>
      <Title>Deployment Status</Title>
      <InfoBox>
        <InfoItem>
          <Label>Environment</Label>
          <Value>{environment}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Server</Label>
          <Value>{server}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Status</Label>
          <StatusWrapper>
            <div>Deployed</div>
          </StatusWrapper>
        </InfoItem>
      </InfoBox>
    </Container>
  );
};
