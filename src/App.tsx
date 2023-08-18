import React from 'react';
import './App.css';
import {MethodMap} from './components/MetodMap';

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]


const App = () => {
//    debugger //останавливает программу и выполняет ее по шагам
    return (
        <>
            <MethodMap cars={topCars}/>
        </>
    );
}


export default App;
