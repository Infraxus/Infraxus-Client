import * as React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FormInput } from "./formInput";
import { FormSelect, SelectItem } from "@/shared/components/new-server/select";
import { Container } from "./containerList";
import styled from "styled-components";
import color from "@/shared/styles/color";

export interface ContainerFormProps {
  initialValues?: Container;
  onCancel: () => void;
  onSave: (data: any) => void;
  architecture: string;
}

const FormContainer = styled.form`
  background-color: ${color.NeutralColor800};
  padding: 4.17vh 3.13vw;
  border-radius: 0.52vw;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const FormTitle = styled.div`
  color: ${color.NeutralColor100};
  font-size: 1.5rem;
  font-weight: 600;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 1.5vh;
  flex-wrap: wrap;
  max-width: 84.75vw;
  min-width: 50vw;
`;

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const Label = styled.label`
  color: ${color.NeutralColor100};
  font-size: 1rem;
  display: block;
`;

const TextArea = styled.textarea`
  width: 83.75vw;
  height: 13vh;
  background-color: ${color.NeutralColor600};
  border: none;
  border-radius: 0.26vw;
  padding: 1vh 0.5vw;
  color: ${color.NeutralColor100};
  font-size: 0.75rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2.08vw;
  margin-top: 3.13vh;
`;

const Button = styled.button<{ primary: string }>`
  width: 6vw;
  height: 4.5vh;
  border-radius: 0.26vw;
  font-size: 1.46vh;
  color: ${color.NeutralColor100};
  cursor: pointer;
  background-color: ${({ primary }) =>
    primary === "true" ? color.PrimaryColor : color.NeutralColor600};
  border: ${({ primary }) =>
    primary === "true" ? "none" : `0.16vw solid ${color.NeutralColor500}`};

  &:hover {
    background-color: ${({ primary }) =>
      primary === "true" ? color.PrimaryColor : color.NeutralColor700};
  }
`;

const CloseButton = styled.button`
  margin-left: 0.52vw;
  color: ${color.NeutralColor100};
  cursor: pointer;
  &:hover {
    color: ${color.Red};
  }
`;

export const ContainerForm: React.FC<ContainerFormProps> = ({
  initialValues,
  onCancel,
  onSave,
  architecture,
}) => {
  const navigate = useNavigate();
  const [name, setName] = React.useState(initialValues?.name || "");
  const [port, setPort] = React.useState(initialValues?.port || "");
  const [description, setDescription] = React.useState(initialValues?.description || "");
  const [programmingLanguage, setProgrammingLanguage] = React.useState<string>(
    initialValues?.programmingLanguage || ""
  );
  const [framework, setFramework] = React.useState<string>(
    initialValues?.framework || ""
  );
  const [database, setDatabase] = React.useState<string>(
    initialValues?.database || ""
  );
  const [messaging, setMessaging] = React.useState<string>(
    initialValues?.messaging || ""
  );
  const [buildTool, setBuildTool] = React.useState<string>(
    initialValues?.buildTool || ""
  );
  const [environmentVariables, setEnvironmentVariables] = React.useState<string>(
    initialValues?.environmentVariables || ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      name,
      port,
      description,
      technologies: [
        programmingLanguage,
        framework,
        database,
        messaging,
        buildTool,
      ],
      environmentVariables, // 추가: 환경 변수 포함
    };
    console.log("ContainerForm submitting:", { architecture, data }); // 디버깅 로그

    if (architecture === "monolithic") {
      navigate(`/server`);
    } else {
      onSave(data);
    }

    // 초기화는 편집 모드(initialValues 존재)일 때만 생략
    if (!initialValues) {
      setName("");
      setPort("");
      setDescription("");
      setProgrammingLanguage("");
      setFramework("");
      setDatabase("");
      setMessaging("");
      setBuildTool("");
      setEnvironmentVariables("");
    }
  };

  const shouldShowBuildTool = programmingLanguage || framework;
  const isEditMode = !!initialValues;
  const showCheckbox = !isEditMode;

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>{initialValues ? "컨테이너 수정" : "새 컨테이너 추가"}</FormTitle>

      <FormGroup>
        <FormInput
          label="컨테이너 이름"
          placeholder="Enter container name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          label="포트 번호"
          placeholder="Enter port number"
          type="number"
          required
          value={port}
          onChange={(e) => setPort(e.target.value)}
        />
      </FormGroup>

      <TextAreaContainer>
        <Label>컨테이너 설명</Label>
        <TextArea
          placeholder="Enter container description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </TextAreaContainer>

      <FormGroup>
        <FormSelect
          label="프로그래밍 언어"
          value={programmingLanguage}
          onValueChange={(value) => {
            console.log("Selected Programming Language:", value);
            setProgrammingLanguage(value);
          }}
          isEditMode={isEditMode}
          showCheckbox
        >
          <SelectItem value="Java">Java</SelectItem>
          <SelectItem value="Python">Python</SelectItem>
          <SelectItem value="JavaScript">JavaScript</SelectItem>
        </FormSelect>

        <FormSelect
          label="프레임워크"
          value={framework}
          onValueChange={(value) => {
            console.log("Selected Framework:", value);
            setFramework(value);
          }}
          isEditMode={isEditMode}
          showCheckbox
        >
          <SelectItem value="Spring Boot">Spring Boot</SelectItem>
          <SelectItem value="Django">Django</SelectItem>
          <SelectItem value="Express">Express</SelectItem>
        </FormSelect>
      </FormGroup>

      <FormGroup>
        <FormSelect
          label="데이터베이스"
          value={database}
          onValueChange={(value) => {
            console.log("Selected Database:", value);
            setDatabase(value);
          }}
          isEditMode={isEditMode}
          showCheckbox
        >
          <SelectItem value="PostgreSQL">PostgreSQL</SelectItem>
          <SelectItem value="MySQL">MySQL</SelectItem>
          <SelectItem value="MongoDB">MongoDB</SelectItem>
        </FormSelect>

        <FormSelect
          label="메시징 시스템"
          value={messaging}
          onValueChange={(value) => {
            console.log("Selected Messaging:", value);
            setMessaging(value);
          }}
          isEditMode={isEditMode}
          showCheckbox
        >
          <SelectItem value="Apache Kafka">Apache Kafka</SelectItem>
          <SelectItem value="RabbitMQ">RabbitMQ</SelectItem>
          <SelectItem value="Redis">Redis</SelectItem>
        </FormSelect>
      </FormGroup>

      <TextAreaContainer>
        <Label>환경 변수</Label>
        <TextArea
          placeholder="Enter container Environment Variables"
          value={environmentVariables}
          onChange={(e) => setEnvironmentVariables(e.target.value)}
        />
      </TextAreaContainer>

      {shouldShowBuildTool && (
        <TextAreaContainer>
          <FormSelect
            label="빌드 도구"
            value={buildTool}
            onValueChange={(value) => {
              console.log("Selected Build Tool:", value);
              setBuildTool(value);
            }}
          >
            <SelectItem value="Gradle">Gradle</SelectItem>
            <SelectItem value="Maven">Maven</SelectItem>
            <SelectItem value="Make">Make</SelectItem>
          </FormSelect>
        </TextAreaContainer>
      )}

      <ButtonGroup>
        <Button type="button" primary="false" onClick={onCancel}>
          취소
        </Button>
        <Button type="submit" primary="true">
          {initialValues ? "업데이트" : "저장"}
        </Button>
      </ButtonGroup>
    </FormContainer>
  );
};