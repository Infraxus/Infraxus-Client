import React, { useState } from 'react';
import { LogDetails } from './logDetails';
import { LogContent } from './logContent';
import { RequestHeaders } from './requestHeaders';
import { MetaInformation } from './metaInfo';

export const LogPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const headers = [
    { key: 'X-Request-ID', value: 'req_9f8e7d6c' },
    { key: 'User-Agent', value: 'Mozilla/5.0' },
    { key: 'Accept', value: 'text/html' },
  ];

  if (!isVisible) return null;

  return (
    <section className="overflow-hidden bg-[#081028]">
      <div className="bg-[rgba(217,217,217,0.1)] flex w-full flex-col items-center justify-center px-20 py-[269px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
        <article className="bg-[rgba(11,23,57,1)] shadow-[0px_4px_24px_rgba(0,0,0,0.2)] flex mb-[-54px] w-[600px] max-w-full flex-col p-6 rounded-lg max-md:mb-2.5 max-md:px-5">
          <LogDetails
            timestamp="2024-01-20 15:44:12"
            onClose={() => setIsVisible(false)}
          />
          
          <LogContent
            title="High latency detected"
            content="Request processing time exceeded threshold: 2500ms"
          />

          <div className="text-[rgba(174,185,225,1)] text-sm font-normal mt-6">
            Stack Trace
          </div>
          <div className="rounded bg-[rgba(10,19,48,1)] self-stretch text-sm text-white font-normal leading-[21px] mt-2 p-3 max-md:max-w-full max-md:pr-5">
            Warning: Request processing timeout at PerformanceMonitor.check
            (/src/monitoring/performance.js:67) at WebServer.processRequest
            (/src/web/server.js:156)
          </div>

          <RequestHeaders headers={headers} />
          
          <MetaInformation
            severity="WARNING"
            environment="production"
          />
        </article>
      </div>
    </section>
  );
};
