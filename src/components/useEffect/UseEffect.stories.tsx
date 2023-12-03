import React, {useState, useEffect} from "react";
import {_extends} from "../../../storybook-static/sb-manager/chunk-QPL63VNK";

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

export const SetTimeoutIntervalExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    console.log('SetTimeoutIntervalExample');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('setTimeout');
            document.title = counter.toString();
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [counter]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('setInterval');
            setFake((state) => state + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div>
                counter: {counter}
                <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>+</button>
            </div>
            <div>fake: {fake}</div>
        </>
    );
};


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component rendered')

    useEffect(() => {
        console.log("Effect occurred")
        //при размантировании компаненты сбросим эффект:
        return () => {
            console.log('Reset Effect')
        }
    }, [counter]); //зависим от счетчика

    return <div>
        Hello, counter: {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>
            +
        </button>
    </div>
}

export const KeyTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)
        //при размантировании компаненты сбросим эффект:

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text]);

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered' + text)

    useEffect(() => {
      const timeoutId =  setTimeout(() => {
            setText('3 seconds passed')
        }, 3000)

        return () => clearTimeout(timeoutId)

    }, [text]);

    return <>
        Typed text: {text}
    </>
}