import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpperClick = ()=>{
            console.log("Convert into uppercase" + text)
            let newText = text.toUpperCase();
            setText(newText)
            // setText("You have clicked on uppercase ")
            props.showAlert("Upper case converted !","success");
    }
    const handleLowerClick = ()=>{
        console.log("calling lower case function");
        let newLowerText = text.toLowerCase();
        setText(newLowerText)
        props.showAlert("Lower case converted !","success")
    }
    const handleClearClick = ()=>{
        let clearText = '';
        setText(clearText)
        props.showAlert("Text cleared !","success")
    }
    const handleonChange = (event)=>{
        console.log("handle on chage")
        setText(event.target.value)
    }
    const handleCopyClick = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied !","success")
    }
    const handleSpaceClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed !","success")

    }
    const [text,setText] = useState("Enter the text here");

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpperClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>CopyText</button>
            <button className="btn btn-primary mx-2" onClick={handleSpaceClick}>Remove extra spaces</button>

        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} <b>words</b> and {text.length} <b>characters</b></p>
            <p>{0.008 * text.split(" ").length} <b>Minutes read</b></p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Please Enter something in the above text box to preview here..'}</p>
        </div>
        </>
    )
}


