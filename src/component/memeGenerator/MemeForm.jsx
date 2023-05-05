import React, {useState} from "react";
import memeData from "./memeData";

export default function MemeForm() {
    const [url, setUrl] = React.useState("");
    const [memeTextAbove, setMemeTextAbove] = React.useState("");
    const [memeTextBelow, setMemeTextBelow] = React.useState("");

    function getImgUrl() {
        const dataObj = Math.floor(Math.random(memeData.data.memes.length - 1) * 100);
        const urlVal = memeData.data.memes[dataObj].url;
        setUrl(urlVal);
    }

    function changeText(){
        const textAbove = document.getElementsByClassName('text-above')[0].value;
        const textBelow = document.getElementsByClassName('text-below')[0].value;

        setMemeTextAbove(textAbove);
        setMemeTextBelow(textBelow);
    }

    return (
        <div className="text-form">
            <input type="text" className="inner-text text-above" onChange={changeText} placeholder="Input text" />
            <input type="text" className="inner-text text-below" onChange={changeText} placeholder="Input text" />

            <button className="submit-btn" onClick={getImgUrl}>
                Get a new meme image 🖼!
            </button>
            <div className="img-container d-flex justify-content-center">
                <img src={url} alt="meme" className="meme-img img-fluid" />
                <div className="meme-text__above">{memeTextAbove}</div>
                <div className="meme-text__below">{memeTextBelow}</div>
            </div>
        </div>
    );
};
