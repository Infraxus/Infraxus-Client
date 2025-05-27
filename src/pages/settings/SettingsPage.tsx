import React from 'react';
import { styled } from 'styled-components';
import color from '@/shared/styles/color.ts';
import { Sidebar } from '@/shared/components/sidebar/sidebar';
import SettingsSection from './components/SettingsSection';
import SettingsItem from './components/SettingsItem';
import SettingsDetail from './components/SettingsDetail';

const PageContainer = styled.div`
    display: flex;
    background: ${color.NeutralColor800};
`;

const MainContainer = styled.div`
    padding: 2.5vh 2.25vw;
    width: 80vw;
    min-height: 100vh;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 2vh;
`;

const PageTitle = styled.p`
    color: ${color.NeutralColor100};
    font-family: "Inter";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.25rem;
`;

const SettingsPage: React.FC = () => {
  const [networkSettingsOn, setNetworkSettingsOn] = React.useState(true);
  const [securitySettingsOn, setSecuritySettingsOn] = React.useState(true);
  const [resourceManagementOn, setResourceManagementOn] = React.useState(false);
  const [jenkinsPipelineOn, setJenkinsPipelineOn] = React.useState(true);
  const [sonarQubeAnalysisOn, setSonarQubeAnalysisOn] = React.useState(false);
  const [dockerConfigurationOn, setDockerConfigurationOn] = React.useState(false);
  const [kubernetesSetupOn, setKubernetesSetupOn] = React.useState(false);
  const [helmKustomizeOn, setHelmKustomizeOn] = React.useState(false);
  const [deploymentStrategyOn, setDeploymentStrategyOn] = React.useState(true);
  const [abTestingOn, setAbTestingOn] = React.useState(true);
  const [monitoringSetupOn, setMonitoringSetupOn] = React.useState(false);
  const [lokiSetupOn, setLokiSetupOn] = React.useState(false);
  const [serviceIntegrationOn, setServiceIntegrationOn] = React.useState(true);
  const [notificationRulesOn, setNotificationRulesOn] = React.useState(true);

  return (
    <PageContainer>
      <Sidebar />
      <MainContainer>
        <PageTitle>설정</PageTitle>

        <SettingsSection title="Platform Settings">
          <SettingsItem
            title="Network Settings"
            description="Port range, subnet, network policy, service discovery ingress configuration"
            isOn={networkSettingsOn}
            handleToggle={() => setNetworkSettingsOn(!networkSettingsOn)}
          >
             <SettingsDetail settingsType="Network Settings" />
          </SettingsItem>
          <SettingsItem
            title="Security Settings"
            description="Server management, authentication, authorization policies"
            isOn={securitySettingsOn}
            handleToggle={() => setSecuritySettingsOn(!securitySettingsOn)}
          >
             <SettingsDetail settingsType="Security Settings" />
          </SettingsItem>
          <SettingsItem
            title="Resource Management"
            description="Resource limits, node pools, pod priority and scaling"
            isOn={resourceManagementOn}
            handleToggle={() => setResourceManagementOn(!resourceManagementOn)}
          >
             <SettingsDetail settingsType="Resource Management" />
          </SettingsItem>
        </SettingsSection>

        <SettingsSection title="CI/CD Pipelines">
           <SettingsItem
             title="Jenkins Pipeline"
             description="Build trigger, cache settings, artifact management"
             isOn={jenkinsPipelineOn}
             handleToggle={() => setJenkinsPipelineOn(!jenkinsPipelineOn)}
           >
              <SettingsDetail settingsType="Jenkins Pipeline" />
           </SettingsItem>
           <SettingsItem
             title="SonarQube Analysis"
             description="Code quality gates, security scans, credible ratio"
             isOn={sonarQubeAnalysisOn}
             handleToggle={() => setSonarQubeAnalysisOn(!sonarQubeAnalysisOn)}
           >
              <SettingsDetail settingsType="SonarQube Analysis" />
           </SettingsItem>
        </SettingsSection>

        <SettingsSection title="Containerization & Orchestration">
           <SettingsItem
             title="Docker Configuration"
             description="Image build, optimization, security scanning"
             isOn={dockerConfigurationOn}
             handleToggle={() => setDockerConfigurationOn(!dockerConfigurationOn)}
           >
              <SettingsDetail settingsType="Docker Configuration" />
           </SettingsItem>
           <SettingsItem
             title="Kubernetes Setup"
             description="Namespaces management, resource limits, logging"
             isOn={kubernetesSetupOn}
             handleToggle={() => setKubernetesSetupOn(!kubernetesSetupOn)}
           >
              <SettingsDetail settingsType="Kubernetes Setup" />
           </SettingsItem>
           <SettingsItem
             title="Helm/Kustomize"
             description="Chart management, templates, deployment strategy"
             isOn={helmKustomizeOn}
             handleToggle={() => setHelmKustomizeOn(!helmKustomizeOn)}
           >
              <SettingsDetail settingsType="Helm/Kustomize" />
           </SettingsItem>
        </SettingsSection>

        <SettingsSection title="Zero-downtime Deployment">
          <SettingsItem
            title="Deployment Strategy"
            description="Rolling update, blue green, canaly deployments"
            isOn={deploymentStrategyOn}
            handleToggle={() => setDeploymentStrategyOn(!deploymentStrategyOn)}
          >
             <SettingsDetail settingsType="Deployment Strategy" />
          </SettingsItem>
          <SettingsItem
            title="A/B Testing"
            description="Traffic splitting, feature flags, monitoring"
            isOn={abTestingOn}
            handleToggle={() => setAbTestingOn(!abTestingOn)}
          >
             <SettingsDetail settingsType="A/B Testing" />
          </SettingsItem>
        </SettingsSection>

         <SettingsSection title="Monitoring Setup">
            <SettingsItem
              title="Prometheus/Grafana"
              description="Metrics collection, alerts, dashboards"
              isOn={monitoringSetupOn}
              handleToggle={() => setMonitoringSetupOn(!monitoringSetupOn)}
            >
               <SettingsDetail settingsType="Prometheus/Grafana" />
            </SettingsItem>
            <SettingsItem
              title="Loki Setup"
              description="Log management, filtering, retention policies"
              isOn={lokiSetupOn}
              handleToggle={() => setLokiSetupOn(!lokiSetupOn)}
            >
               <SettingsDetail settingsType="Loki Setup" />
            </SettingsItem>
         </SettingsSection>

          <SettingsSection title="External Integration">
             <SettingsItem
               title="Service Integration"
               description="Webhook configuration, status notifications"
               isOn={serviceIntegrationOn}
               handleToggle={() => setServiceIntegrationOn(!serviceIntegrationOn)}
             >
                <SettingsDetail settingsType="Service Integration" />
             </SettingsItem>
             <SettingsItem
               title="Notification Rules"
               description="Threshold alerts, error detection, automatic actions"
               isOn={notificationRulesOn}
               handleToggle={() => setNotificationRulesOn(!notificationRulesOn)}
             >
                <SettingsDetail settingsType="Notification Rules" />
             </SettingsItem>
          </SettingsSection>

      </MainContainer>
    </PageContainer>
  );
};

export default SettingsPage; 