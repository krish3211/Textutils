import React, { useState } from 'react';


export default function TextForm(props) {
    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    
    const handlefirstClick = ()=>{
        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        
        }
        const newText = arr.join(" ");
        setText(newText);
    }
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    } 
    const handleclearClick = ()=>{
       let newText = "";
        setText(newText);
    }

    const handleLoClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const [text, setText] = useState('Enter a text');
    //setText('new text'); //changeing stat value
  return (
    <>
    <div className="container mb-3" style={{color : props.mode==='dark' ? 'white' : '#020729'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control"style={{backgroundColor : props.mode==='dark' ? 'gray' : 'white' , color : props.mode==='dark' ? 'white' : '#020729'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handlefirstClick}>1st letter UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>clear</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark' ? 'white' : '#020729'}}>
        <h1>Your Text Summary</h1>
        <label>{text.length === 0 ? 0 : text.split(" ").length} words and  {text.length} characters</label>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
  </>
  )
}
