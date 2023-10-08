import {Simulate} from "react-dom/test-utils";
import React, {ChangeEvent,  useState} from "react";
import {CustomSelect, Option} from "./CustomSelect";

export default {
    title: 'input',
    component: CustomSelect,
};


const options: Option[] = [
    { countryId: 0, label: 'none', value: 'nothing', people: 0},
    { countryId: 1, label: "minsk", value: "Minsk", people: 1000000 },
    { countryId: 1, label: "vitebsk", value: "Vitebsk", people: 300000 },
    { countryId: 1, label: "polotsk", value: "Polotsk", people: 100000 },
    { countryId: 2, label: "varshava", value: "Varshava", people: 5000000 },
    { countryId: 2, label: "schecin", value: "Schecin", people: 800000 },
    { countryId: 2, label: "vratslow", value: "Vratslow", people: 500000 },
    { countryId: 3, label: "kiev", value: "Kiev", people: 100000000 },
    { countryId: 3, label: "odessa", value: "Odessa", people: 2000000 },
    { countryId: 3, label: "chernigow", value: "Chernigow", people: 1000000 }
]

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


//use memo


export const SelectFilterCountries = () => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    let filteredCountries = options.filter((option) => option.countryId === 1);

    return (
        <CustomSelect
            options={filteredCountries}
            selectName="Countries"
            value={selectedOption}
            onChange={(option) => setSelectedOption(option)}
        />
    );
}


export const SelectFilterPeople = () => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    let filteredPeople = options.filter((option) => option.people >= 1000000);

    return (
        <CustomSelect
            options={filteredPeople}
            selectName="People match"
            value={selectedOption}
            onChange={(option) => setSelectedOption(option)}
        />
    );
}

export const SelectFilterWord = () => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const newArray = options.filter(u => u.value.toLowerCase().indexOf("a") > -1);


    return (
        <CustomSelect
            options={newArray}
            selectName={"A"}
            value={selectedOption}
            onChange={(option) => setSelectedOption(option)}
        />
    );
}