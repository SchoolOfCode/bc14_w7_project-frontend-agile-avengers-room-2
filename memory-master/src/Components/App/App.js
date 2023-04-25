import "./App.css";
import Form from "../Form/Form";
import QuestionCard from "../QuestionCard/QuestionCard";
import SubjectCard from "../SubjectCard/SubjectCard";

/* Plan for MVP
- The user will be presented with a form in which they select from a list of hard-coded subjects, in which the subsequent flash cards will be grouped.
- To add a new flash card to the group/topic they enter a question and an answer and click submit, at which point they will be prompted, "Card successfully added to ${subject}. Click on the subject to test yourself on it!"
- When the user has finished and clicked submit, the app will display the group of cards in a list. The user can then open the group by clicking on it. At which point, the first question will display.
- When the user has answered the Q in their heads, they click the "flip" button, which will reveal the answer.
- They then honestly log if they got the question right (2 points), wrong (0 points), or partly right (1 point).
*/

function App() {
  return (
    <main>
      <h1>Test</h1>
      <Form />
      <SubjectCard />
      <QuestionCard />
    </main>
  );
}

export default App;
