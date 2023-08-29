import React from 'react';
import './App.css';
import {Accordion} from './components/accordion/Accordion';
import {Rating} from "./components/rating/Rating";
import {OnOff} from './components/onOff/OnOff';


function App() {
    return (
        <div>
    {/*        <PageTitle title={'react - kabzda kak podrobno'}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"User"} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={5}/>
            <Rating value={3}/>*/}


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
