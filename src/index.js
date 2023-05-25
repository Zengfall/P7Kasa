import ReactDOM from "react-dom/client";// On importe la bibliothèque ReactDOM qui est utilisée pour rendre les composants React dans le DOM
import { BrowserRouter } from "react-router-dom";// On importe BrowserRouter pour gérer le routage des pages dans une application React.
import App from "./App";//On importe notre app
import  '../src/style/main.css'// la feuille de style



const root = ReactDOM.createRoot(document.getElementById("root"));// On crée une racine (root) pour l'application React en utilisant la méthode createRoot de ReactDOM
root.render(//On render le contenu de 'App'
	<BrowserRouter>
		<App />
	</BrowserRouter>
);