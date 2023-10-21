import React, {useState, useEffect} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SimpleExample');

    useEffect(() => {
        console.log(' useEffect every render');
        document.title = counter.toString()

    })

    useEffect(() => {
        console.log(' useEffect only first render (conponentDidMount)');
        document.title = counter.toString()

    }, [])

    useEffect(() => {
        console.log(' useEffect  first render and every counter change');
        document.title = counter.toString()

    }, [counter])

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>

        Hello, Fake {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SetTimeoutExample');

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout');

            document.title = counter.toString()
        }, 1000);
    }, [])


    useEffect(() => {
        setInterval(() => {
            console.log('setInterval');
            setFake((state) => state + 1)
        }, 1000);
    }, [])


    return <>
        counter: {counter}<button onClick={() => setCounter(counter + 1)}>+</button>
        - fake: {fake}

    </>
}