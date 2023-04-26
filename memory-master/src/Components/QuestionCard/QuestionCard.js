import React from "react";
//import "./QuestionCard.css";
import { useState } from "react";

function QuestionCard({ filteredArray }) {
  const [questionNum, setQuestionNum] = useState(0);

  console.log(filteredArray);
  let filteredQuestion = "";
  let filteredAnswer = "";
  if (filteredArray.length !== 0) {
    filteredQuestion = filteredArray[questionNum].Question;
    filteredAnswer = filteredArray[questionNum].Answer;
  }
  return (
    <div className="Question-Card-Div">
      <div className="Question-Div">
        <p className="Question-P">Question: {filteredQuestion}</p>
        <button className="Delete-Button"> Delete Question</button>
        <div className="Subject-And-Answer-Button-Div">
          <p className="Subject">Subject</p>
          <button className="Answer-Button">Reveal Answer</button>
        </div>
      </div>
      <div className="Answer-Div">
        <p className="Answer-P">Answer: {filteredAnswer}</p>
        <p className="How-Did-You-Do">How did you do?</p>

        <button className="Thumbs-Up"> 👍🏻</button>
        <button className="Straight-Face"> 😐</button>
        <button className="Thumbs-Down"> 👎🏻</button>
      </div>
      <button
        className="Previous-Card-Button"
        onClick={() => {
          questionNum !== 0 && setQuestionNum(questionNum - 1);
        }}
      >
        Previous Card
      </button>

      <p style={{ fontWeight: "bold" }}>
        {questionNum + 1} / {filteredArray.length}
      </p>
      <button
        className="Next-Card-Button"
        onClick={() => {
          questionNum !== filteredArray.length - 1 &&
            setQuestionNum(questionNum + 1);
        }}
      >
        Next Card
      </button>
    </div>
  );
}

export default QuestionCard;
