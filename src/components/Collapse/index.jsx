import { useState, useRef, useEffect } from "react"; //On importe des hooks de base react
import Chevron from "../../assets/vector-bas.svg";
import '../Collapse/index.css'

 function Collapse(props) {
	const [toggle, setToggle] = useState(false); // On definit le state du toggle (et false par défaut)
	const [heightEl, setHeightEl] = useState(); // On definit le state de la hauteur du collapse

	const toggleState = () => {
		//On definit la fonction toggleState qui modifie la valeur toggle au clic
		setToggle(!toggle);
	};

	const refHeight = useRef(); // On récupère et conserve la valeur de hauteur du collapse déplié

	useEffect(() => {
		setHeightEl(`${refHeight.current.scrollHeight}px`); //useEffect s'éxécute au montage du composant, dans ce cas, il définit la hauteur du collapse déplié lors de sa première ouverture et la conserve dans refHeight
	}, []);

	return (
		// affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
		<div className={`collapse ${props.aboutStyle}`}>
			<div onClick={toggleState} className="collapse__visible">
				<h2>{props.aboutTitle}</h2>
				<img
					className={toggle ? "chevron rotated" : "chevron"}
					src={Chevron}
					alt="chevron"
				/>
			</div>
			<div
				ref={refHeight}
				className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
				style={{ height: toggle ? `${heightEl}` : "0px" }}
			>
				<p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>
			</div>
		</div>
	);
}
export default Collapse;