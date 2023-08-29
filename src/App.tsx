import React from 'react';
import './App.css';
import {Accordion} from './components/accordion/Accordion';
import {UncontrolledRating} from './components/rating/UncontrolledRating';
import {OnOff} from './components/onOff/OnOff';
import {UncontrolledAccordion} from './components/accordion/UncontrolledAccordion';


function App() {
    return (


        <div className={'App'}>
            <PageTitle title={'react - kabzda kak podrobno'}/>
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={'User1'}/>
            <UncontrolledRating/>
            <Accordion titleValue={'User3'} collapsed={true}/>
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={'User2'}/>
            <OnOff/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
