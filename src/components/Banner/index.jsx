import React from "react";
import "./index.css";

function Banner({image, texte}) {
    return(
        <div className="banner">
            <img className="banner-img" src={image} alt="Bannière"/>
            <div className="banner-dark"></div>
            <span className="banner-txt">{texte}</span>
        </div>
    );
}

export default Banner;