import React from 'react';
import styled from 'styled-components';
import type { PortMapping } from './types';

interface ContainerPortsProps {
  ports: PortMapping[];
}

const Wrapper = styled.div`
  background-color: rgba(11, 23, 57, 1);
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 100%;
  padding: 3vh 2vw;
  border-radius: 1vw;
  color: white;
  font-weight: 400;
`;

const Title = styled.div`
  font-size: 1.25rem;
`;

const PortBox = styled.div`
  background-color: rgba(8, 16, 40, 1);
  border-radius: 0.8vw;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  padding: 2vh 2.5vw 3vh 1.5vw;
  font-size: 0.9vw;
  white-space: nowrap;
`;

export const ContainerPorts: React.FC<ContainerPortsProps> = ({ ports }) => {
  return (
    <Wrapper>
      <Title>Port Mappings</Title>
      <PortBox>
        {ports.map((port, index) => (
          <div key={index}>
            {`${port.host}:${port.container}`}
          </div>
        ))}
      </PortBox>
    </Wrapper>
  );
};
