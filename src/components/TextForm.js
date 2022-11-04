import React, {useState} from 'react'

export default function TextForm(props) {
  
  const Uppercase=()=>{
    // alert("Upper case button selected")
    let newText=text.toUpperCase();
    setText(newText)
   props.showAlert("Converted to Uppercase", "success");

  }
  const Lowercase=()=>{
    // alert("Upper case button selected")
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase", "success");

  }
  const handleCopy=()=>{
    var text=document.getElementById("InputText");
    text.select();
    navigator.clipboard.writeText(text.value);
  props.showAlert("Copied Successfully", "success");

  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" ")) 
 props.showAlert("Extra spaces has been removed", "success");

  }
   const Clear=()=>{
    // alert("Upper case button selected")
    let newText="";
    setText(newText)
     props.showAlert("Cleared successfully", "success");

  }
  const Change=(event)=>{
    
    setText(event.target.value);
  }
   const [text, setText]=useState('Enter text here');

  return (
    <>
     
        <div className="container" style={{color:props.mode==='light'?'black':'white'}} >
            
            <h1 >{props.heading}</h1>
           <form>
  <div className="mb-3">
    {/* <label htmlFor="InputText" className="form-label">Here is the space!</label> */}
            <textarea className="form-control" id="InputText" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#EEEEEE', color: props.mode === 'light' ? 'black' :'#0078AA'}} value={text} onChange={Change} rows="15" aria-describedby="PersonalIdeas"/>
    <div id="PersonalIdeas" className="form-text" >We'll never share your personal issues with anyone else.</div>
  </div>
    <button disabled={text.lenght===0} className="btn btn-primary mx-1 my-1" onClick={Uppercase}>Convert to upper case.</button>
    <button disabled={text.lenght === 0}  className="btn btn-primary mx-1 my-1" onClick={Lowercase}>Convert to Lower case.</button>
    <button disabled={text.lenght === 0} className="btn btn-primary mx-1 my-1" onClick={Clear}>Clear text.</button>
    <button disabled={text.lenght === 0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text.</button>
    <button disabled={text.lenght === 0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces.</button>

  <div className="container my-3"   >
    <h2>Your Text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes are required to read this message.</p>
  </div>
  
  
  
            </form>
        </div>
  </>
   
  )
}
