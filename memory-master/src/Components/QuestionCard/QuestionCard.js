function QuestionCard({filteredArray}) {
  console.log(filteredArray);
  let filteredQuestion = "";
  let filteredAnswer = "";
  if(filteredArray.length !== 0){
    filteredQuestion = filteredArray[0].Question
    filteredAnswer = filteredArray[0].Answer
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
      <button className="Previous-Card-Button">Previous Card</button>
      <button className="Next-Card-Button">Next Card</button>
    </div>
  );
}

export default QuestionCard;
