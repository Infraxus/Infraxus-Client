import * as React from "react";
import { ContainerForm } from "@/shared/components/new-server/containerForm";
import { ContainerList, Container } from "@/shared/components/new-server/containerList";
import { Dialog, DialogContent, DialogTitle } from "@/shared/components/new-server/dialog";
import styled from "styled-components";
import color from "@/shared/styles/color";
import { useParams, useSearchParams } from "react-router-dom";

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
  font-size: 2rem;
  font-weight: 600;
  line-height: 9vh;
  padding: 1vh 0;
`;

const ConfigContainer = styled.div`
  width: 91vw;
  background-color: #0B1739;
  padding: 4vh 2vw;
  border-radius: 1.04vw;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4vh;
`;

const HeaderTitle = styled.div`
  color: ${color.NeutralColor100};
  font-size: 1.5rem;
  font-weight: 600;
`;

const AddButton = styled.button`
  width: 7.5vw;
  height: 5vh;
  background-color: ${color.PrimaryColor};
  color: ${color.NeutralColor100};
  border-radius: 0.75rem;
  font-family: "Inter";
  font-size: 1rem;
  padding: 0.75vh 0.5vw;
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
  max-width: 66.67vw;
`;

const DialogStyledTitle = styled(DialogTitle)`
  color: ${color.NeutralColor100};
  font-size: 1.67vw;
  font-weight: 600;
  margin-bottom: 4vh;
`;

export const NewServerContainer: React.FC = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const architecture = searchParams.get("architecture");
  const [showForm, setShowForm] = React.useState(architecture === "monolithic");
  const [isConfigureDialogOpen, setIsConfigureDialogOpen] = React.useState(false);
  const [selectedContainer, setSelectedContainer] = React.useState<Container | null>(null);
  const [containers, setContainers] = React.useState<Container[]>([]);
  const [monolithicContainer, setMonolithicContainer] = React.useState<Container | null>(null);

  const handleSave = (data: any) => {
    const newContainer: Container = {
      id: Date.now().toString(),
      name: data.name || "New Container",
      port: data.port || "8000",
      description: data.description || "",
      programmingLanguage: data.technologies[0] || "",
      framework: data.technologies[1] || "",
      database: data.technologies[2] || "",
      messaging: data.technologies[3] || "",
      buildTool: data.technologies[4] || "",
      environmentVariables: data.environmentVariables || "",
    };

    if (architecture === "monolithic") {
      setMonolithicContainer(newContainer);
      setShowForm(false); // 저장 후 폼 숨김
    } else {
      setContainers((prev) => [...prev, newContainer]);
      setShowForm(false);
    }
  };

  const handleConfigureContainer = (data: any) => {
    if (architecture === "monolithic") {
      const updatedContainer: Container = {
        id: data.id || Date.now().toString(),
        name: data.name || monolithicContainer?.name || "New Container",
        port: data.port || monolithicContainer?.port || "8000",
        description: data.description || monolithicContainer?.description || "",
        programmingLanguage: data.programmingLanguage || monolithicContainer?.programmingLanguage || "",
        framework: data.framework || monolithicContainer?.framework || "",
        database: data.database || monolithicContainer?.database || "",
        messaging: data.messaging || monolithicContainer?.messaging || "",
        buildTool: data.buildTool || monolithicContainer?.buildTool || "",
        environmentVariables: data.environmentVariables || monolithicContainer?.environmentVariables || "",
      };
      setMonolithicContainer(updatedContainer);
    } else {
      const { id, ...updateData } = data;
      setContainers((prevContainers) =>
        prevContainers.map((container) =>
          container.id === id
            ? {
                ...container,
                name: updateData.name || container.name,
                port: updateData.port || container.port,
                description: updateData.description || container.description,
                programmingLanguage: updateData.programmingLanguage || container.programmingLanguage,
                framework: updateData.framework || container.framework,
                database: updateData.database || container.database,
                messaging: updateData.messaging || container.messaging,
                buildTool: updateData.buildTool || container.buildTool,
                environmentVariables: updateData.environmentVariables || container.environmentVariables,
              }
            : container
        )
      );
    }
  };

  const handleDeleteContainer = (id: string) => {
    setContainers((prev) => prev.filter((container) => container.id !== id));
  };

  return (
    <ServerCreationContainer>
      <Title>
        {architecture === "monolithic" ? "모노리틱 서버 생성" : "마이크로서비스 아키텍처 서버 생성"}
      </Title>

      <ConfigContainer>
        {architecture === "monolithic" ? (
          // 모노리틱: 단일 폼만 표시
          <ContainerSection>
            <Header>
              <HeaderTitle>서버 구성</HeaderTitle>
            </Header>
            {(showForm || !monolithicContainer) && (
              <ContainerForm
                initialValues={monolithicContainer || undefined}
                onCancel={() => setShowForm(false)}
                onSave={handleSave}
                architecture={architecture}
              />
            )}
            {monolithicContainer && !showForm && (
              <ContainerList
                containers={[monolithicContainer]}
                onConfigureContainer={handleConfigureContainer}
                onDeleteContainer={() => setMonolithicContainer(null)}
              />
            )}
          </ContainerSection>
        ) : (
          <>
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
                  architecture={architecture}
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
          </>
        )}
      </ConfigContainer>

      {architecture === "microservices" && (
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
                onSave={(data) => {
                  handleConfigureContainer({ id: selectedContainer.id, ...data });
                  setIsConfigureDialogOpen(false);
                  setSelectedContainer(null);
                }}
                architecture={architecture}
              />
            )}
          </DialogStyledContent>
        </Dialog>
      )}
    </ServerCreationContainer>
  );
};