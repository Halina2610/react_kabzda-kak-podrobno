import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}


export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    /*    debugger //останавливает программу и выполняет ее по шагам*/
    if (props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>)

    } else {
        return (
            <div>
                <AccordionTitle title={props.title}/>
            </div>
        )
    }
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}