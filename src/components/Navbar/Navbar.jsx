import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <a href="/">
        <img src={logo} alt="" className="logo" />
      </a>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="about" smooth={true} offset={0} duration={500}>
            À propos
          </Link>
        </li>
        <li>
          <Link to="events" smooth={true} offset={-260} duration={500}>
            Événements
          </Link>
        </li>
        <li>
          <Link to="business-list" smooth={true} offset={-150} duration={500}>
            Entreprises Bamiléké
          </Link>
        </li>
        <li>
          <Link
            to="cultural-resources"
            smooth={true}
            offset={-260}
            duration={500}
          >
            Ressources culturelles
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Témoignages
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contactez-nous
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
