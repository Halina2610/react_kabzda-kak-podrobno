import React, {useEffect, useState} from 'react';
import styled from "styled-components";


interface ClockProps {
    datediff: number;
}

export const AnalogClock: React.FC<ClockProps> = ({ datediff }) => {
    const [hours, setHours] = useState<string>('');
    const [minutes, setMinutes] = useState<string>('');
    const [seconds, setSeconds] = useState<string>('');

    const handleDate = () => {
        const date = new Date();
        date.setHours(date.getHours() + datediff);
        const formattedHours = formatTime(date.getHours());
        const formattedMinutes = formatTime(date.getMinutes());
        const formattedSeconds = formatTime(date.getSeconds());
        setHours(formattedHours);
        setMinutes(formattedMinutes);
        setSeconds(formattedSeconds);
    };

    const formatTime = (time: number) => (time < 10 ? `0${time}` : time.toString());

    useEffect(() => {
        const clockInterval = setInterval(handleDate, 1000);
        return () => clearInterval(clockInterval);
    }, []);

    const secondsStyle: React.CSSProperties = {
        transform: `rotate(${Number(seconds) * 6}deg)`,
    };

    const minutesStyle: React.CSSProperties = {
        transform: `rotate(${Number(minutes) * 6}deg)`,
    };

    const hoursStyle: React.CSSProperties = {
        transform: `rotate(${Number(hours) * 30}deg)`,
    };

    return (
        <Clock>
            <Analog>
                <DialSeconds style={secondsStyle}/>
                <DialMinutes style={minutesStyle}/>
                <DialHours style={hoursStyle}/>
            </Analog>
            <DigitalClock>{hours}:{minutes}:{seconds}</DigitalClock>
        </Clock>
    )

};


const Clock = styled.div`
  width: 120px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #ccc;
  border-radius: 5px;
  margin: 5px;
  background: #ccc;
`
const DigitalClock = styled.div`
  padding: 10px;
`
const Analog = styled.div`
  width: 100px;
  height: 100px;
  border: solid 1px #000;
  border-radius: 50%;
  position: relative;
  background: #fff;
`

const DialSeconds = styled.div`
  position: absolute;
  left: 50%;
  width: 50px;
  height: 50px;
  transform-origin: bottom left;
  border-left: solid 1px green;
`
const DialMinutes = styled.div`
  position: absolute;
  left: 50%;
  width: 50px;
  height: 50px;
  transform-origin: bottom left;
  border-left: solid 1px #cc0000;
`
const DialHours = styled.div`
  position: absolute;
  left: 50%;
  width: 50px;
  height: 50px;
  transform-origin: bottom left;
  width: 35px;
  height: 35px;
  top: 15px;
  border-left: solid 2px #000;
`
