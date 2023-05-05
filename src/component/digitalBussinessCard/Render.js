import React from "react";
import Info from "./component/digitalBussinessCard/Info";
import About from "./component/digitalBussinessCard/About";
import Interest from "./component/digitalBussinessCard/Interest";
import Footer from "./component/digitalBussinessCard/Footer";

export default function App() {
    return (
        <div className="wrapper">
            <div className="digital-bussiness-card">
                <Info />
                <About />
                <Interest />
                <Footer />
            </div>
        </div>
    )
}

