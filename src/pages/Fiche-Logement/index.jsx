import React from "react";
import { useParams, Navigate } from 'react-router-dom';//useParams permet de récupérer les paramètres de l'URL.'Navigate' permet de naviguer vers une autre page.
import Logements from "../../datas/logements.json";
import Carrousel from "../../components/Carrousel/index";
import Collapse from "../../components/Collapse/index";
import Tag from "../../components/Tag/index";
import Host from "../../components/Host/index";
import Rate from "../../components/Rate/index";
import "./index.css";




function Fiche() {
        /* Récupère la bonne fiche */
    const id = useParams();
    const ficheLogement = Logements.find(logement => logement.id === id.id);

    /* Tags */
    const TagsLogement = ficheLogement?.tags.map((tags, index) => {
        return <Tag key={index} nom={tags} />
    });


    /* Équipements */
    const equipementsLogement = ficheLogement?.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })

  return (
    
        <>
            {
                ficheLogement ? ( // On affiche les informations de la fiche//
                    <div className="Fiche">
                        <Carrousel images={ficheLogement?.pictures}/>
                        <div className="logements-propietaire">
                            <div className="information-logements">
                                <span className="titre-logement">{ficheLogement?.title}</span>
                                <span className="endroit-logement">{ficheLogement?.location}</span>
                                <div className="tags">
                                    {TagsLogement}
                                </div>
                            </div>
                            <div className="rate-host-container">
                                <div className="host-info">
                                  <Host
                                  hostName={ficheLogement?.host.name}
                                  hostPicture={ficheLogement?.host.picture} 
                                  />
                                </div>
                                <div className="Rate">
                                  <Rate score={ficheLogement?.rating} />
                                </div>
                            </div>
                        </div>   
                        <div className="collapse-fiche-container-p1">
					        <Collapse
						        aboutTitle="Description"
						        aboutText={ficheLogement?.description}
					        />
					        <Collapse aboutTitle="Équipements" aboutText={equipementsLogement} />
				        </div>
                    </div>
                ) : <Navigate replace to="/404"/>
            }
        </>
  );
}
export default Fiche;
