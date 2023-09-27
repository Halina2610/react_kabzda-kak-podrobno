import React, {useState} from 'react';
import styled from 'styled-components';
import './App.css';
import {Accordion} from './components/accordion/Accordion';
import {UncontrolledRating} from './components/rating/UncontrolledRating';
import {UncontrolledOnOff} from './components/onOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/accordion/UncontrolledAccordion';
import CustomCursor from './components/cursor/CustomCursor';
import {Rating, RatingValueType} from './components/rating/Rating';
import {OnOff} from './components/onOff/OnOff';
import {CustomSelect, Option} from "./components/customSelect/CustomSelect";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [controlledOnOff, setControlledOnOff] = useState<boolean>(true)

    const AccordionOnClickHandler = () => {
        setAccordionCollapsed(!accordionCollapsed);
    }

    const controlledCallback = () => {
        setControlledOnOff(!controlledOnOff);
    }
    const items = [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 1},
        {title: 'Artem', value: 1},
        {title: 'Victor', value: 1},
    ]

    const options: Option[] = [
        { label: 'none', value: 'nothing' },
        { label: 'Minsk', value: 'minsk' },
        { label: 'Vitebsk', value: 'vitebsk' },
        { label: 'Polotsk', value: 'polotsk' },
    ];

    return (
        <AppWrapper>


            <PageTitle title={'React - Kabzda kak podrobno'}/>
            <UncontrolledRating/>

            <CustomSelect options={options} selectName={'My city'}/>

            <OnOff value={controlledOnOff} callback={controlledCallback}/>

            <UncontrolledAccordion titleValue={'User1'}/>
            <Accordion
                titleValue={'Menu'}
                collapsed={accordionCollapsed}
                onChange={AccordionOnClickHandler}
                items={items}
                onClick={()=> {}}
            />
            <UncontrolledOnOff onChange={controlledCallback}/> {controlledOnOff.toString()}
            <CustomCursor/>
            <Rating value={ratingValue} onClick={setRatingValue}/>


        </AppWrapper>
    );
}

type PageTitlePropsType = {
    title: string;
};

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>;
}

const AppWrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  
`;

export default App;