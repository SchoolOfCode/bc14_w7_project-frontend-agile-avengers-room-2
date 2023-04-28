import "./App.css";
import Form from "../Form/Form";
import QuestionCard from "../QuestionCard/QuestionCard";
import SubjectCard from "../SubjectCard/SubjectCard";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";

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
  "Javascript",
  "Testing",
  "React.js",
  "APIs",
  "JS on the DOM",
  "Node and Express",
  "Databases and SQL",
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
  {
    key: 5,
    Subject: "Computational Thinking",
    Question: "What is an algorithm?",
    Answer: "A set of instructions to solve a problem",
  },
  {
    key: 6,
    Subject: "Computational Thinking",
    Question: "What is a variable?",
    Answer: "A way to store data",
  },
  {
    key: 7,
    Subject: "Computational Thinking",
    Question: "What is computational thinking?",
    Answer:
      "Computational thinking is using techniques to help us solve complex problems. Programming is giving instructions to a computer.",
  },
  {
    key: 8,
    Subject: "Javascript",
    Question: "What is a function?",
    Answer: "A block of code that can be called",
  },
  {
    key: 9,
    Subject: "Testing",
    Question: "What is TDD?",
    Answer: "Test Driven Development",
  },
  {
    key: 10,
    Subject: "Testing",
    Question: "What is a unit test?",
    Answer: "A test that tests a small unit of code",
  },
  {
    key: 11,
    Subject: "React.js",
    Question: "What is a component?",
    Answer: "A reusable piece of code",
  },
  {
    key: 12,
    Subject: "React.js",
    Question: "What is a prop?",
    Answer: "A way to pass data between components",
  },
  {
    key: 13,
    Subject: "React.js",
    Question: "What is a state?",
    Answer: "A way to store data in React",
  },
  {
    key: 14,
    Subject: "APIs",
    Question: "What is an API?",
    Answer: "Application Programming Interface",
  },
  {
    key: 15,
    Subject: "APIs",
    Question: "What is a GET request?",
    Answer: "A request to get data from an API",
  },
  {
    key: 16,
    Subject: "APIs",
    Question: "What is a POST request?",
    Answer: "A request to post data to an API",
  },
  {
    key: 17,
    Subject: "JS on the DOM",
    Question: "What is the DOM?",
    Answer: "Document Object Model",
  },
  {
    key: 18,
    Subject: "JS on the DOM",
    Question: "What is an event listener?",
    Answer: "A way to listen for events",
  },
  {
    key: 19,
    Subject: "JS on the DOM",
    Question: "What is an event handler?",
    Answer: "A function that handles an event",
  },
  {
    key: 20,
    Subject: "Node and Express",
    Question: "What is Node.js?",
    Answer: "A runtime environment for Javascript",
  },
  {
    key: 21,
    Subject: "Node and Express",
    Question: "What is Express.js?",
    Answer: "A framework for Node.js",
  },
  {
    key: 22,
    Subject: "Databases and SQL",
    Question: "What is a database?",
    Answer: "A place to store data",
  },
  {
    key: 23,
    Subject: "Databases and SQL",
    Question: "What is SQL?",
    Answer: "Structured Query Language",
  },
  {
    key: 24,
    Subject: "Databases and SQL",
    Question: "What is a table?",
    Answer: "A way to store data in a database",
  },

  {
    key: 25,
    Subject: "Node and Express",
    Question: "What is a server?",
    Answer: "A computer that serves data",
  },
];

function App() {
  //created state variables
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState(
    initialQuestionsAndAnswers
  );

  useEffect(() => {
    displayQuestion(currentSubject);
  }, [questionsAndAnswers]);

  // questionsAndAnswers is an array of objects, each object contains a question and answer, unique key, and subject
  const [currentSubject, setCurrentSubject] = useState(""); //currentSubject is a string, which will be the subject of the current card being displayed
  // const [numberOfQuestions, setNumberOfQuestions] = useState(0); //May or may require this, as we can potentially find the number of cards in a specified subject using .length or similar methods. But it may be useful to have a count of the number of cards in a subject, so we can display it to the user.
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
    setNewQuestion("");
    setNewAnswer("");
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
    //console.log(subject);
    console.log("key and subject: ", key, subject);
    let newArray = questionsAndAnswers.filter((item) => item.key !== key);
    console.log(newArray);
    setQuestionsAndAnswers(newArray);
    console.log(questionsAndAnswers);

    //update the state based on the previous state using the updater function
    // setQuestionsAndAnswers((filteredArray) => {
    //   return filteredArray.filter((item) => item.key !== key);
    // });
    // let newFilteredArray = questionsAndAnswers.filter(
    //   (item) => item.Subject !== subject
    // );
    // console.log("new filtered array ", newFilteredArray);
    // setFilteredArray(newFilteredArray);

    //Now, run displayQuestion(subject) again.
    // displayQuestion(subject);
  }

  //Components/PROPS to pass through
  // questionsAndAnswers as this will contains array of objects whith Question, answers, id and subject. SubjectCard component and QuetionCard component [...array]

  function displayQuestion(subject) {
    // We are going to use filter() (questionAndAnswer.filter((item)=>{})) and we will store in a new array variable
    console.log(subject);
    console.log(questionsAndAnswers);
    setFilteredArray(
      questionsAndAnswers.filter((item) => item.Subject === subject)
    );

    console.log(filteredArray);
    // console.log(filteredArray);
    // return filteredArray;
    // Callback function will return if item.subject === subject
    // Result should be a filtered questionAndAnswer Array
    // Return new array and pass to QuestionCard as a prop
    // Inside QuestionCard.js we are going to display the first question (index[0])
  }

  return (
    <main className="main">
      <h1>🧠 Memory Master 🧠</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Form
            subjectList={subjectList}
            storeQuestionInput={storeQuestionInput}
            storeAnswerInput={storeAnswerInput}
            storeSubjectInput={storeSubjectInput}
            addObject={() => {
              addObject(selectedSubject, newQuestion, newAnswer);
            }}
            newQuestion={newQuestion}
            newAnswer={newAnswer}
          />
        </Grid>
        <Grid item xs={12} md={8} container spacing={2}>
          {subjectList.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <SubjectCard
                  setCurrentSubject={setCurrentSubject}
                  subject={item}
                  displayQuestion={displayQuestion}
                />
              </Grid>
            );
          })}
          <Grid item md={12}>
            <QuestionCard
              filteredArray={filteredArray}
              deleteObject={deleteObject}
            />
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}

export default App;
