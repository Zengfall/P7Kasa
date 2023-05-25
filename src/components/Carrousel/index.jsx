import { useState } from "react";
import fleche from "../../assets/Fleche.png";
import "./index.css";


 function Carrousel({images}) {
    /* Crée un Hook d'état */
    let [imgAfficher, changerImg] = useState(0); // On initialise la variable imgAfficher (qui définit l'img à afficher) à zéro//
    let nombreImg = images.length;

    const imgPrecedente = () => {
        if(imgAfficher === 0) { // On vérifie si l'img actuelle est à zéro//
            changerImg(nombreImg - 1);// Si c'est le cas, on change l'indice de l'image à afficher en affectant la valeur nombreImg - 1 à la variable d'état changerImg. //
        } else {//Sinon la fonction diminue simplement l'indice de l'image à afficher de 1 en utilisant imgAfficher - 1 //
            changerImg(imgAfficher - 1);//et met à jour la variable d'état changerImg.//
        }
        return(changerImg);
    };  

    const imgSuivante = () => {
        if(imgAfficher === nombreImg - 1) {// On commence par vérifier si l'image actuellement affichée est la dernière image//
            changerImg(nombreImg = 0);//Si c'est le cas on maj la varriable pour afficher la first img en affectant 0 à nombreImg//
        } else {
            changerImg(imgAfficher + 1); // Si l'img affichée n'est pas la dernière on incrémente imagAfficher +1 et maj 'changerImg'//
        }
        return(changerImg);
    };

    return(// Si le nmbre d'img > 1 on affiche les fléches//
        <div className="carrousel"> 
            {nombreImg > 1 && <img className="fleche fleche-gauche" src={fleche} alt="Contenu précedént" onClick={imgPrecedente}/>}
            <div className="carrousel-images">
                <div className="image-nombre">{imgAfficher + 1}/{nombreImg}</div>
                {images.map((image, index) => {//On parcourt le tableau pour afficher les détails d'image//
                    return(// Si l'indice est égal à imgAfficher, alors la classe sera carrousel-img actif, sinon la classe sera simplement carrousel-img.//
                        <img key={index} className={index === imgAfficher ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Logement"/>
                    )
                })}
            </div>
            {nombreImg > 1 && <img className="fleche fleche-droite" src={fleche} alt="Contenu suivant" onClick={imgSuivante}/>}
        </div>
    );
}

export default Carrousel;