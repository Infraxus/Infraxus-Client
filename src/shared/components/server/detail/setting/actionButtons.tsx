import React from 'react';

export const ActionButtons: React.FC = () => {
  return (
    <div className="flex items-stretch gap-[15px] text-sm text-white font-normal text-center flex-wrap mr-[26px] mt-10 max-md:mr-2.5">
      <button
        onClick={() => console.log('Save Changes')}
        className="text-white rounded bg-[#CB3CFF] px-5 py-[11px] hover:bg-[#B935E6] transition-colors"
      >
        Save Changes
      </button>
      <button
        onClick={() => console.log('Start Deployment')}
        className="text-white rounded bg-[#0E43FB] px-5 py-[11px] hover:bg-[#0D3CE6] transition-colors"
      >
        Start Deployment
      </button>
      <button
        onClick={() => console.log('Rollback')}
        className="text-white rounded border border-[color:var(--Neutral-Color-800,#081028)] px-[21px] py-[11px] border-solid max-md:px-5 hover:bg-[#0B1739] transition-colors"
      >
        Rollback to Previous
      </button>
    </div>
  );
};
