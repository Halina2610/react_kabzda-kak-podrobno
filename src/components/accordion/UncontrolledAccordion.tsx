import React, { useReducer } from 'react';

type AccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
    const initialState = false;
    const [collapsed, dispatch] = useReducer(reducer, initialState);

    const onClickHandlerAccordion = () => dispatch({ type: TOGGLE_CONSTANT });

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={onClickHandlerAccordion} />
            {!collapsed && <AccordionBody />}
        </div>
    )
}

// Определение редуктора (reducer)
const reducer = (state: boolean, action: any) => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state;
        default:
            return state;
    }
}

// Определение константы для действия (action)
const TOGGLE_CONSTANT = 'TOGGLE_CONSTANT';

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')

    const onClickHandlerAccordionTitle = () => {
        props.onClick();
    }

    return (
        <h3 onClick={onClickHandlerAccordionTitle}>{props.title}</h3>
    )
}

const AccordionBody = () => {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}