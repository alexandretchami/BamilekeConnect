import "./About.css";
import img from "../../assets/metche-waterfalls.png";

// eslint-disable-next-line react/prop-types
const About = ({ title }) => {
  return (
    <div className="about">
      <div className="about-content">
        <h2>{title}</h2>
        <p>
          Notre site est dédié à la connexion des Bamilékés du Cameroun et de la
          diaspora, en célébrant notre culture riche et notre héritage
          ancestral. Nous croyons que l’unité et la solidarité sont essentielles
          pour promouvoir notre identité et soutenir les initiatives de notre
          communauté.
        </p>
        <p>
          Vous êtes au Cameroun ou à l&apos;étranger, notre plateforme offre un
          espace pour échanger, apprendre et participer à des événements
          culturels, tout en renforçant les liens entre les générations.
        </p>
        <p>
          Rejoignez-nous pour préserver et promouvoir la culture Bamiléké,
          transmettre nos traditions et construire un avenir commun pour tous
          les Bamilékés.
        </p>
      </div>
      <div className="about-image">
        <img src={img} alt="Community" />
      </div>
    </div>
  );
};

export default About;
