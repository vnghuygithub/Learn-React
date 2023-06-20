import { useState, useRef } from "react";



function Content() {
    const [count, setCount] = useState(60)

    const timerId = useRef() //useRef return ra object

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>START</button>
            <button onClick={handleStop}>STOP</button>
        </div >
    );
}

export default Content;
