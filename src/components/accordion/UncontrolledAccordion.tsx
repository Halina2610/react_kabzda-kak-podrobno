import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}


export const UncontrolledAccordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(false);

    return (
            <div>
                <AccordionTitle title={props.titleValue}/><button onClick={() => setCollapsed(true)}>TOGGLE</button>
                {!collapsed && <AccordionBody/>}
            </div>
        )
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