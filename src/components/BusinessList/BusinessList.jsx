import "./BusinessList.css";
import white_arrow from "../../assets/white-arrow.png";
// eslint-disable-next-line react/prop-types
const BusinessList = ({ title, subTitle }) => {
  const businesses = [
    {
      id: 1,
      name: "Artisanat Bamiléké",
      description: "Produits artisanaux traditionnels faits à la main.",
      location: "Douala, Cameroun",
      website: "https://artisanat-bamileke.com",
    },
    {
      id: 2,
      name: "Cuisine Bamiléké",
      description: "Restaurant offrant des plats traditionnels Bamiléké.",
      location: "Paris, France",
      website: "https://cuisine-bamileke.fr",
    },
    {
      id: 3,
      name: "Mode et Tissus Bamiléké",
      description:
        "Vente de vêtements et tissus inspirés de la culture Bamiléké.",
      location: "Yaoundé, Cameroun",
      website: "https://mode-bamileke.com",
    },
    {
      id: 4,
      name: "Consulting Diaspora Bamiléké",
      description:
        "Conseils en développement et investissements communautaires.",
      location: "Montréal, Canada",
      website: "https://consulting-diaspora.com",
    },
    {
      id: 5,
      name: "TchamiDev Solutions",
      description:
        "Services professionnels de développement React et front-end pour les petites et moyennes entreprises.",
      location: "Argenteuil, France",
      website: "https://webdevopers.netlify.app/",
    },
    {
      id: 6,
      name: "TchamiDev Solutions",
      description:
        "Services professionnels de développement React et front-end pour les petites et moyennes entreprises.",
      location: "Argenteuil, France",
      website: "https://webdevopers.netlify.app/",
    },
  ];

  return (
    <div className="business-list container">
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <div className="business-cards">
        {businesses.map((business) => (
          <div className="business-card" key={business.id}>
            <h3>{business.name}</h3>
            <p>{business.description}</p>
            <p>
              <strong>Lieu:</strong> {business.location}
            </p>
            <a
              href={business.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              En savoir plus <img src={white_arrow} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessList;
