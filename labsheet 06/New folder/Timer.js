import React, { useState, useEffect } from 'react';

function Timer(){
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
  
    useEffect(() => {
      let intervalId;
  
      if (isRunning) {
        intervalId = setInterval(() => {
          setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
      }
  
      return () => clearInterval(intervalId);
    }, [isRunning]);
  
    const handleStop = () => {
      setIsRunning(false);
    };
    return(
        <div>
            <h2>Timer: {seconds} seconds</h2>
            {isRunning ? (
                <button onClick={handleStop}>Stop</button>
            ) : (
                <p>Timer stopped</p>
            )}
        </div>
    );
}
export default Timer;