import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => setCursorPosition({ x: event.clientX, y: event.clientY });

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <CursorWrapper style={{ left: cursorPosition.x, top: cursorPosition.y }} />
    );
};

const CursorWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background-image: url(https://img.icons8.com/?size=512&id=15175&format=png);
  background-size: cover;
  pointer-events: none;
`;

export default CustomCursor;