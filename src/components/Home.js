import React from "react";
import pic from "../assets/img/Kamiya.jpg";

export const Home = () => {
    return(
        <div className="home" id="home">
        <div className="image"><img src={pic} alt="cat"/></div>
        <div className="content">
            <h4>Hi, I am Kamiya Gaikwad</h4>
            <h4>I am a Frontent Developer</h4>
            <div className="buttons">
            <a className="hmb" href={require("../assets/kamiya_gaikwad_web_development_resume.pdf")} download="kamiya_gaikwad_web_development_resume.pdf">Resume</a>
            <a className="hmb" href="https://github.com/KamiyaGaikwad/" target="_blank">Github</a>
            </div>
        </div>
      </div>
    )

}