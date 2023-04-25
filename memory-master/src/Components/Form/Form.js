function Form({ subjectList }) {
  return (
    <div className="Form-div">
      <h3>FlashCard Generator</h3>
      <label>Subject</label>
      <select name="cars" id="cars">
        {subjectList.map((item) => {
          return <option value="item">{item}</option>;
        })}
      </select>
      <div className="question-answer-container">
        {/* Question  - Label and input box*/}
        <label className="question-label"> Question: </label>
        <input type="text" className="question-input-field" />

        {/* Answer - Label and input box */}
        <label className="answer-label"> Answer: </label>
        <input type="text" className="answer-input-field" />

        {/* Submit button */}
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default Form;
