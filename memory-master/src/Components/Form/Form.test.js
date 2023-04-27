import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  const subjectList = ["Math", "Science", "History"];
  const storeQuestionInput = jest.fn();
  const storeAnswerInput = jest.fn();
  const storeSubjectInput = jest.fn();
  const addObject = jest.fn();
  const newQuestion = "Test question";
  const newAnswer = "Test answer";

  it("should render the component title", () => {
    render(
      <Form
        subjectList={subjectList}
        storeQuestionInput={storeQuestionInput}
        storeAnswerInput={storeAnswerInput}
        storeSubjectInput={storeSubjectInput}
        addObject={addObject}
        newQuestion={newQuestion}
        newAnswer={newAnswer}
      />
    );
    expect(screen.getByText("FlashCard Generator")).toBeInTheDocument();
  });

  it("should render the subject select element", () => {
    render(
      <Form
        subjectList={subjectList}
        storeQuestionInput={storeQuestionInput}
        storeAnswerInput={storeAnswerInput}
        storeSubjectInput={storeSubjectInput}
        addObject={addObject}
        newQuestion={newQuestion}
        newAnswer={newAnswer}
      />
    );
    //expect(screen.getByLabelText("Subject:")).toBeInTheDocument();
    //expect(screen.getByDisplayValue("Subject: ")).toBeInTheDocument();
    //expect(screen.getAllByRole("Subject: ")).toBeInTheDocument();

    expect(screen.getByText("Subject:")).toBeInTheDocument();
  });

  it("should render the question input field", () => {
    render(
      <Form
        subjectList={subjectList}
        storeQuestionInput={storeQuestionInput}
        storeAnswerInput={storeAnswerInput}
        storeSubjectInput={storeSubjectInput}
        addObject={addObject}
        newQuestion={newQuestion}
        newAnswer={newAnswer}
      />
    );
    expect(screen.getByText("Question:")).toBeInTheDocument();
  });

  it("should render the answer input field", () => {
    render(
      <Form
        subjectList={subjectList}
        storeQuestionInput={storeQuestionInput}
        storeAnswerInput={storeAnswerInput}
        storeSubjectInput={storeSubjectInput}
        addObject={addObject}
        newQuestion={newQuestion}
        newAnswer={newAnswer}
      />
    );
    expect(screen.getByText("Answer:")).toBeInTheDocument();
  });

  it("should render the submit button", () => {
    render(
      <Form
        subjectList={subjectList}
        storeQuestionInput={storeQuestionInput}
        storeAnswerInput={storeAnswerInput}
        storeSubjectInput={storeSubjectInput}
        addObject={addObject}
        newQuestion={newQuestion}
        newAnswer={newAnswer}
      />
    );
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  // it("should call the storeQuestionInput function when the question input field is changed", () => {
  //   const storeQuestionInput = jest.fn();
  //   const storeAnswerInput = jest.fn();
  //   const storeSubjectInput = jest.fn();
  //   const addObject = jest.fn();
  //   const newQuestion = " ";
  //   const newAnswer = " ";

  //   render(
  //     <Form
  //       subjectList={subjectList}
  //       storeQuestionInput={storeQuestionInput}
  //       storeAnswerInput={storeAnswerInput}
  //       storeSubjectInput={storeSubjectInput}
  //       addObject={addObject}
  //       newQuestion={newQuestion}
  //       newAnswer={newAnswer}
  //     />
  //   );

  //   const testQuestion = "test question";
  //   const testAnswer = "test answer";
  //   const testSubject = "Testing";

  //   const subjectSelect = screen.getByLabelText("Subject:");
  //   const questionInput = screen.getByLabelText("Question:");
  //   const answerInput = screen.getByLabelText("Answer:");

  //   fireEvent.change(subjectSelect, { target: { value: testSubject } });
  //   fireEvent.change(questionInput, { target: { value: testQuestion } });
  //   fireEvent.change(answerInput, { target: { value: testAnswer } });
  //   fireEvent.click(screen.getByText("Submit"));
  //   expect(storeQuestionInput).toHaveBeenCalledWith(testQuestion);
  //   expect(storeAnswerInput).toHaveBeenCalledWith(testAnswer);
  //   expect(storeSubjectInput).toHaveBeenCalled();
  //   //expect(storeQuestionInput).toHaveBeenCalled();
  // });

  it("should call the addObject function when the submit button is clicked", () => {
    render(
      <Form
        subjectList={subjectList}
        storeQuestionInput={storeQuestionInput}
        storeAnswerInput={storeAnswerInput}
        storeSubjectInput={storeSubjectInput}
        addObject={addObject}
        newQuestion={newQuestion}
        newAnswer={newAnswer}
      />
    );
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);
    expect(addObject).toHaveBeenCalled();
  });

  it("should render the logo image", () => {
    render(
      <Form
        subjectList={subjectList}
        storeQuestionInput={storeQuestionInput}
        storeAnswerInput={storeAnswerInput}
        storeSubjectInput={storeSubjectInput}
        addObject={addObject}
        newQuestion={newQuestion}
        newAnswer={newAnswer}
      />
    );
    expect(screen.getByAltText("Memory-Master-Logo")).toBeInTheDocument();
  });
});
