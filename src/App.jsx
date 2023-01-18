import "./App.css";
import React, { useState, useEffect } from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";

function App() {

  const [questionNumber,setQuestionNumber]=useState(1)
  const [endTime,setEndTime]=useState(false)
  
  
  
  
  const data = [
    {
      id: 1,

      question: "Rolex is a company that specializes in what type of product?",

      answers: [
        {
          text: "Phone",

          correct: false,
        },

        {
          text: "Watches",

          correct: true,
        },

        {
          text: "Food",

          correct: false,
        },

        {
          text: "Cosmetic",

          correct: false,
        },
      ],
    },

    {
      id: 2,

      question: "When did the website `Facebook` launch?",

      answers: [
        {
          text: "2004",

          correct: true,
        },

        {
          text: "2005",

          correct: false,
        },

        {
          text: "2006",

          correct: false,
        },

        {
          text: "2007",

          correct: false,
        },
      ],
    },

    {
      id: 3,

      question: "Who played the character of harry potter in movie?",

      answers: [
        {
          text: "Johnny Deep",

          correct: false,
        },

        {
          text: "Leonardo Di Caprio",

          correct: false,
        },

        {
          text: "Denzel Washington",

          correct: false,
        },

        {
          text: "Daniel Red Cliff",

          correct: true,
        },
      ],
    },
  ];



  const levels= [

    { id: 1, amount: "$ 100" },

    { id: 2, amount: "$ 200" },

    { id: 3, amount: "$ 300" },

    { id: 4, amount: "$ 500" },

    { id: 5, amount: "$ 1.000" },

    { id: 6, amount: "$ 2.000" },

    { id: 7, amount: "$ 4.000" },

    { id: 8, amount: "$ 8.000" },

    { id: 9, amount: "$ 16.000" },

    { id: 10, amount: "$ 32.000" },

    { id: 11, amount: "$ 64.000" },

    { id: 12, amount: "$ 125.000" },

    { id: 13, amount: "$ 250.000" },

    { id: 14, amount: "$ 500.000" },

    { id: 15, amount: "$ 1.000.000" },

  ].reverse()
   const resultLevels=[...levels].reverse()




  return (
    <div className="main">
      <section className="quiz">
        
        <Timer endTime={endTime} questionNumber={questionNumber}  data={data} setEndTime={setEndTime} resultLevels={resultLevels}/>
        
        <div className="quiz-container">
          <Trivia data={data} endTime={endTime} setEndTime={setEndTime} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
          
        </div>
      </section>
      <section className="levels">
        <ul className="levels-col">
           {levels.map(level=>{
            return(
               <li className={questionNumber===level.id?"level-active":"level"}  >
                  <span>{level.id}</span>
                  <span>{level.amount}</span>

               </li>
              )
           })}
       </ul>
      </section>
    </div>
  );
}

export default App;
