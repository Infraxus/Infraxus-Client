import React, { useState } from 'react';
import { PolicyTypeSelector } from './policyTypeSelector';
import { ContainerStrategy } from './containerStrategy';
import { HealthCheckSelector } from './healthCheckSelector';
import { AutomaticRollback } from './automaticRollback';
import { ActionButtons } from './actionButtons';

export const ServerDeploymentSetting: React.FC = () => {
  const [selectedPolicy, setSelectedPolicy] = useState('rolling');
  const [selectedHealthCheck, setSelectedHealthCheck] = useState('http');
  const [automaticRollback, setAutomaticRollback] = useState(false);

  return (
    <main className="overflow-hidden bg-[#081028] pt-[30px] pb-[339px] px-[30px] max-md:pb-[100px] max-md:px-5">
        <section className="flex w-full flex-col items-stretch bg-[#0B1739] mt-[31px] py-[30px] rounded-lg max-md:max-w-full">
            <div className="flex w-full flex-col px-[30px] max-md:max-w-full max-md:px-5">
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
            </div>
            <ActionButtons />
        </section>
    </main>
  );
};