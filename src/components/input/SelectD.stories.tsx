import React, {useState} from 'react';
import {ItemType, SelectD} from './SelectD'
import {Option} from "./CustomSelect";
import {action} from "@storybook/addon-actions";

export default {
    title: "SelectD",
    component: SelectD
}

const items: ItemType[] = [
    { title: 'nothing', value: '1' },
    { title: 'Minsk', value: '2' },
    { title: 'Vitebsk', value: '3' },
]

export const ControlledSelectD = () =>{
    const [value, setValue] = useState('1')


    return <SelectD
    value={value}
    onChange={setValue}
    items={items}/>
}
export const ControlledSelectD2 = () => <SelectD
    value={'2'}
    onChange={action('Value change')}
    items={items}/>

export const ControlledSelectD3 = () => <SelectD
    value={'3'}
    onChange={action('Value change')}
    items={items}/>

export const ControlledSelectD4 = () => {
    const [value, setValue] = useState(null)


    return <SelectD
        value={value}
        onChange={setValue}
        items={items}/>
}