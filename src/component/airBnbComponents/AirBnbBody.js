import React from "react";
import firstParaPic from "../../images/Frame1.png"


export default function AirBnbBody() {
    return (
        <wraper className="body-nav">
            <img src={firstParaPic} className="para-pic-1" />

            <h1 className="airbnb-intro-title">Online Experiences</h1>
            <div className="airbnb-intro-des">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </div>
        </wraper>
    )
}