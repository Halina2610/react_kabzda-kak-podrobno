import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean)=> void
}


export const UncontrolledOnOff = (props: PropsType) => {
    let [on, setOn] = useState(false);

    const battonsStyle = {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        marginTop: '100px'
    }
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        backgroundColor: on ? 'lightgreen' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        padding: '5px',
        border: '1px solid black',
        backgroundColor: !on ? 'red' : 'white'

    }
    const indikatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        backgroundColor: on ? 'lightgreen' : 'red'
    }

    const handleClick = () => {
        setOn(!on);
        props.onChange(!on);
    };
    const handleClickOn = () => setOn(true)
    const handleClickOff =() => setOn(false)

    return (
        <div style={battonsStyle}>
            <button style={onStyle} onClick={handleClickOn}>On</button>
            <button style={offStyle} onClick={handleClickOff}>Off</button>
            <button style={indikatorStyle} onClick={handleClick}></button>
        </div>
    );
};