import React from "react";
import cat1 from "../assets/img/cat-kitten-pixel-art-pixels.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5,faCss3Alt,faReact, faJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';


export const About = () => {
    return(
        <div className="about">
        <div className="heading">
        <div className="image"><img src={cat1} alt="cat"/></div>
        <h2>About</h2>
        </div>
        <div className="about-icons">
        <h1><FontAwesomeIcon icon={faHtml5} style={{color: "#ec5130",}} /></h1>
        <h1><FontAwesomeIcon icon={faCss3Alt} style={{color: "#2d53e5",}} /></h1>
        <h1><FontAwesomeIcon icon={faJs} style={{color: "#f0dc55",}} /></h1>
        <h1><FontAwesomeIcon icon={faReact} style={{color: "#08d9ff",}} /></h1>
        <h1><FontAwesomeIcon icon={faBootstrap} style={{color: "#6F2CF5",}} /></h1>
        </div>
      </div>
    )

}