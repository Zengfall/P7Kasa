import logo from '../../assets/logo-footer.svg'
import "./index.css";
function Footer() {
  return (
        <footer className="foot-container">
			  <img className='footer-logo' src={logo} alt="logo-de-kasa" />
			<p className="foot-container-text">© 2020 Kasa. All rights reserved</p>
		</footer>    
  );
}
export default Footer;
