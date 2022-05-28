import React, { useState } from 'react';
export default function TestForm(props) {
    function handleUpClick() {
        // console.log("UpperCase was clicked on " + text);
        let new_text = text.toUpperCase();
        setText(new_text);
        props.showAlert("Converted to uppercase", "success");
    }
    function handleLowClick() {
        let new_text = text.toLowerCase();
        setText(new_text);
        props.showAlert("Converted to lowercase", "success");
    }
    function handleOnChange(event) {
        setText(event.target.value);
        // console.log("On change");
    }
    function colorChange(e) {
        const textar = document.querySelector('#myBox');
        textar.style.color = e.target.value;
        // console.log(textar.style.color);
        const headChange = document.querySelector(".head");
        // console.log(headChange);
        headChange.style.color = e.target.value;
        textar.classList.remove(`text-${props.mode === "dark" ? "light" : "dark"}`)
        headChange.classList.remove(`text-${props.mode === "dark" ? "light" : "dark"}`)
        props.showAlert("Color changed", "success")
    }
    function handleExtraSpace() {
        let new_text = text.split(/[ ]+/);
        setText(new_text.join(" "));
        props.showAlert("Removed extra spaces", "success");
    }
    const [text, setText] = useState("");
    //varible //updation fn

    // text="ffdsfsdsdsd"; //wrong way to change the state
    // setText("kdfcssdsd");  //correct way to change the text
    function wordCount() {
        const arr2 = text.split("");
        for (let i = 0; i < arr2.length; i++) {
            if (arr2[i] === "\n") {
                arr2[i] = " ";
            }
        }
        let new_text = arr2.join("");
        const arr = new_text.split(" ");
        const new_txt = arr.filter(function (text) {
            if (text.length === 0) {
                return false;
            }
            return true;
        })

        return new_txt.length;

    }
    function charCount() {
        const arr2 = text.split("");
        const new_txt = arr2.filter(function (text) {
            if (text.length === 0 || text === " " || text === "\n") {
                return false;
            }
            return true;
        })

        return new_txt.length;


    }
    return (
        <>
            <div>
                <h1 className={`head text-${props.mode === "dark" ? "light" : "dark"}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`} id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button disabled={charCount()===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={charCount()===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={charCount()===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>Remove Extra Spaces</button>
                <input type="color" id='colorBox' className='mx-2 my-1' onChange={colorChange}></input>
            </div>
            <div className={`container my-2 text-${props.mode === "light" ? "dark" : "light"}`}>
                <h2>Your test Summary</h2>
                <p>{wordCount()} words, {charCount()} characters</p>
                <p>Time to read: {wordCount() / 125} minutes</p>
                <h2>Preview</h2>
                <p>{wordCount() > 0 ? text : "Enter something in the box to see preview"}</p>
            </div>
        </>
    )
}
