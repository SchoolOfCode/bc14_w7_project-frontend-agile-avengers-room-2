import memoryMasterlogo from "./memoryMasterlogo.png";

function Form({
  subjectList,
  storeQuestionInput,
  storeAnswerInput,
  storeSubjectInput,
  addObject,
}) {
  return (
    <div className="Form-div">
      <h3>FlashCard Generator</h3>
      <label>Subject: </label>
      <select name="Subject" id="Subject" onChange={storeSubjectInput}>
        {subjectList.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
      <div className="question-answer-container">
        {/* Question  - Label and input box*/}
        <label className="question-label"> Question: </label>
        <textarea
          style={{ resize: "none" }}
          type="text"
          className="question-input-field"
          onChange={storeQuestionInput}
        />

        {/* Answer - Label and input box */}
        <label className="answer-label"> Answer: </label>
        <textarea
          style={{ resize: "none" }}
          type="text"
          className="answer-input-field"
          onChange={storeAnswerInput}
        />

        {/* Submit button */}
        <button type="submit" onClick={addObject}>
          Submit
        </button>
      </div>
      <img src={memoryMasterlogo} alt="Memory-Master-Logo" />
    </div>
  );
}

export default Form;
