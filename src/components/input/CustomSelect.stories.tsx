import {Simulate} from "react-dom/test-utils";
import React, {ChangeEvent,  useState} from "react";
import {CustomSelect, Option} from "./CustomSelect";

export default {
    title: 'input',
    component: CustomSelect,
};


const options: Option[] = [
    { label: 'none', value: 'nothing' },
    { label: 'Minsk', value: 'minsk' },
    { label: 'Vitebsk', value: 'vitebsk' },
    { label: 'Polotsk', value: 'polotsk' },
];
//Контролируемые:


export const ControlledCustomSelect= () => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleSelectChange = (option: Option | null) => {
        setSelectedOption(option);
    };


    return (
        <CustomSelect selectName={'My select'} options={options} value={selectedOption} onChange={handleSelectChange}/>

    );
}


//Неконтролируемые:


