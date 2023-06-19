import { useState, useEffect } from "react";

function Content() {

    const [countdown, setCountdown] = useState(180)

    useEffect(() => {
        const timerID = setInterval(() => {
            setCountdown(prevState => prevState - 1)
        }, 1000)

        return () => clearInterval(timerID)
    }, [])

    return (
        <div>
            {countdown}
        </div>
    );
}

export default Content;
