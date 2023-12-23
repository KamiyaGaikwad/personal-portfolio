import React from "react";
import cat1 from "../assets/img/cat-kitten-pixel-art-pixels.png";
import pic from "../assets/img/Kamiya.jpg";

export const Home = () => {
    return(
        <div className="home" id="home">
        <div className="image"><img src={pic} alt="cat"/></div>
        <div className="content">
            <h4>Hi, I am Kamiya Gaikwad</h4>
            <h4>I am a Frontent Developer</h4>
        </div>
      </div>
    )

}