
/* - Set a hardcoded array for the subjects that we want to show within the SubjectCard 'tiles' (subjectList). This will be held in app.js.✅ 
- For each item in the array, we want to return a button.✅ 
- Use the .map() method to iterate over the subjectList array and output a SubjectCard component for each index. ✅ 
- Still to do: Define function for button clicks.
*/


function SubjectCard ({subject}) {
    return (
    <div className="Subject-Card-div">
    <button>{subject}</button>

    </div>)
}
export default SubjectCard
