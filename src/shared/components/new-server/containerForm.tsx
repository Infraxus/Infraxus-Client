import * as React from "react";
import { FormInput } from "./formInput";
import { FormSelect } from "./formSelect";
import { Container } from "./containerList";
import styled from "styled-components";
import color from "@/shared/styles/color";

export interface ContainerFormProps {
  initialValues?: Container;
  onCancel: () => void;
  onSave: (data: any) => void;
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
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

const Button = styled.button<{ primary: boolean }>`
  width: 13.28vw;
  height: 5.21vh;
  border-radius: 0.26vw;
  font-size: 1.46vh;
  color: ${color.NeutralColor100};
  cursor: pointer;
  background-color: ${({ primary }) => (primary ? color.PrimaryColor : "${color.NeutralColor600}")};
  border: ${({ primary }) => (primary ? "none" : `0.16vw solid ${color.NeutralColor500}`)};
  &:hover {
    background-color: ${({ primary }) => (primary ? color.PrimaryColor : "${color.NeutralColor600}")};
  }
`;

const SelectedTechnologiesContainer = styled.div`
  margin-top: 5.21vh;
`;

const TechnologyTag = styled.div`
  display: flex;
  align-items: center;
  background-color: ${color.NeutralColor600};
  color: ${color.NeutralColor100};
  font-size: 1.04vh;
  padding: 1.04vh 1.04vw;
  border-radius: 0.26vw;
  border: 0.16vw solid ${color.NeutralColor500};
  margin-bottom: 1.04vh;
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
}) => {
  const [name, setName] = React.useState(initialValues?.name || "");
  const [port, setPort] = React.useState(initialValues?.port || "");
  const [description, setDescription] = React.useState(initialValues?.description || "");
  const [selectedTechnologies, setSelectedTechnologies] = React.useState<string[]>(
    initialValues?.technologies || []
  );
  
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    
    if (!selectedTechnologies.includes(value)) {
      setSelectedTechnologies(prev => [...prev, value]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      name,
      port,
      description,
      technologies: selectedTechnologies,
    });
    
    if (!initialValues) {
      setName("");
      setPort("");
      setDescription("");
      setSelectedTechnologies([]);
    }
  };

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
        <FormSelect label="프로그래밍 언어" showCheckbox id="programming-language" onChange={handleSelectChange}>
          <option>Java</option>
          <option>Python</option>
          <option>JavaScript</option>
        </FormSelect>
        <FormSelect label="프레임워크" showCheckbox id="framework" onChange={handleSelectChange}>
          <option>Spring Boot</option>
          <option>Django</option>
          <option>Express</option>
        </FormSelect>
      </FormGroup>

      <FormGroup>
        <FormSelect label="데이터베이스" showCheckbox id="database" onChange={handleSelectChange}>
          <option>PostgreSQL</option>
          <option>MySQL</option>
          <option>MongoDB</option>
        </FormSelect>
        <FormSelect label="메시징 시스템" showCheckbox id="messaging" onChange={handleSelectChange}>
          <option>Apache Kafka</option>
          <option>RabbitMQ</option>
          <option>Redis</option>
        </FormSelect>
      </FormGroup>

      <TextAreaContainer>
        <FormSelect label="빌드 도구" id="build-tool" onChange={handleSelectChange}>
          <option>Gradle</option>
          <option>Maven</option>
          <option>Make</option>
        </FormSelect>
      </TextAreaContainer>

      <ButtonGroup>
        <Button type="button" primary={false} onClick={onCancel}>취소</Button>
        <Button type="submit" primary={true} >{initialValues ? "업데이트" : "저장"}</Button>
      </ButtonGroup>

      {selectedTechnologies.length > 0 && (
        <SelectedTechnologiesContainer>
          <Label>선택된 기술:</Label>
          <div>
            {selectedTechnologies.map((tech, index) => (
              <TechnologyTag key={index}>
                {tech}
                <CloseButton onClick={() => setSelectedTechnologies(prev => prev.filter(t => t !== tech))}>
                  ×
                </CloseButton>
              </TechnologyTag>
            ))}
          </div>
        </SelectedTechnologiesContainer>
      )}
    </FormContainer>
  );
};
