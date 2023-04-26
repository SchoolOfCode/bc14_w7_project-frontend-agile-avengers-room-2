import "./App.css";
import Form from "../Form/Form";
import QuestionCard from "../QuestionCard/QuestionCard";
import SubjectCard from "../SubjectCard/SubjectCard";
import { useState } from "react";

/* Plan for MVP
- The user will be presented with a form in which they select from a list of hard-coded subjects, in which the subsequent flash cards will be grouped.
- To add a new flash card to the group/topic they enter a question and an answer and click submit, at which point they will be prompted, "Card successfully added to ${subject}. Click on the subject to test yourself on it!"
- When the user has finished and clicked submit, the app will display the group of cards in a list. The user can then open the group by clicking on it. At which point, the first question will display.
- When the user has answered the Q in their heads, they click the "flip" button, which will reveal the answer.
- They then honestly log if they got the question right (2 points), wrong (0 points), or partly right (1 point).
*/

const subjectList = [
  //hard coded list of subjects
  "Computational Thinking",
  "JavaScript",
  "Testing",
  "React.js",
  "APIs",
  "JS on the DOM",
  "Node and Express",
  "Databases and SQL",
  "TypeScript",
];

const initialQuestionsAndAnswers = [
  //hard coded questions and answers
  {
    key: 1,
    Subject: "React.js",
    Question: "What language do you use to create components in React?",
    Answer: "JSX",
  },
  {
    key: 2,
    Subject: "Javascript",
    Question: "What would the code {} === {} resolve to?",
    Answer: "Undefined",
  },

  {
    key: 3,
    Subject: "React.js",
    Question: "What is a useState?",
    Answer: "A way to store variables in React",
  },
  {
    key: 4,
    Subject: "Javascript",
    Question: "What is an array?",
    Answer: "stores data",
  },
];

function App() {
  //created state variables
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState(
    initialQuestionsAndAnswers
  );

  // questionsAndAnswers is an array of objects, each object contains a question and answer, unique key, and subject
  const [currentSubject, setCurrentSubject] = useState(""); //currentSubject is a string, which will be the subject of the current card being displayed
  const [numberOfQuestions, setNumberOfQuestions] = useState(0); //May or may require this, as we can potentially find the number of cards in a specified subject using .length or similar methods. But it may be useful to have a count of the number of cards in a subject, so we can display it to the user.
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(subjectList[0]);
  const [filteredArray, setFilteredArray] = useState([]);
  //submit button
  function addObject(subject, question, answer) {
    //gets what is in the text fields and appends to the questionsAndAnswers Array
    // To capture what is in the text field and the drop down
    // create state variables, question answer and subject ✅
    // store question answer and subject onChange in the state varibales✅
    // When the submit button is clicked we want want this function to run which will ...
    // take the state variables and set the questions and answers array to its self + the new object
    const newArray = [
      ...questionsAndAnswers,
      {
        key: questionsAndAnswers.length + 1,
        Subject: subject,
        Question: question,
        Answer: answer,
      },
    ];

    setQuestionsAndAnswers(newArray);
    // The key of the new object will be (array.length + 1)
    // console.log(questionsAndAnswers);

    // To do: Call a function which clears the question and answer text areas.
  }

  function storeQuestionInput(event) {
    setNewQuestion(event.target.value);
    // console.log(newQuestion);
  }

  function storeAnswerInput(event) {
    setNewAnswer(event.target.value);
    // console.log(newAnswer);
  }

  function storeSubjectInput(event) {
    // console.log(event);
    // console.log(event.target.value)
    setSelectedSubject(event.target.value);
    // console.log(selectedSubject);
  }

  function deleteObject(key, subject) {
    // when we click the delete button, it deletes the object with that specific key from the questionsAndAnswers array.
    // this function will take in a key as an input
    // we will declare a new array and use .filter to determin whether the item has that key.
    // if it doesnt have that key then populate the new array
    // set questionsAndAnswers array to new array.
    console.log(subject)
    let newArray = questionsAndAnswers.filter((item) => item.key !== key);
    // console.log(newArray);
    setQuestionsAndAnswers(newArray);
    
    //Now, run displayQuestion(subject) again.
    displayQuestion(subject)
  }

  //Components/PROPS to pass through
  // questionsAndAnswers as this will contains array of objects whith Question, answers, id and subject. SubjectCard component and QuetionCard component [...array]

  //toDo: add an answer component

  function displayQuestion(subject) {
    // We are going to use filter() (questionAndAnswer.filter((item)=>{})) and we will store in a new array variable
    console.log(subject);
    console.log(questionsAndAnswers)
    setFilteredArray(
      questionsAndAnswers.filter((item) => {
        if (item.Subject === subject) {
          return true;
        }
      })
      
    );
    console.log(filteredArray)
    // console.log(filteredArray);
    // return filteredArray;
    // Callback function will return if item.subject === subject
    // Result should be a filtered questionAndAnswer Array
    // Return new array and pass to QuestionCard as a prop
    // Inside QuestionCard.js we are going to display the first question (index[0])
  }

  return (
    <main>
      <h1>Memory Masters</h1>
      <Form
        subjectList={subjectList}
        storeQuestionInput={storeQuestionInput}
        storeAnswerInput={storeAnswerInput}
        storeSubjectInput={storeSubjectInput}
        addObject={() => {
          addObject(selectedSubject, newQuestion, newAnswer);
        }}
      />
      {subjectList.map((item) => {
        return <SubjectCard subject={item} displayQuestion={displayQuestion} />;
      })}
      <QuestionCard filteredArray={filteredArray} deleteObject={deleteObject} />
    </main>
  );
}

export default App;
