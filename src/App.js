import { Routes, Route } from "react-router-dom";// On importe nos routes
import Home from "./pages/Home";
import About from "./pages/About"; // On importe nos pages et components
import Header from "./components/Header";
import Logement from "./pages/Fiche-Logement";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import React, { useEffect } from 'react';// On importe React et le hook useEffect

//On définit le composant App//
function App() {
	useEffect(() => {
    document.title = "Kasa";
  }, []);
	return (
		<div className="App">
			<Header />
			<main>  
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/logement/:id" element={<Logement />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;