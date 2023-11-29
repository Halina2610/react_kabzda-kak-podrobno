import React, {useState} from 'react';

import {OnOff} from './OnOff';
import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Components/OnOff',
    component: OnOff,
};

export const OnOffDemo = () => {
    const [controlledOnOff, setControlledOnOff] = useState<boolean>(true)
    const controlledCallback = () => {
        setControlledOnOff(!controlledOnOff);
    }

    return (
        <OnOff value={controlledOnOff} callback={controlledCallback}/>

    )
}

export const OnOffUncontroled = () => {
    const [controlledOnOff, setControlledOnOff] = useState<boolean>(true);

    const controlledCallback = () => {
        setControlledOnOff(!controlledOnOff);
    };
    return <UncontrolledOnOff onChange={controlledCallback}/>
};

export const OnMode = () => <OnOff value={true} callback={action('clicked')}/>
export const OffMode = () => <OnOff value={false} callback={action('clicked')}/>
