import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

export default function Footer(){
    return(
        <div className="footer-section">
            <a className="my-profile-link" href="https://twitter.com/Nguync45192622"> <AiOutlineTwitter/> </a>
            <a className="my-profile-link" href="https://www.facebook.com/Nhhd.sayHiToU"> <AiOutlineFacebook/> </a>
            <a className="my-profile-link" href="https://www.instagram.com/yamj.nhhd/"> <AiOutlineInstagram/> </a>
            <a className="my-profile-link" href="https://github.com/nguyenduc2710"> <AiOutlineGithub/> </a>
        </div>
    )
}