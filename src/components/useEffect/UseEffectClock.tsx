import React, { useEffect, useState } from 'react';
import styled from "styled-components";

export const UseEffectClock = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const currentTime = new Date();
            const seconds = () => {
                if (currentTime.getSeconds() <= 9) return '0' + currentTime.getSeconds();
                return currentTime.getSeconds();
            };
            const minutes = () => {
                if (currentTime.getMinutes() <= 9) return '0' + currentTime.getMinutes();
                return currentTime.getMinutes();
            };
            const formattedTime =
                `${currentTime.getHours()}:${minutes()}:${seconds()}`;
            setTime(formattedTime);
        };

        const intervalId = setInterval(updateTime, 1000);

        return () => {
            clearInterval(intervalId); // Очищаем интервал при размонтировании компонента
        };
    }, []);

    return <TimeWrapper>{time}</TimeWrapper>

};

const TimeWrapper = styled.div`
  padding: 20px;
  margin: 10px 0;
  border: 2px solid saddlebrown;
  width: 50px;
`;


