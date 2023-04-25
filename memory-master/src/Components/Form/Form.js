

function Form({subjectList}) {
    return(
    <div className="Form-div">
        <h3>FlashCard Generator</h3>
        <label>Subject</label>
        <select name="cars" id="cars">
            {subjectList.map((item)=>{
                return (<option value="item">{item}</option>)
            })} 
        
</select>
    </div>)
}

export default Form