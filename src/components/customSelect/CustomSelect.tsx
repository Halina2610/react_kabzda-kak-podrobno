import React, { useState, useRef } from 'react';
import styled from 'styled-components';

export type Option = {
    label: string;
    value: string;
};

interface SelectProps {
    options: Option[];
    selectName: string;
}

export const CustomSelect = (props: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const selectRef = useRef<HTMLDivElement>(null);

    const onClickHandler = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const handleBlur = () => {
        setIsOpen(false);
    };

    return (
        <SelectContainer ref={selectRef}>
            <Select onClick={toggleOptions} onBlur={handleBlur}>
                {selectedOption ? selectedOption.label : props.selectName}
            </Select>
            {isOpen && (
                <OptionsContainer>
                    {props.options.map((option) => (
                        <OptionItem key={option.value} onClick={() => onClickHandler(option)}>
                            {option.label}
                        </OptionItem>
                    ))}
                </OptionsContainer>
            )}
        </SelectContainer>
    );
};

const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Select = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  max-height: 200px;
  overflow-y: auto;
`;

const OptionItem = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f39c9c;
  }
`;