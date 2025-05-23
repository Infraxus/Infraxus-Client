import React from 'react';

const healthCheckMethods = [
  { id: 'http', label: 'HTTP Check' },
  { id: 'tcp', label: 'TCP Check' },
  { id: 'command', label: 'Command Check' }
];

interface HealthCheckSelectorProps {
  selectedMethod: string;
  onMethodChange: (method: string) => void;
}

export const HealthCheckSelector: React.FC<HealthCheckSelectorProps> = ({
  selectedMethod,
  onMethodChange
}) => {
  return (
    <div className="mt-[30px]">
      <h3 className="text-[#D1DBF9] text-sm font-bold">Health Check Method</h3>
      <div className="flex items-stretch gap-[15px] text-sm text-white font-normal text-center mt-[15px]">
        {healthCheckMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => onMethodChange(method.id)}
            className={`text-white rounded px-5 py-2.5 ${
              selectedMethod === method.id ? 'bg-[#0E43FB]' : 'bg-[#081028]'
            }`}
          >
            {method.label}
          </button>
        ))}
      </div>
    </div>
  );
};
