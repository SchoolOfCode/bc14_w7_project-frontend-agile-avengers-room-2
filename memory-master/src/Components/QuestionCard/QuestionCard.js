function QuestionCard() {
  return (
    <div className="Question-Card-Div">
      <div className="Question-Div">
        <p className="Question-P">Question: What is 5 * 5? </p>
        <button className="Delete-Button"> Delete Question</button>
        <div className="Subject-And-Answer-Button-Div">
          <p className="Subject">Subject</p>
          <button className="Answer-Button">Reveal Answer</button>
        </div>
      </div>
      <div className="Answer-Div">
        <p className="Answer-P">Answer: 25</p>
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
