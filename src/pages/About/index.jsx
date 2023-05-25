import AboutBanner from "../../components/AboutBanner/index.jsx";
import Collapse from "../../components/Collapse/index.jsx";
import aboutArray from "../../datas/aboutArray.json"; 
import aboutBackground from '../../assets/about-background.png'
function About() {
	return (
		<>
			<div>
				<AboutBanner image={aboutBackground}></AboutBanner>
			</div>
			{aboutArray.map((rule, id) => ( // on itére sur le tableau crée pour la page A propos//
				<Collapse
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
		</>
	);
}
export default About;
