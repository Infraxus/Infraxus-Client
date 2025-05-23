import React from 'react';

interface AutomaticRollbackProps {
  enabled: boolean;
  onToggle: () => void;
}

export const AutomaticRollback: React.FC<AutomaticRollbackProps> = ({
  enabled,
  onToggle
}) => {
  return (
    <div className="mt-[30px]">
      <h3 className="text-[#D1DBF9] text-sm font-bold">Automatic Rollback</h3>
      <button
        onClick={onToggle}
        className="flex items-stretch gap-2.5 text-sm text-white font-normal mt-[15px]"
      >
        <img src="https://cdn.builder.io/api/v1/image/assets/c8df5d00d5254ba7af7ef0a63b65be18/22e392a53824f87844e962fe389a5ffb9614d218?placeholderIfAbsent=true" className="aspect-[1] object-contain w-5 shrink-0" alt="Toggle icon" />
        <span className="text-white">
          Enable automatic rollback on deployment failure
        </span>
      </button>
    </div>
  );
};
