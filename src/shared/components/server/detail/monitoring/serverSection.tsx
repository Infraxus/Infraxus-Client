import React from 'react';
import { ContainerStatusProps, AlertProps } from './types';

const ContainerStatus: React.FC<{ containers: ContainerStatusProps[] }> = ({ containers }) => (
  <div className="flex w-full flex-col items-stretch text-base font-normal bg-[#0B1739] mx-auto px-[27px] py-6 rounded-lg max-md:max-w-full max-md:mt-5 max-md:px-5">
    <h3 className="text-white text-lg font-semibold">Container Status</h3>
    {containers.map(({ name, status }) => (
      <div
        key={name}
        className="rounded flex items-stretch gap-5 whitespace-nowrap flex-wrap justify-between bg-[#081028] mt-3 px-3.5 py-3 max-md:max-w-full"
      >
        <div className="text-white">{name}</div>
        <div className={status === 'Healthy' ? 'text-[#008000]' : 'text-[#CB3CFF]'}>
          {status}
        </div>
      </div>
    ))}
  </div>
);

const ActiveAlerts: React.FC<{ alerts: AlertProps[] }> = ({ alerts }) => (
  <div className="flex w-full flex-col items-stretch text-base font-normal bg-[#0B1739] mx-auto pt-6 pb-[84px] px-[27px] rounded-lg max-md:max-w-full max-md:mt-5 max-md:px-5">
    <h3 className="text-white text-lg font-semibold">Active Alerts</h3>
    {alerts.map(({ message, timeAgo, severity }) => (
      <div
        key={message}
        className="rounded flex w-full items-stretch gap-5 flex-wrap justify-between bg-[#081028] mt-3 px-3.5 py-3 max-md:max-w-full"
      >
        <div className="flex items-stretch gap-[9px] text-white">
          <div
            className={`flex w-[9px] shrink-0 h-2 ${
              severity === 'error' ? 'bg-[#CB3CFF]' : 'bg-[#FDB52A]'
            } my-auto rounded-[33554400px]`}
          />
          <div className="text-white basis-auto">{message}</div>
        </div>
        <div className="text-[#D1DBF9]">{timeAgo}</div>
      </div>
    ))}
  </div>
);

export const MonitoringSection: React.FC = () => {
  const containers = [
    { name: 'api-server-1', status: 'Healthy' as const },
    { name: 'web-server-1', status: 'Warning' as const },
    { name: 'db-server-1', status: 'Healthy' as const },
  ];

  const alerts = [
    {
      message: 'CPU Usage > 80%',
      timeAgo: '2m ago',
      severity: 'error' as const,
    },
    {
      message: 'Memory Usage > 70%',
      timeAgo: '5m ago',
      severity: 'warning' as const,
    },
  ];

  return (
    <div className="mt-5 max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <ContainerStatus containers={containers} />
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <ActiveAlerts alerts={alerts} />
        </div>
      </div>
    </div>
  );
};