import React from "react";
import "./index.css";

function Card({id, image, titre}) {
    return(
          
            <div className="card" id={id}>
                <img className="card-image" src={image} alt="card"/>
                <div className="card-dark"></div>
                <span className="card-title">{titre}</span>
            </div>
      
    );
}

export default Card;