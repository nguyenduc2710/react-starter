import React from "react"
import { AiTwotoneMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import ViperChibi from '../../images/Viper.jpg'

export default function Info(){
    return(
        <div className="info-section">
            <img src={ViperChibi} className="my-pic" alt="viper chibi" />
            <div className="myself-info">
                <h2 className="my-name">Nguyễn Đức</h2>
                <h4 className="my-carrer">Front-end Dev</h4>
                <div className="my-web">Yamj.website</div>
            </div>
            <div className="work-contact">
                <button className="button email-button">
                    <AiTwotoneMail className="work-contact-icon"/>
                    Email
                </button>
                <button className="button Linkedln-button">
                    <AiOutlineLinkedin className="work-contact-icon"/>
                    Linkedin
                </button>
            </div>
        </div>
    )
}