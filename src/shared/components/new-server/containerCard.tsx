import * as React from "react";
import { ContainerForm } from "./containerForm";
import styled from "styled-components";
import color from "@/shared/styles/color";

export interface ContainerCardProps {
  id: string; // 추가: id prop
  name: string;
  port: string;
  description: string;
  programmingLanguage: string;
  framework: string;
  database: string;
  messaging: string;
  buildTool: string;
  environmentVariables,
  onConfigure: (data: any) => void;
  onDelete: () => void;
}

const CardContainer = styled.div`
  background-color: ${color.NeutralColor800};
  padding: 2.6vh 2.6vw;
  border-radius: 0.26vw;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.04vh;
`;

const Title = styled.div`
  color: ${color.NeutralColor100};
  font-size: 1.14vw;
`;

const PortContainer = styled.div`
  color: ${color.NeutralColor100};
  font-size: 1.14vw;
`;

const ActionButton = styled.button`
  margin-left: 1.3vw;
  color: ${color.NeutralColor100};
  font-size: 1.14vw;
  cursor: pointer;
  background: none;
  border: none;
`;

const DeleteButton = styled(ActionButton)`
  color: ${color.Red};
`;

const Description = styled.div`
  color: ${color.NeutralColor300};
  font-size: 0.83vw;
  margin-bottom: 1.04vh;
`;

const TechnologyContainer = styled.div`
  display: flex;
  gap: 1.04vw;
  flex-wrap: wrap;
`;

const TechnologyTag = styled.div`
  padding: 0.65vh 0.78vw;
  background-color: ${color.NeutralColor800};
  color: ${color.NeutralColor100};
  font-size: 0.78vw;
  border-radius: 0.26vw;
  border: 0.1vw solid ${color.NeutralColor500};
`;

export const ContainerCard: React.FC<ContainerCardProps> = ({
  id, // 추가: id prop
  name,
  port,
  description,
  programmingLanguage,
  framework,
  database,
  messaging,
  buildTool,
  environmentVariables,
  onConfigure,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const initialValues = {
    id, // 추가: id 포함
    name,
    port,
    description,
    programmingLanguage,
    framework,
    database,
    messaging,
    buildTool,
    environmentVariables,
  };

  const technologies = [
    programmingLanguage,
    framework,
    database,
    messaging,
    buildTool,
  ].filter((tech) => tech);

  const handleSave = (data: any) => {
    onConfigure({
      name: data.name || name,
      port: data.port || port,
      description: data.description || description,
      programmingLanguage: data.technologies[0] || programmingLanguage,
      framework: data.technologies[1] || framework,
      database: data.technologies[2] || database,
      messaging: data.technologies[3] || messaging,
      buildTool: data.technologies[4] || buildTool,
      environmentVariables: data.environmentVariables || environmentVariables,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <ContainerForm
          initialValues={initialValues}
          onCancel={handleCancel}
          onSave={handleSave}
        />
      ) : (
        <CardContainer>
          <Header>
            <Title>{name}</Title>
            <PortContainer>
              <span>{port}</span>
              <ActionButton onClick={() => setIsEditing(true)}>Configure</ActionButton>
              <DeleteButton onClick={onDelete}>Delete</DeleteButton>
            </PortContainer>
          </Header>
          <Description>{description}</Description>
          <TechnologyContainer>
            {technologies.map((tech, index) => (
              <TechnologyTag key={index}>{tech}</TechnologyTag>
            ))}
          </TechnologyContainer>
        </CardContainer>
      )}
    </>
  );
};