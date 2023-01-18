import React, { useState, useEffect } from "react";
import "../App.css";

const Trivia = ({
  data,
  questionNumber,
  setQuestionNumber,
  endTime,
  setEndTime,
  
  
}) => {
  const [myquestion, setmyquestion] = useState([]);
  const [selected, setSelected] = useState();
  const [classname, setClassname] = useState("answer");

  useEffect(() => {
    setmyquestion(data[questionNumber - 1]);
    setSelected(null);
  }, [data, questionNumber]);

  const clickHandler = (a, index) => {
    
      setSelected(a); 
      setClassname('btn selected')
    
    
    
    setTimeout(() => {
      a.correct ? setClassname(" btn correct-answer") : setClassname("btn wrong-answer");
      a.id = index;
    }, 2000);

    setTimeout(() => {
      a.correct
        ? questionNumber === data.length
          ? setEndTime(true)
          : setQuestionNumber((prev) => prev + 1)
        : setEndTime(true);
    }, 3000);
  };

  return (
    <div className={endTime ? "hidden" : ""}>
      <div className="question-box">
        <div className="question">{myquestion?.question}</div>
        <div className="answers">
          {myquestion.answers?.map((a, index) => (
            <button
              key={index}
              onClick={() => {
               !selected && clickHandler(a, index);
              }}
              className={selected===a?classname:'btn answer'}
            >
              {a.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trivia;
