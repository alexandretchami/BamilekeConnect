import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Bienvenue à Notre Communauté Bamiléké</h1>
        <p>
          Connectez-vous, partagez, et célébrez notre héritage culturel pour un
          avenir commun et prospère.
        </p>
        <button className="btn">
          <a
            href="https://indexcameroun.com/le-peuple-bamileke-au-cameroun/"
            target="_blank"
          >
            Explorer la Communauté <img src={dark_arrow} alt="" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
