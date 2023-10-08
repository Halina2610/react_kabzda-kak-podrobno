import React, { useState, useRef, useEffect, useMemo } from 'react';
import styled from 'styled-components';

export type Option = {
    countryId: number;
    label: string;
    value: string;
    people: number;
};

interface SelectProps {
    options: Option[];
    selectName: string;
    value: Option | null;
    onChange: (option: Option | null) => void;
}

export const CustomSelect = (props: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const onClickHandler = (option: Option) => {
        props.onChange(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const options = useMemo(() => {
        return props.options.map((option) => ({
            countryId: option.countryId,
            label: option.label,
            value: option.value,
            people: option.people,
        }));
    }, [props.options]);

    return (
        <SelectContainer ref={selectRef}>
            <Select onClick={toggleOptions}>
                {props.value ? props.value.value : props.selectName}
            </Select>
            {isOpen && (
                <OptionsContainer>
                    {options.map((option) => (
                        <OptionItem key={option.value} onClick={() => onClickHandler(option)}>
                            {option.value}
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