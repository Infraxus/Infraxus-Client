import React, { useState } from 'react';
import styled from 'styled-components';
import type { VolumeMapping } from './types';
import color from '@/shared/styles/color';

interface ContainerVolumesProps {
  volumes: VolumeMapping[];
  onAddVolume: (volume: VolumeMapping) => void;
  onDetachVolume: (volume: VolumeMapping) => void;
}

// Container
const Wrapper = styled.div`
  background-color: rgba(11, 23, 57, 1);
  width: 100%;
  font-weight: 400;
  margin: 0 auto;
  padding: 4vh 2vw;
  border-radius: 1vw;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

// Header Row
const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2vw;
  align-items: center;
  color: white;
`;

// Title
const Title = styled.div`
  font-size: 1.25rem;
  line-height: 1;
`;

// Add Volume Button
const AddButton = styled.button`
  background-color: rgba(8, 16, 40, 1);
  color: white;
  font-size: 1rem;
  text-align: center;
  padding: 1.5vh 2vw;
  border-radius: 0.8vw;
  transition: background-color 0.3s;
  border: none;

  &:hover {
    background-color: rgba(18, 26, 50, 1);
  }
`;

// Individual Volume Box
const VolumeBox = styled.div`
  background-color: rgba(8, 16, 40, 1);
  border-radius: 0.8vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2vw;
  padding: 2vh 2vw;
`;

// Volume Text
const VolumeText = styled.div`
  color: white;
  font-size: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1vw;
`;

const Input = styled.input`
  padding: 0 1vw;
  background-color: ${color.NeutralColor600};
  border-radius: 0.26vh;  /* 약 4px */
  border: none;
  color: ${color.NeutralColor100};
  font-size: 0.75rem;  /* 약 14px */
`;

const ConfirmButton = styled.button`
  background-color: rgba(8, 16, 40, 1);
  color: white;
  font-size: 1rem;
  text-align: center;
  padding: 0.5vh 1vw;
  border-radius: 0.5rem;
  transition: background-color 0.3s;
  border: none;

  &:hover {
    background-color: rgba(18, 26, 50, 1);
  }
`;

// Detach Button
const DetachButton = styled.button`
  color: rgba(203, 60, 255, 1);
  background: none;
  border: none;
  font-size: 1rem;
  text-align: center;
  transition: color 0.2s;

  &:hover {
    color: rgba(183, 40, 235, 1);
  }
`;

export const ContainerVolumes: React.FC<ContainerVolumesProps> = ({
    volumes,
    onAddVolume,
    onDetachVolume,
  }) => {
    const [showInput, setShowInput] = useState(false);
    const [source, setSource] = useState('');
    const [target, setTarget] = useState('');
  
    const handleSubmit = () => {
      if (!source.trim() || !target.trim()) return;
  
      onAddVolume({ source, target });
      setSource('');
      setTarget('');
      setShowInput(false);
    };
  
    return (
      <Wrapper>
        <Header>
          <Title>Volumes</Title>
          <AddButton onClick={() => setShowInput((prev) => !prev)}>
            {showInput ? 'Cancel' : 'Add Volume'}
          </AddButton>
        </Header>
  
        {showInput && (
          <VolumeBox>
            <InputContainer>
              <Input
                type="text"
                placeholder="Source (e.g., /host/path)"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Target (e.g., /container/path)"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
              />
              <ConfirmButton onClick={handleSubmit}>Confirm</ConfirmButton>
            </InputContainer>
          </VolumeBox>
        )}
  
        {volumes.map((volume, index) => (
          <VolumeBox key={index}>
            <VolumeText>{`${volume.source} → ${volume.target}`}</VolumeText>
            <DetachButton onClick={() => onDetachVolume(volume)}>Detach</DetachButton>
          </VolumeBox>
        ))}
      </Wrapper>
    );
  };