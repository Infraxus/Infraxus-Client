import React from 'react';

export const ContainerStrategy: React.FC = () => {
  return (
    <div className="mt-[30px]">
      <div className="flex w-full max-w-[984px] items-stretch gap-5 text-sm flex-wrap justify-between max-md:max-w-full">
        <div className="flex flex-col items-stretch">
          <label className="text-[#D1DBF9] font-bold">
            Container Replacement Strategy
          </label>
          <div className="text-[#7E89AC] font-normal mt-[15px]">
            Replace N containers at a time
          </div>
          <input
            type="number"
            className="rounded border border-[color:var(--Neutral-Color-300,#D1DBF9)] w-[645px] h-[43px] bg-[#0B1739] border-solid mt-2 px-3"
            placeholder="Enter number of containers"
          />
        </div>
        <div className="flex flex-col items-stretch">
          <label className="text-[#7E89AC] font-normal">
            Waiting time between replacements (seconds)
          </label>
          <input
            type="number"
            className="rounded border border-[color:var(--Neutral-Color-300,#D1DBF9)] w-[645px] h-[43px] bg-[#0B1739] border-solid mt-2 px-3"
            placeholder="Enter waiting time"
          />
        </div>
      </div>
    </div>
  );
};
