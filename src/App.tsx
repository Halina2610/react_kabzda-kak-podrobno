import React from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import {Rating} from "./components/rating/Rating";

/*function Hello() {
    //debugger //останавливает программу и выполняет ее по шагам
    alert('Hello IT-KAMASUTRA')
}
Hello();*/

function App() {
//    debugger //останавливает программу и выполняет ее по шагам
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"Users"}/>
            <Accordion title={"List 1"} collapsed={true}/>
            <Accordion title={"List 2"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

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
