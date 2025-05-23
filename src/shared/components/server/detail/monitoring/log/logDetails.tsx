import React from 'react';

interface LogDetailsProps {
  timestamp: string;
  onClose: () => void;
}

export const LogDetails: React.FC<LogDetailsProps> = ({ timestamp, onClose }) => {
  return (
    <div className="self-stretch flex items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
      <div className="flex flex-col items-stretch my-auto">
        <h2 className="text-white text-lg font-semibold">Log Details</h2>
        <time className="text-[rgba(174,185,225,1)] text-sm font-normal mt-[21px]">
          {timestamp}
        </time>
      </div>
      <div className="flex flex-col items-stretch font-normal whitespace-nowrap">
        <button
          onClick={onClose}
          className="text-[rgba(174,185,225,1)] text-2xl text-center hover:text-white transition-colors"
          aria-label="Close log details"
        >
          ×
        </button>
        <div className="rounded bg-[rgba(10,19,48,1)] text-sm text-white mt-[17px] px-2 py-0.5">
          web
        </div>
      </div>
    </div>
  );
};
