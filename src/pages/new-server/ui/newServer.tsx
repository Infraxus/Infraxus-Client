import React, { useState } from 'react';
import { styled } from 'styled-components';
import color from '@/shared/styles/color.ts'
import { useNavigate } from 'react-router-dom';

const NewServerContainer = styled.div`
    padding: 2.5vh 1.25vw;
    width: 76.25vw;
    height: 37.5vh;
    flex-shrink: 0;
    border-radius: 0.5rem;
    background: ${color.SecondaryColor1};
    display: flex;
    flex-direction: column;
    gap: 2vh;
`;

const ServerNameInput = styled.input`
    width: 74.25vw;
    height: 5vh;
    flex-shrink: 0;
    border-radius: 0.25rem;
    background: ${color.NeutralColor800};
    color: ${color.NeutralColor100};
    font-size: 1rem;
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
    box-shadow: none;
    
    ::placeholder {
        color: ${color.NeutralColor400};
        font-size: 1rem;
    }
`;

const ArchitectureInputContainer = styled.div<ArchitectureInputProps>`
    padding: 2vh 1.5vw;
    width: 73vw;
    min-height: 6vh;
    flex-shrink: 0;
    border-radius: 0.25rem;
    background: ${({ $isSelected }) => $isSelected ? "var(--primary-color-linear, linear-gradient(128deg, #CB3CFF 19.86%, #7F25FB 68.34%))" : color.NeutralColor700};
    display: flex;
    flex-direction: column;
    gap: 1vh;
`;

const ArchitectureInputTitle = styled.p`
    color: ${color.NeutralColor100};
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
`;

const ArchitectureInputDescription = styled.p`
    width: 73.75vw;
    min-height: 1vh;
    color: ${color.NeutralColor400};
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3125rem; /* 150% */
`;

const NextSubmitButton = styled.button`
    width: 5vw;
    height: 5vh;
    padding: 1vh 0;
    flex-shrink: 0;
    border-radius: 0.25rem;
    background: ${color.PrimaryColor};
    outline: none;
    border: none;
    box-shadow: none;

    color: ${color.NeutralColor100};
    text-align: center;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3125rem; /* 150% */
`;

interface ArchitectureInputProps {
    $isSelected: boolean;  // $로 시작하는 props는 styled-components에서 필터링됨
}

interface Architecture {
    architecture: string
    architectureName: string;
    architectureDescription: string;
}

interface ArchitectureProps {
    architectures: Architecture[];
}

export const NewServerForm: React.FC<ArchitectureProps> = ({ architectures }) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [inputValue, setInputValue] = useState("");
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleClick = (index: number) => {
        setSelectedIndex(index === selectedIndex ? null : index);
    };

    const navigate = useNavigate();

    return (
        <NewServerContainer>
            <ServerNameInput placeholder='서버 이름을 입력해주세요' value={inputValue} onChange={handleChange} />
            {architectures.map((item, index) => {
                return (
                    <ArchitectureInputContainer
                            key={index}
                            $isSelected={index === selectedIndex}
                            onClick={() => handleClick(index)}
                        >
                        <ArchitectureInputTitle>{item.architectureName}</ArchitectureInputTitle>
                        <ArchitectureInputDescription>{item.architectureDescription}</ArchitectureInputDescription>
                    </ArchitectureInputContainer>
                )
            })}
            <NextSubmitButton onClick={() => navigate(`/new/config?name=${inputValue}&architecture=${architectures[selectedIndex].architecture}`)}>
                생성
            </NextSubmitButton>
        </NewServerContainer>
    );
}