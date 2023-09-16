/*import type {Meta, StoryObj} from '@storybook/react';*/
import { action } from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from 'react';

//👇 This default export determines where your story goes in the story list
export default  {
    component: Accordion,
};

const onChangeHandler = action('onChange')
export const CollapsedAccordion = () => {
    return <Accordion
        titleValue={'Collapsed Accordion'}
        collapsed={true}
        onClick={() => {
            console.log('on change')
        }}
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



//type Story = StoryObj<typeof Accordion>;

//xport const FirstStory: Story = {
   // args: {
      //  titleValue: 'Hello',
     //   collapsed: true,
      //  onClick: () => void {},
  //  },
//};
