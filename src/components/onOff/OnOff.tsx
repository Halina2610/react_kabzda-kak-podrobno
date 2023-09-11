import React from 'react';

type PropsType = {
    value: boolean
    callback: (value: boolean) => void
}


export const OnOff = (props: PropsType) => {

    const buttonsStyle = {
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
        backgroundColor: props.value ? 'lightgreen' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        padding: '5px',
        border: '1px solid black',
        backgroundColor: !props.value ? 'red' : 'white'

    }
    const
        indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        backgroundColor: props.value ? 'lightgreen' : 'red'
    }

    const onClickOn = () => props.callback(true)

    const onClickOff = () => props.callback(false)


    return (
        <div style={buttonsStyle}>
            <button style={onStyle} onClick={onClickOn}>On</button>
            <button style={offStyle} onClick={onClickOff}>Off</button>
            <button style={indicatorStyle}></button>
        </div>
    );
};
