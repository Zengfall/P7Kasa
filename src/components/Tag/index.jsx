import React from "react";
import "./index.css";

function Tag({nom}) { // on définit l'objet nom comme prop//
    return(
        <span className="tag">{nom}</span>
    );
}

export default Tag;