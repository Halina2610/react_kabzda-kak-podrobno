import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}


export const UncontrolledAccordion = (props: AccordionPropsType) => {

    const [collapsed, setCollapsed] = useState(false);
    const onClickHandlerAccordion = () => setCollapsed(!collapsed)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={onClickHandlerAccordion}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')

    const onClickHandlerAccordionTitle = () => props.onClick()

    return (
        <h3 onClick={onClickHandlerAccordionTitle}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}