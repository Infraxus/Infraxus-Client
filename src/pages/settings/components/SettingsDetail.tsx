import React from 'react';
import { styled } from 'styled-components';
import color from '@/shared/styles/color.ts';
import { FormInput } from '@/shared/components/new-server/formInput'; // FormInput 컴포넌트 재활용
import { FormSelect } from '@/shared/components/new-server/select'; // FormSelect 컴포넌트 재활용

// 세부 설정 항목들의 컨테이너 스타일
const SettingsDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* 세부 설정 항목들 사이 간격 */
  padding: 0 20px; /* SettingsItem과 좌우 패딩 일치 */
`;

// 각 세부 설정 항목 라벨 스타일
const DetailItemLabel = styled.label`
  font-size: 0.9em;
  color: ${color.NeutralColor300};
  margin-bottom: 5px;
  display: block; /* 라벨 아래 입력 필드 오도록 */
`;

// 세부 설정 입력 필드 컨테이너 스타일 (필요하다면)
const DetailInputContainer = styled.div`
  /* 추가 스타일 */
`;

interface SettingsDetailProps {
  // 어떤 세부 설정을 나타내는지 식별하는 prop (예: type, category 등)
  settingsType: string;
}

const SettingsDetail: React.FC<SettingsDetailProps> = ({ settingsType }) => {
  // settingsType에 따라 다른 세부 설정 내용을 렌더링
  const renderDetailContent = () => {
    switch (settingsType) {
      case 'Network Settings':
        return (
          <>
            <DetailItemLabel>Port Range</DetailItemLabel>
            <FormInput type="text" placeholder="30000-32767" />

            <DetailItemLabel>Subnet CIDR</DetailItemLabel>
            <FormInput type="text" placeholder="10.0.0.0/16" />

            <DetailItemLabel>Service Discovery</DetailItemLabel>
             <FormSelect label="" value="" onValueChange={() => {}}>
                 {/* 옵션들 */}
                 {/* <FormSelect.Item value="CoreDNS">CoreDNS</FormSelect.Item> */}
                 {/* <FormSelect.Item value="Consul">Consul</FormSelect.Item> */}
                 <></>
             </FormSelect>

            <DetailItemLabel>Network Load Balancer</DetailItemLabel>
             <FormSelect label="" value="" onValueChange={() => {}}>
                 {/* 옵션들 */}
                 {/* <FormSelect.Item value="AWS ELB">AWS ELB</FormSelect.Item> */}
                 {/* <FormSelect.Item value="GCP Load Balancer">GCP Load Balancer</FormSelect.Item> */}
                 <></>
             </FormSelect>
          </>
        );
      case 'Security Settings':
        return (
           <>
             <DetailItemLabel>Secret Management</DetailItemLabel>
             <FormSelect label="" value="" onValueChange={() => {}}>
                 {/* 옵션들 */}
                 {/* <FormSelect.Item value="Kubernetes Secrets">Kubernetes Secrets</FormSelect.Item> */}
                 <></>
             </FormSelect>

             <DetailItemLabel>TLS Certificate</DetailItemLabel>
             <FormSelect label="" value="" onValueChange={() => {}}>
                 {/* 옵션들 */}
                 {/* <FormSelect.Item value="Lets Encrypt">Lets Encrypt</FormSelect.Item> */}
                 <></>
             </FormSelect>

             <DetailItemLabel>Authentication Method</DetailItemLabel>
             <FormSelect label="" value="" onValueChange={() => {}}>
                 {/* 옵션들 */}
                 {/* <FormSelect.Item value="OIDC">OIDC</FormSelect.Item> */}
                 <></>
             </FormSelect>
           </>
        );
       case 'Resource Management':
        return (
            <>
              <DetailItemLabel>CPU Limit (milli)</DetailItemLabel>
              <FormInput type="number" placeholder="4" />

              <DetailItemLabel>Memory Limit (Gi)</DetailItemLabel>
              <FormInput type="number" placeholder="8" />

              <DetailItemLabel>Storage Class</DetailItemLabel>
              <FormSelect label="" value="" onValueChange={() => {}}>
                  {/* 옵션들 */}
                  {/* <FormSelect.Item value="Standard">Standard</FormSelect.Item> */}
                  <></>
              </FormSelect>
            </>
        );
       case 'Jenkins Pipeline': // CI/CD Pipelines 섹션 아래
         return (
             <>
               <DetailItemLabel>Git Repository URL</DetailItemLabel>
               <FormInput type="text" placeholder="https://github.com/org/repo.git" />

               <DetailItemLabel>Build Trigger</DetailItemLabel>
               <FormSelect label="" value="" onValueChange={() => {}}>
                   {/* 옵션들 */}
                   {/* <FormSelect.Item value="On Push">On Push</FormSelect.Item> */}
                   <></>
               </FormSelect>

               <DetailItemLabel>Artifact Repository</DetailItemLabel>
               <FormSelect label="" value="" onValueChange={() => {}}>
                   {/* 옵션들 */}
                   {/* <FormSelect.Item value="JFrog Artifactory">JFrog Artifactory</FormSelect.Item> */}
                   <></>
               </FormSelect>
             </>
         );
       case 'SonarQube Analysis': // CI/CD Pipelines 섹션 아래
         return (
             <>
                <DetailItemLabel>Quality Gate</DetailItemLabel>
                <FormSelect label="" value="" onValueChange={() => {}}>
                   {/* 옵션들 */}
                   {/* <FormSelect.Item value="Default">Default</FormSelect.Item> */}
                   <></>
                </FormSelect>

                <DetailItemLabel>Coverage Threshold (%)</DetailItemLabel>
                <FormInput type="number" placeholder="80" />

                <DetailItemLabel>Security Scan Level</DetailItemLabel>
                 <FormSelect label="" value="" onValueChange={() => {}}>
                    {/* 옵션들 */}
                    {/* <FormSelect.Item value="High">High</FormSelect.Item> */}
                    <></>
                 </FormSelect>
             </>
         );
        case 'Deployment Strategy': // Zero-downtime Deployment 섹션 아래
         return (
             <>
               <DetailItemLabel>Strategy Type</DetailItemLabel>
                <FormSelect label="" value="" onValueChange={() => {}}>
                   {/* 옵션들 */}
                   {/* <FormSelect.Item value="Rolling Update">Rolling Update</FormSelect.Item> */}
                   <></>
                </FormSelect>

                <DetailItemLabel>Max Surge (%)</DetailItemLabel>
                <FormInput type="number" placeholder="25" />

                <DetailItemLabel>Max Unavailable (%)</DetailItemLabel>
                 <FormInput type="number" placeholder="25" />
             </>
         );
        case 'A/B Testing': // Zero-downtime Deployment 섹션 아래
         return (
            <>
              <DetailItemLabel>Traffic Split (%)</DetailItemLabel>
              <FormInput type="number" placeholder="50" />

              <DetailItemLabel>Feature Flags</DetailItemLabel>
               <FormSelect label="" value="" onValueChange={() => {}}>
                  {/* 옵션들 */}
                  {/* <FormSelect.Item value="LaunchDarkly">LaunchDarkly</FormSelect.Item> */}
                  <></>
               </FormSelect>
            </>
         );
       case 'Prometheus/Grafana': // Monitoring Setup 섹션 아래
        return (
            <>
              <DetailItemLabel>Metrics Collection, Alerts, Dashboards</DetailItemLabel>
              <FormInput type="text" placeholder="metrics-server, alertmanager, grafana" />
            </>
        );
       case 'Loki Setup': // Monitoring Setup 섹션 아래
        return (
           <>
             <DetailItemLabel>Log Management, Filtering, Retention Policies</DetailItemLabel>
             <FormInput type="text" placeholder="loki, promtail, litani" />
           </>
        );
        case 'Service Integration': // External Integration 섹션 아래
         return (
             <>
               <DetailItemLabel>Webhook Configuration, Status Notifications</DetailItemLabel>
               <FormInput type="text" placeholder="webhook URL" />
             </>
         );
        case 'Notification Rules': // External Integration 섹션 아래
         return (
            <>
              <DetailItemLabel>Threshold Alerts, Error Detection, Automatic Actions</DetailItemLabel>
              <FormInput type="text" placeholder="rule definitions" />
            </>
        );

      default:
        return null;
    }
  };

  return (
    <SettingsDetailContainer>
      {renderDetailContent()}
    </SettingsDetailContainer>
  );
};

export default SettingsDetail; 