import React from "react";
import cat1 from "../assets/img/cat-kitten-pixel-art-pixels.png";
import reactBootstrap from "../assets/img/react-bootstrap.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5,faCss3Alt,faReact, faJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';


export const About = () => {
    return(
        <div className="about mb-5" id="skills">
        <div className="heading">
        <div className="image"><img src={cat1} alt="cat"/></div>
        <h2>Skills</h2>
        </div>
        <div className="about-icons">
        <h1 className="skill"><div className="icon-img"><FontAwesomeIcon icon={faHtml5} style={{color: "#ec5130",}} /></div><h3>HTML</h3></h1>
        <h1 className="skill"><div className="icon-img"><FontAwesomeIcon icon={faCss3Alt} style={{color: "#2d53e5",}} /></div><h3>CSS</h3></h1>
        <h1 className="skill"><div className="icon-img"><FontAwesomeIcon icon={faJs} style={{color: "#f0dc55",}} /></div><h3>JavaScript</h3></h1>
        <h1 className="skill"><div className="icon-img"><FontAwesomeIcon icon={faReact} style={{color: "#08d9ff",}} /></div><h3>React</h3></h1>
        <h1 className="skill"><div className="icon-img"><FontAwesomeIcon icon={faBootstrap} style={{color: "#6F2CF5",}} /></div><h3>Bootstrap</h3></h1>
        <h1 className="skill"><div className="icon-img"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" alt="NodeJs" /></div><h3>NodeJs</h3></h1>
        <h1 className="skill"><div className="icon-img rb"><img src={reactBootstrap} alt="react-bootstrap" /></div><h3>React Bootstrap</h3></h1>
        </div>
      </div>
    )

}