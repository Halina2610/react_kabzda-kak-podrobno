import { action } from '@storybook/addon-actions';
import { Accordion } from './Accordion';
import React, { useState } from 'react';

export default {
    title: 'Accordion',
    component: Accordion,
};

const onChangeHandler = action('onChange');
const onClickHandler = action(`onClick`);

export const Default = () => {
    return (
        <Accordion
            titleValue="Collapsed Accordion"
            collapsed={true}
            onChange={onChangeHandler}
            items={[]}
            onClick={onClickHandler}


        />
    );
};

export const OpenedAccordion = () => {
    return (
        <Accordion
            titleValue="Opened Accordion"
            collapsed={false}
            onChange={() => {}}
            items={[
                {title: 'Dimych', value: 1},
                {title: 'Valera', value: 1},
                {title: 'Artem', value: 1},
                {title: 'Victor', value: 1},
            ]}
            onClick={onClickHandler}
        />
    );
};

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    return (
        <Accordion
            titleValue="Accordion Demo"
            collapsed={collapsed}
            onChange={() => {
                setCollapsed(!collapsed);
            }}
            items={[
                {title: 'Dimych', value: 1},
                {title: 'Valera', value: 1},
                {title: 'Artem', value: 1},
                {title: 'Victor', value: 1},
            ]}
            onClick={(value) => { alert(`this is on click ${value}`)}}

        />
    );
};

// Для продвинутых:

// type Story = StoryObj<typeof Accordion>;

// export const FirstStory: Story = {
//   args: {
//     titleValue: 'Hello',
//     collapsed: true,
//     onClick: () => void {},
//   },
// };