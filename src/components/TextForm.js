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
        // console.log("handle on chage")
        setText(event.target.value)
    }
    const handleCopyClick = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied !","success")
    }
    const handleSpaceClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed !","success")

    }
    const [text,setText] = useState("");

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpperClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>CopyText</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpaceClick}>Remove extra spaces</button>

        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <b>words</b> and {text.length} <b>characters</b></p>
            <p>{0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} <b>Minutes read</b></p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Nothing to preview here..'}</p>
        </div>
        </>
    )
}


