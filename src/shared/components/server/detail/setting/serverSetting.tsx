import React, { useState } from 'react';
import styled from 'styled-components';
import { PolicyTypeSelector } from './policyTypeSelector';
import { ContainerStrategy } from './containerStrategy';
import { HealthCheckSelector } from './healthCheckSelector';
import { AutomaticRollback } from './automaticRollback';
import { ActionButtons } from './actionButtons';

const Main = styled.main`
  overflow: hidden;
  background-color: #081028;
  margin: 3vh 0;
  width: 96vw;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  background-color: #0b1739;
  padding: 4vh 2.5vw;
  border-radius: 1.2vh;
  gap: 5vh;
`;

export const ServerDeploymentSetting: React.FC = () => {
  const [selectedPolicy, setSelectedPolicy] = useState('rolling');
  const [selectedHealthCheck, setSelectedHealthCheck] = useState('http');
  const [automaticRollback, setAutomaticRollback] = useState(false);

  return (
    <Main>
      <Section>
          <PolicyTypeSelector
            selectedPolicy={selectedPolicy}
            onPolicyChange={setSelectedPolicy}
          />
          <ContainerStrategy />
          <HealthCheckSelector
            selectedMethod={selectedHealthCheck}
            onMethodChange={setSelectedHealthCheck}
          />
          <AutomaticRollback
            enabled={automaticRollback}
            onToggle={() => setAutomaticRollback(!automaticRollback)}
          />
          <ActionButtons />
      </Section>
    </Main>
  );
};
