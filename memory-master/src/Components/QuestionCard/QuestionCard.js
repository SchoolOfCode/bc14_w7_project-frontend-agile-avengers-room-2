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
  if (filteredArray[questionNum] !== undefined) {
    console.log(`filteredArray is populated.`);
    console.log(`questionNum is currently ${questionNum}`);
    console.log(filteredArray);
    filteredQuestion = filteredArray[questionNum].Question;
    console.log(`filteredQuestion now = ${filteredQuestion}`);
    filteredAnswer = filteredArray[questionNum].Answer;
    console.log(`filteredAnswer now = ${filteredAnswer}`);
    filteredSubject = filteredArray[questionNum].Subject;
    console.log(`filteredSubject now = ${filteredSubject}`);
    filteredKey = filteredArray[questionNum].key;
    console.log(`filteredKey now = ${filteredKey}`);
  }

  function calculateNewQuestionNum() {
    // After deleting an object, we need to set questionNum to an appropriate number, e.g. itself - 1 (unless we're deleting the first question, which case we can leave the questionNum the way it is).
    if (questionNum !== 0) {
      setQuestionNum(questionNum - 1);
    }
    console.log(`questionNumber is now ${questionNum}`);

    // else {
    //   setQuestionNum(-1)
    // }

    // A new problem is that the displayed question number will always be 1 (i.e. when you delete all the questions, the displayed quesion counter will read 1/0 (question 1 out 0)). I think I'll leave this for now.
  }

  return (
    <div className="Question-Card-Div">
      <div className="inside-Question-Card-Div">
        <div className="Question-Div">
          <div className="Subject-div">
            <p className="Subject">Subject: {filteredSubject}</p>
          </div>
          <p className="Question-P">Question: {filteredQuestion}</p>
          
          <div className="Delete-And-Answer-Button-Div">
          <button
            className="Delete-Button"
            onClick={() => {
              deleteObject(filteredKey, filteredSubject);
              calculateNewQuestionNum();
            }}
          >
            {" "}
            Delete Question
          </button>
        
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
            <div className="outside-Next-and-Prev">
              <div className="Next-and-Prev">
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
            </div>
      </div>
    </div>
  );
}

export default QuestionCard;
