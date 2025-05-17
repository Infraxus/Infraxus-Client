import * as React from "react";
import { ContainerForm } from "@/shared/components/new-server/containerForm";
import { ContainerList, Container } from "@/shared/components/new-server/containerList";
import { Dialog, DialogContent, DialogTitle } from "@/shared/components/new-server/dialog";
import styled from "styled-components";
import color from "@/shared/styles/color";

const ServerCreationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;
  min-height: 100vh;
  background-color: #081028;
  padding: 0 2.5vw;
`;

const Title = styled.h1`
  color: ${color.NeutralColor100};
  font-size: 2rem;  /* 28px */
  font-weight: 600;
  line-height: 9vh;  /* 72px */
  padding: 1vh 0;
`;

const ConfigContainer = styled.div`
  width: 91vw;
  background-color: #0B1739;
  padding: 4vh 2vw;
  border-radius: 1.04vw;  /* 10px */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4vh;  /* 30px */
`;

const HeaderTitle = styled.div`
  color: ${color.NeutralColor100};
  font-size: 1.5rem;  /* 16px */
  font-weight: 600;
`;

const AddButton = styled.button`
  width: 7.5vw;
  height: 5vh;
  background-color: ${color.PrimaryColor};
  color: ${color.NeutralColor100};
  border-radius: 0.75rem;  /* 8px */
  font-family: "Inter";
  font-size: 1rem;  /* 12px */
  padding: 0.75vh 0.5vw;  /* 14px 19px */
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b935e6;
  }
`;

const ContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const DialogStyledContent = styled(DialogContent)`
  background-color: #0B1739;
  border-color: #081028;
  color: ${color.NeutralColor100};
  max-width: 66.67vw;  /* 1000px */
`;

const DialogStyledTitle = styled(DialogTitle)`
  color: ${color.NeutralColor100};
  font-size: 1.67vw;  /* 16px */
  font-weight: 600;
  margin-bottom: 4vh;  /* 30px */
`;

export const NewServerContainer: React.FC = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [isConfigureDialogOpen, setIsConfigureDialogOpen] = React.useState(false);
  const [selectedContainer, setSelectedContainer] = React.useState<Container | null>(null);
  const [containers, setContainers] = React.useState<Container[]>([
    {
      id: "1",
      name: "container",
      port: "8080",
      description: "explain",
      technologies: ["Java", "Apache Kafka", "Gradle"],
    },
    {
      id: "2",
      name: "container2",
      port: "8081",
      description: "explain",
      technologies: ["Java", "PostgreSQL", "Make"],
    },
  ]);

  const handleSave = (data: any) => {
    const newContainer: Container = {
      id: Date.now().toString(),
      name: data.name || "New Container",
      port: data.port || "8000",
      description: data.description || "",
      technologies: data.technologies || [],
    };
    
    setContainers((prev) => [...prev, newContainer]);
    setShowForm(false);
  };

  const handleConfigureContainer = (id: string) => {
    const containerToEdit = containers.find((container) => container.id === id);
    if (containerToEdit) {
      setSelectedContainer(containerToEdit);
      setIsConfigureDialogOpen(true);
    }
  };

  const handleUpdateContainer = (data: any) => {
    if (!selectedContainer) return;
    
    setContainers((prevContainers) =>
      prevContainers.map((container) =>
        container.id === selectedContainer.id
          ? {
              ...container,
              name: data.name || container.name,
              port: data.port || container.port,
              description: data.description || container.description,
              technologies: data.technologies || container.technologies,
            }
          : container
      )
    );
    
    setIsConfigureDialogOpen(false);
    setSelectedContainer(null);
  };

  const handleDeleteContainer = (id: string) => {
    setContainers((prev) => prev.filter((container) => container.id !== id));
  };

  return (
    <ServerCreationContainer>
      <Title>마이크로서비스 아키텍처 서버 생성</Title>
      
      <ConfigContainer>
        <Header>
          <HeaderTitle>컨테이너 구성</HeaderTitle>
          {!showForm && (
            <AddButton onClick={() => setShowForm(true)}>
              Add Container
            </AddButton>
          )}
        </Header>

        <ContainerSection>
          {showForm && (
            <ContainerForm
              onCancel={() => setShowForm(false)}
              onSave={handleSave}
            />
          )}
          
          {containers.length > 0 && (
            <>
              <HeaderTitle>이미 생성된 컨테이너</HeaderTitle>
              <ContainerList
                containers={containers}
                onConfigureContainer={handleConfigureContainer}
                onDeleteContainer={handleDeleteContainer}
              />
            </>
          )}
        </ContainerSection>
      </ConfigContainer>

      <Dialog open={isConfigureDialogOpen} onOpenChange={setIsConfigureDialogOpen}>
        <DialogStyledContent>
          <DialogStyledTitle>컨테이너 구성 편집</DialogStyledTitle>
          {selectedContainer && (
            <ContainerForm
              initialValues={selectedContainer}
              onCancel={() => {
                setIsConfigureDialogOpen(false);
                setSelectedContainer(null);
              }}
              onSave={handleUpdateContainer}
            />
          )}
        </DialogStyledContent>
      </Dialog>
    </ServerCreationContainer>
  );
};
