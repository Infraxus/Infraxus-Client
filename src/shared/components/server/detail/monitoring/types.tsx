export interface MetricCardProps {
    title: string;
    value: string;
}
  
export interface ContainerStatusProps {
    name: string;
    status: 'Healthy' | 'Warning';
}
  
export interface AlertProps {
    message: string;
    timeAgo: string;
    severity: 'warning' | 'error';
}
  
export interface LogEntryProps {
    timestamp: string;
    service: string;
    message: string;
}
  
export interface ServiceCommunicationProps {
    from: string;
    to: string;
    avgResponse: string;
    status: {
      code: string;
      type: 'success' | 'error';
    };
}

export interface HeaderEntry {
    key: string;
    value: string;
}

export interface LogEntryProps {
    timestamp: string;
    service: string;
    message: string;
    content: string;
    header: HeaderEntry[];
    severity: 'INFO' | 'WARNING' | 'ERROR';
    env: string;
}
  
  