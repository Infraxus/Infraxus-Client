import React from 'react';

interface MetaInformationProps {
  severity: string;
  environment: string;
}

export const MetaInformation: React.FC<MetaInformationProps> = ({
  severity,
  environment,
}) => {
  return (
    <div className="flex items-stretch gap-6 text-sm font-normal whitespace-nowrap mt-6">
      <div className="flex flex-col items-stretch">
        <div className="text-[rgba(174,185,225,1)]">Severity</div>
        <div className="text-white mt-1">{severity}</div>
      </div>
      <div className="flex flex-col items-stretch">
        <div className="text-[rgba(174,185,225,1)]">Environment</div>
        <div className="text-white mt-1">{environment}</div>
      </div>
    </div>
  );
};
