import React, { useEffect, useState } from 'react';
import styled from "styled-components";

export const UseEffectClock = () => {
    const [time, setTime] = useState('');

    const formatNumber = (num: number) => num < 10 ? '0' + num : num

    useEffect(() => {
        const updateTime = () => {
            const currentTime = new Date();

            const seconds = formatNumber(currentTime.getSeconds());
            const minutes = formatNumber(currentTime.getMinutes());
            const hours = formatNumber(currentTime.getHours())

            const formattedTime =
                `${hours}:${minutes}:${seconds}`;
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
  border: 2px solid #ff0099;
  width: 60px;
`;


