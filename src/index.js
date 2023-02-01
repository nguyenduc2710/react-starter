import React from "react"
import ReactDOM from "react-dom"
import './index.css'
import Players from "./component/Player";
import Navigation from "./component/Navigation";


function App(){
    return(
        <div className="big-container">
            <Navigation />
            <Players />
        </div>
    )
} 

ReactDOM.render(<App />, document.getElementById('root'));
