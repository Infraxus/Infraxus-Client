export interface ContainerStats {
    containerId: string;
    image: string;
    status: string;
    startTime: string;
    uptime: string;
    network: string;
}
  
export interface ContainerMetadata {
    tags: string[];
    description: string;
}
  
export interface PortMapping {
    host: string;
    container: string;
}
  
export interface VolumeMapping {
    source: string;
    target: string;
}
  
export interface EnvironmentVariable {
    key: string;
    value: string;
}
  
export interface ContainerEvent {
    timestamp: string;
    description: string;
}