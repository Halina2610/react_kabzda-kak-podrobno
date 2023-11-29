import React from 'react';

type ItemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange} />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')

    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void

}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering');

    return (
        <ul>
            {props.items.map((item) => (
                <li key={item.value} onClick={() => props.onClick(item.value)}>{item.title}</li>
            ))}
        </ul>
    );
}