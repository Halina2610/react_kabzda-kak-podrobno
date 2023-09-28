import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import {debug} from "util";

const typingAnimation = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

interface TypewriterTextProps {
    length: number;
}

const TypewriterText = styled.span<TypewriterTextProps>`
  overflow: hidden;
  white-space: nowrap;
  animation: ${typingAnimation} 4s steps(${props => props.length}, end) infinite;
`;

type TypewriterProps = {
    text: string
}

export const Typewriter = (props: TypewriterProps) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        let currentIndex = 0;

        const typeNextCharacter = () => {
            if (currentIndex <= props.text.length-2) {
                setDisplayedText(prevText => prevText + props.text[currentIndex]);
                currentIndex++;
                timeout = setTimeout(typeNextCharacter, 100);
            } else {
                clearTimeout(timeout);
                setDisplayedText(props.text);
            }
        };

        typeNextCharacter();

        return () => {
            clearTimeout(timeout);
        };
    }, [props.text]);

    useEffect(() => {
        console.log('displayedText:', displayedText);
        console.log('props.text:', props.text);
    }, [displayedText, props.text]);

    return (
        <TypewriterText length={displayedText.length}>{displayedText}</TypewriterText>
    );
};

