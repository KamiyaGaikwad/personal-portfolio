import React from "react";
import { NavItem, Nav, NavLink } from "react-bootstrap";
import cat1 from "../assets/img/cat-kitten-pixel-art-pixels.png";

export const VerticalNavBar = () => {
    return(
        <div className="vertical-nav">
            <div className="circle"><img src={cat1} alt="cat"/><p>Home</p></div>
            <div className="line"></div>
            <div className="circle"><img src={cat1} alt="cat"/><p>About</p></div>
            <div className="line"></div>
            <div className="circle"><img src={cat1} alt="cat"/><p>Projects</p></div>
            <div className="line"></div>
            <div className="circle"><img src={cat1} alt="cat"/><p>Experience</p></div>
        </div>

    )

}