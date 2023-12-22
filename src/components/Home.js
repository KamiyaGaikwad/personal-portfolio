import React from "react";
import cat1 from "../assets/img/cat-kitten-pixel-art-pixels.png";

export const Home = () => {
    return(
        <div className="home">
        <div className="image"><img src={cat1} alt="cat"/></div>
        <div className="content">
            <h4>Hi, I am Kamiya Gaikwad</h4>
            <h4>I am a Frontent Developer</h4>
        </div>
      </div>
    )

}