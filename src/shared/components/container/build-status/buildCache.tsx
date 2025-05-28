import * as React from "react";
import styled from "styled-components";

interface BuildCacheProps {
  enabled: boolean;
  size: string;
  onClearCache: () => void;
}

const Wrapper = styled.div`
  background-color: rgba(11, 23, 57, 1);
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 91.25vw;
  padding: 3vh 2vw;
  border-radius: 0.8vw;
  font-weight: 400;

`;

const Title = styled.div`
  color: white;
  font-size: 1.5rem;
`;

const CacheBox = styled.div`
  background-color: rgba(8, 16, 40, 1);
  display: flex;
  gap: 35vw;
  padding: 2vh 1vw;
  border-radius: 0.5vw;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  font-size: 1.25rem;
  color: rgba(174, 185, 225, 1);
`;

const SectionTitle = styled.div`
  font-size: 1.25rem;
`;

const SectionValue = styled.div`
  color: white;
  font-size: 1.25rem;
`;

const ClearButton = styled.button`
  padding: 1.25vh 1.25vw;
  border-radius: 0.6vw;
  background-color: rgba(11, 23, 57, 1);
  color: white;
  text-align: center;
  border: none;
  transition: background-color 0.2s ease-in-out;
  font-size: 1rem;

  &:hover {
    background-color: rgba(21, 33, 67, 1);
  }
`;

export const BuildCache: React.FC<BuildCacheProps> = ({
  enabled,
  size,
  onClearCache,
}) => {
  return (
    <Wrapper>
      <Title>Build Cache</Title>
      <CacheBox>
        <Section>
          <SectionTitle>Cache Status</SectionTitle>
          <SectionValue>{enabled ? "Enabled" : "Disabled"}</SectionValue>
        </Section>
        <Section>
          <SectionTitle>Cache Size</SectionTitle>
          <SectionValue>{size}</SectionValue>
        </Section>
        <ClearButton onClick={onClearCache}>Clear Cache</ClearButton>
      </CacheBox>
    </Wrapper>
  );
};
