/*import type {Meta, StoryObj} from '@storybook/react';*/
import { action } from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from 'react';

export default  {
    component: Accordion,
};

const onChangeHandler = action('onChange')
export const Default = () => {
    return <Accordion
        titleValue={'Collapsed Accordion'}
        collapsed={true}
        onClick={onChangeHandler}
    />
}

export const OpenedAccordion = () => {
    return <Accordion
        titleValue={'Opened Accordion'}
        collapsed={false}
        onClick={() => {
        }}
    />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion
        titleValue={'Accordion Demo'}
        collapsed={collapsed}
        onClick={() => {
            setCollapsed(!collapsed)
        }}
    />
}

//для продвинутых:

//type Story = StoryObj<typeof Accordion>;

//export const FirstStory: Story = {
   // args: {
      //  titleValue: 'Hello',
     //   collapsed: true,
      //  onClick: () => void {},
  //  },
//};
