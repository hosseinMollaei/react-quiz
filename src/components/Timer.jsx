import React, { useState, useEffect } from "react";

const Timer = ({ endTime, setEndTime, resultLevels, questionNumber, data }) => {
 
  const [earned, setearned] = useState(null);
  const [timer, setTimer] = useState(30);


  

  useEffect(() => {
    if (timer === 0) {
      setEndTime(true);
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer, endTime]);

  useEffect(() => {
    if (endTime) {
      if (questionNumber === 1) {
        return setearned(0);
      }
      if (questionNumber === data.length) {
        return setearned(resultLevels[questionNumber - 1].amount);
      }

      return setearned(resultLevels[questionNumber - 2].amount);
    }

    
  }, [endTime]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return (
    <div className="timer-container">
      <div className={endTime ? "result" : "timer"}>
        <h2>{endTime ? `you earned ${earned} dollar` : timer}</h2>
      </div>
    </div>
  );
};

export default Timer;
