import React from "react";
import styled from "styled-components";

interface TriggerConfigurationProps {
  githubWebhook: {
    enabled: boolean;
    branch: string;
  };
  buildSchedule: {
    time: string;
  };
  jenkinsPipeline: {
    connected: boolean;
    name: string;
  };
  autoDeploy: {
    enabled: boolean;
    environment: string;
  };
}

// Styled components
const Container = styled.div`
  background-color: rgba(11, 23, 57, 1);
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 91.25vw;
  padding: 2vh 2vw;
  border-radius: 1vw;
  font-weight: 400;
`;

const Title = styled.div`
  color: white;
  font-size: 1.5rem;
`;

const Box = styled.div`
  background-color: rgba(8, 16, 40, 1);
  display: flex;
  flex-wrap: wrap;
  gap: 32.5vw;
  padding: 2vh 1.5vw;
  border-radius: 1vw;
  font-size: 1vw;
  color: rgba(174, 185, 225, 1);
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
`;

const Label = styled.div`
`;

const Value = styled.div`
  color: white;
  font-size: 1.2vw;
`;

export const TriggerConfiguration: React.FC<TriggerConfigurationProps> = ({
  githubWebhook,
  buildSchedule,
  jenkinsPipeline,
  autoDeploy,
}) => {
  return (
    <Container>
      <Title>Trigger Configuration</Title>
      <Box>
        <Section>
          <div>
            <div>GitHub Webhook</div>
            <Value>
              {githubWebhook.enabled
                ? `Enabled - ${githubWebhook.branch} branch`
                : "Disabled"}
            </Value>
          </div>
          
          <div>
            <Label>Build Schedule</Label>
            <Value>Daily at {buildSchedule.time}</Value>
          </div>
        </Section>
        <Section>
          <div>
            <div>Jenkins Pipeline</div>
            <Value>
              {jenkinsPipeline.connected
                ? `Connected - ${jenkinsPipeline.name}`
                : "Not connected"}
            </Value>
          </div>

          <div>
            <Label>Auto Deploy</Label>
            <Value>
              {autoDeploy.enabled
                ? `Enabled for ${autoDeploy.environment}`
                : "Disabled"}
            </Value>
          </div>
        </Section>
      </Box>
    </Container>
  );
};
