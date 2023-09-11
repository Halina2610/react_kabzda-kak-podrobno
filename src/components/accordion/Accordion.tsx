import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
}


export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    /*    debugger //останавливает программу и выполняет ее по шагам*/
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody />}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')

    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    const data = [1, 2, 3];

    return (
        <ul>
            {data.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}