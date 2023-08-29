import React, {useState} from 'react';

type PropsType = {
    //  on: boolean;
}


export const OnOff = (props: PropsType) => {
    let [on, setOn] = useState(false);


    const battonsStyle = {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
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


    return (
        <div style={battonsStyle}>
            <button style={onStyle} onClick={() => setOn(true)}>On</button>
            <button style={offStyle} onClick={() => setOn(false)}>Off</button>
            <button style={indikatorStyle}></button>
        </div>
    );
};
