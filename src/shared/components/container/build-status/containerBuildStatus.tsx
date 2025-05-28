import { useState } from 'react';
import styled from "styled-components";
import { BuildMetrics } from "./buildMetrics";
import { BuildHistory } from "./buildHistory";
import { ContainerEnvironment } from "./containerEnvironment";
import { BuildCache } from "./buildCache";
import { TriggerConfiguration } from "./triggerConfiguration";
import { DeploymentStatus } from "./deploymentStatus";
import { EnvironmentVariable } from "./types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3vh 0;
  gap: 3vh;
  justify-content: center;
  align-items: stretch;
  overflow: hidden;
  background-color: #081028;
`;

export const ContainerBuildStatus: React.FC = () => {

  const [envVariables, setEnvVariables] = useState<EnvironmentVariable[]>([
    { key: 'NODE_ENV', value: 'production' },
    { key: 'API_KEY', value: '********' },
  ]);

  const handleClearCache = () => {
    console.log("Clearing cache...");
  };

  const handleAddVariable = (newVariable: EnvironmentVariable) => {
    setEnvVariables((prev) => [...prev, newVariable]);
  };

  const handleRemoveVariable = (target: EnvironmentVariable) => {
    setEnvVariables((prev) =>
      prev.filter((v) => !(v.key === target.key && v.value === target.value))
    );
  };

  return (
    <Container>
      <BuildMetrics
        status="success"
        buildTime="15m 30s"
        progress={85}
      />

      <BuildHistory
        startTime="2024-01-22 15:30:22"
        endTime="2024-01-22 15:45:52"
        duration="15m 30s"
      />

      <ContainerEnvironment
        variables={envVariables}
        onAddVariable={handleAddVariable}
        onRemoveVariable={handleRemoveVariable}
      />

      <BuildCache
        enabled={true}
        size="1.2GB"
        onClearCache={handleClearCache}
      />

      <TriggerConfiguration
        githubWebhook={{ enabled: true, branch: "main" }}
        buildSchedule={{ time: "00:00 UTC" }}
        jenkinsPipeline={{ connected: true, name: "pipeline-prod-01" }}
        autoDeploy={{ enabled: true, environment: "production" }}
      />

      <DeploymentStatus
        environment="Production"
        server="prod-app-01.example.com"
      />
    </Container>
  );
};

export default ContainerBuildStatus;
