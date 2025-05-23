import React from 'react';

const policyTypes = [
  { id: 'rolling', label: 'Rolling Update' },
  { id: 'bluegreen', label: 'Blue-Green' },
  { id: 'canary', label: 'Canary' },
  { id: 'manual', label: 'Manual Deployment' }
];

interface PolicyTypeSelectorProps {
  selectedPolicy: string;
  onPolicyChange: (policy: string) => void;
}

export const PolicyTypeSelector: React.FC<PolicyTypeSelectorProps> = ({
  selectedPolicy,
  onPolicyChange
}) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-[#D1DBF9] text-sm font-bold">Policy Type</h3>
      <div className="flex gap-3.5 text-sm flex-wrap mt-[15px]">
        {policyTypes.map((policy) => (
          <button
            key={policy.id}
            onClick={() => onPolicyChange(policy.id)}
            className={`text-white rounded font-normal text-center px-5 py-2.5 ${
              selectedPolicy === policy.id ? 'bg-[#0E43FB]' : 'bg-[#081028]'
            }`}
          >
            {policy.label}
          </button>
        ))}
      </div>
    </div>
  );
};