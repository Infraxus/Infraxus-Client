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
  programmingLanguage: string;
  framework: string;
  database: string;
  messaging: string;
  buildTool: string;
  environmentVariables: string;
}

export interface ContainerListProps {
  containers: Container[];
  onConfigureContainer: (data: any) => void;
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
          id={container.id} // 추가: id 전달
          name={container.name}
          port={container.port}
          description={container.description}
          programmingLanguage={container.programmingLanguage}
          framework={container.framework}
          database={container.database}
          messaging={container.messaging}
          buildTool={container.buildTool}
          environmentVariables={container.environmentVariables}
          onConfigure={(data) => onConfigureContainer({ id: container.id, ...data })}
          onDelete={() => onDeleteContainer(container.id)}
        />
      ))}
    </ListContainer>
  );
};