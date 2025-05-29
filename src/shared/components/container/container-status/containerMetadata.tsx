import React from 'react';
import styled from 'styled-components';
import type { ContainerMetadata as ContainerMetadataType } from './types';

interface ContainerMetadataProps {
  metadata: ContainerMetadataType;
}

// Styled Components
const Wrapper = styled.div`
  background-color: rgba(11, 23, 57, 1);
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 91.225vw;
  font-size: 1.25rem;
  font-weight: 400;
  padding: 3vh 2vw;
  border-radius: 1vw;
`;

const Title = styled.div`
  color: white;
  font-size: 1.5rem;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  width: 91.25vw;
  white-space: nowrap;
`;

const TagBox = styled.div`
  background-color: rgba(8, 16, 40, 1);
  display: flex;
  gap: 1.2vw;
  flex-wrap: wrap;
  flex-grow: 1;
  padding: 2vh 1.5vw;
  border-radius: 0.8vw;
`;

const TagGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  color: rgba(174, 185, 225, 1);
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1vw;
  margin-top: 1.5vh;
`;

const Tag = styled.span`
  background-color: rgba(11, 23, 57, 1);
  color: white;
  padding: 1vh 1vw;
  border-radius: 0.6vw;
  font-size: 1rem;
`;

const DescriptionBox = styled.div`
  background-color: rgba(8, 16, 40, 1);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 2vh 2vw;
  border-radius: 0.8vw;
`;

const DescriptionText = styled.div`
  color: white;
  margin-top: 1.5vh;
  font-size: 1rem;
`;

// Component
export const ContainerMetadata: React.FC<ContainerMetadataProps> = ({ metadata }) => {
  return (
    <Wrapper>
      <Title>Metadata</Title>
      <FlexWrap>
        <TagBox>
          <TagGroup>
            <Label>Tags</Label>
            <TagList>
              {metadata.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagList>
          </TagGroup>
        </TagBox>
      </FlexWrap>
      <FlexWrap>
        <DescriptionBox>
          <Label>Description</Label>
          <DescriptionText>{metadata.description}</DescriptionText>
        </DescriptionBox>
      </FlexWrap>
    </Wrapper>
  );
};
