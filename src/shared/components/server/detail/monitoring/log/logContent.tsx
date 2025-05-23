import React from 'react';

interface LogContentProps {
  title: string;
  content: string;
}

export const LogContent: React.FC<LogContentProps> = ({ title, content }) => {
  return (
    <>
      <h3 className="text-white text-base font-medium mt-4">{title}</h3>
      <div className="text-[rgba(174,185,225,1)] text-sm font-normal mt-2">
        Log Content
      </div>
      <div className="rounded bg-[rgba(10,19,48,1)] self-stretch text-sm text-white font-normal mt-2 p-3 max-md:max-w-full max-md:pr-5">
        {content}
      </div>
    </>
  );
};
