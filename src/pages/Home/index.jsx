import React from "react";
import "./index.css";
import Banniere from "../../components/Banner/index";
import backgroundBanner from "../../assets/background-banner.png";
import { NavLink } from "react-router-dom";
import Card from "../../components/Card/index.jsx";
import logements from "../../datas/logements.json";

function Home() {//On itére par la méthode map sur la liste de logements pour extraires les données de ces derniers//
    return(  // Les balises Navlink permettent la navigation vers la page de détails du logement correspondant lorsque l'utilisateur clique sur une carte.
        <div className="Accueil">
            <Banniere image={backgroundBanner} texte="Chez vous, partout et ailleurs"/>
            <div className="liste-logements"> 
                {logements.map((logement) => <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}><Card key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>)}
            </div>
        </div>
    );
}

export default Home;