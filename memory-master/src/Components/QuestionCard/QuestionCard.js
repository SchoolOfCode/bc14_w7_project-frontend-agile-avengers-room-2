function QuestionCard() {
  return (
    <div className="Question-Card-Div">
      <div className="Question-Div">
        <p className="Question-P">Question:</p>
        <div className="Subject-And-Answer-Button-Div">
          <p className="Subject">Subject</p>
          <button className="Answer-Button">Answer</button>
        </div>
      </div>
      <div className="Answer-Div">
        <p className="Answer-P">Answer:</p>
        <p className="How-Did-You-Do">How did you do?</p>
      </div>
      <button className="Previous-Card-Button">Previous Card</button>
      <button className="Next-Card-Button">Next Card</button>
    </div>
  );
}

export default QuestionCard;
