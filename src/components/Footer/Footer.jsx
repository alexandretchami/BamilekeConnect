import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton"; // Importing WhatsAppButton

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and About */}
        <div className="footer-section about">
          <h3>Notre Communauté Bamiléké</h3>
          <p>
            Connecter et célébrer la culture et l’héritage Bamiléké pour une
            communauté soudée, partout dans le monde.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section links">
          <h4>Liens Utiles</h4>
          <ul>
            <li>
              <Link to="about">À Propos</Link>
            </li>
            <li>
              <Link to="events">Événements</Link>
            </li>
            <li>
              <Link to="business-list">Entreprises Bamiléké</Link>
            </li>
            <li>
              <Link to="cultural-resources">
                Ressources Culturelles Bamiléké
              </Link>
            </li>
            <li>
              <Link to="contact">Contactez-Nous</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h4>Suivez-Nous</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61568565273509"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      {/* WhatsApp Button */}

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          &copy; 2024 Notre Communauté Bamiléké. Tous droits réservés.{" "}
          <a href="https://webdevopers.netlify.app/" target="_blank">
            <span className="span">TchamiDev</span>
          </a>
        </p>
        <div className="whatsapp-footer">
          <WhatsAppButton /> {/* This is where we add the WhatsApp button */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
