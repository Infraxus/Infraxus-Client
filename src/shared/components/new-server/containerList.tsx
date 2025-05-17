import * as React from "react";
import { ContainerCard } from "./containerCard";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
`;

export interface Container {
  id: string;
  name: string;
  port: string;
  description: string;
  technologies: string[];
}

export interface ContainerListProps {
  containers: Container[];
  onConfigureContainer: (id: string) => void;
  onDeleteContainer: (id: string) => void;
}

export const ContainerList: React.FC<ContainerListProps> = ({
  containers,
  onConfigureContainer,
  onDeleteContainer,
}) => {
  return (
    <ListContainer>
      {containers.map((container) => (
        <ContainerCard
          key={container.id}
          name={container.name}
          port={container.port}
          description={container.description}
          technologies={container.technologies}
          onConfigure={() => onConfigureContainer(container.id)}
          onDelete={() => onDeleteContainer(container.id)}
        />
      ))}
    </ListContainer>
  );
};
