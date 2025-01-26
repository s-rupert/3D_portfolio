import React, { useState, useEffect } from "react";

function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        // Set interval to update time every second
        const intervalId = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        // Cleanup: Clear the interval when component unmounts or when effect dependencies change
        return () => {
            clearInterval(intervalId);
        };
    }, []); // Empty dependency array means this runs only once on mount

    return (
        <div>Time: {time} seconds</div>
    );
}

export { Timer };
