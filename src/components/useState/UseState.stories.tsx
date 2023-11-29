import React, {useState, useMemo} from "react";

export default {
    title: 'useState expert demo'
};

function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

export const Example = () => {
    console.log("useState example 1");

    /*const initialValue = useMemo(() => factorial(10), []);
    const [counter, setCounter] = useState(initialValue);*/

    // верхняя запись эквивалентна нижней:

    const [counter, setCounter] = useState(() => factorial(10));

    //можно в сеттер передать не конкретное значение, а функцию
    let counterExpert = (state: number) =>  state + factorial(5);


    return (
        <>
            <button onClick={()=> setCounter(counterExpert)}>+</button>
            {counter}
        </>
    );
};