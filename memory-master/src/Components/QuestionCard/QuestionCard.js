import React from "react";
//import "./QuestionCard.css";
import { useState } from "react";

function QuestionCard({ filteredArray, deleteObject }) {
  console.log(`QuestionCard Rendered`);
  const [questionNum, setQuestionNum] = useState(0);
  const [revealAnswer, setRevealAnswer] = useState(false);

  // console.log(filteredArray);
  let filteredQuestion = "";
  let filteredAnswer = "";
  let filteredSubject = "";
  let filteredKey = "";
  if (filteredArray.length !== 0) {
    filteredQuestion = filteredArray[questionNum].Question;
    filteredAnswer = filteredArray[questionNum].Answer;
    filteredSubject = filteredArray[questionNum].Subject;
    filteredKey = filteredArray[questionNum].key;
  }
  return (
    <div className="Question-Card-Div">
      <div className="Question-Div">
        <p className="Question-P">Question: {filteredQuestion}</p>
        <button
          className="Delete-Button"
          onClick={() => {
            deleteObject(filteredKey, filteredSubject);
          }}
        >
          {" "}
          Delete Question
        </button>
        <div className="Subject-And-Answer-Button-Div">
          <p className="Subject">Subject: {filteredSubject}</p>

          <button
            className="Answer-Button"
            onClick={() => setRevealAnswer(!revealAnswer)} //toggle to show answer
          >
            Reveal Answer
          </button>
        </div>
      </div>

      {revealAnswer && ( //if revealAnswer is true, show the answer
        <div className="Answer-Div">
          <p className="Answer-P">Answer: {filteredAnswer}</p>
          <p className="How-Did-You-Do">How did you do?</p>

          <button className="Thumbs-Up"> 👍🏻</button>
          <button className="Straight-Face"> 😐</button>
          <button className="Thumbs-Down"> 👎🏻</button>
        </div>
      )}

      <button
        className="Previous-Card-Button"
        onClick={() => {
          setRevealAnswer(false);
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
          setRevealAnswer(false);
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
