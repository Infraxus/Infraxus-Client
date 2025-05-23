import React from 'react';

interface HeaderItem {
  key: string;
  value: string;
}

interface RequestHeadersProps {
  headers: HeaderItem[];
}

export const RequestHeaders: React.FC<RequestHeadersProps> = ({ headers }) => {
  return (
    <>
      <div className="text-[rgba(174,185,225,1)] text-sm font-normal mt-6">
        Request Headers
      </div>
      <div className="rounded bg-[rgba(10,19,48,1)] self-stretch flex items-stretch gap-[40px_100px] text-sm font-normal whitespace-nowrap flex-wrap mt-2 px-[11px] py-3 max-md:max-w-full">
        <div className="flex flex-col text-[rgba(174,185,225,1)] flex-1">
          {headers.map((header) => (
            <div key={header.key} className="mt-2 first:mt-0">
              {header.key}
            </div>
          ))}
        </div>
        <div className="text-white flex-1">
          {headers.map((header) => (
            <div key={`${header.key}-value`} className="mt-2 first:mt-0 pl-[19px]">
              {header.value}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
