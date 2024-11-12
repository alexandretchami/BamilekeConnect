import "./CulturalResources.css";
import white_arrow from "../../assets/white-arrow.png";

// eslint-disable-next-line react/prop-types
const CulturalResources = ({ title, subTitle }) => {
  const spokenLanguages = [
    "Le Ghomala'",
    "le Yemba",
    "Ngiemboon",
    "Le Ngoumba",
    "Mbouda",
    "Baham",
    "Mungaka",
    "Le Bafut",
    "Mankon",
    "Le Pinyin",
    "Meta'",
    "Fe'fe'",
    "Ngie",
    "Mundani",
    "Medumba",
    "Le Ngemba",
    "Oku",
  ];

  const villages = [
    "Bafoussam",
    "Dschang",
    "Foumban",
    "Bangangté",
    "Mbouda",
    "Baham",
    "Kumbo",
    "Bafut",
    "Bamenda",
    "Pinyin",
    "Bamendjou",
    "Bamougoum",
    "Bandjoun",
    "Batié",
    "Baleng",
    "Batoufam",
    "Bafang",
    "Bangoua",
    "Bana",
    "Babadjou",
    "Fokoué",
    "Bana",
  ];

  const resources = [
    {
      id: 1,
      title: "Introduction à la langue bamiléké",
      description:
        "Phrases et vocabulaire de base pour débuter avec la langue Bamiléké.",
      type: "Guide linguistique",
      link: "https://www.persee.fr/doc/jafr_0037-9166_1932_num_2_2_1534",
    },
    {
      id: 2,
      title: "Art et symboles traditionnels Bamiléké",
      description:
        "Une plongée en profondeur dans les significations de l'art et des symboles Bamiléké.",
      type: "Article",
      link: "https://rootsmagazine.fr/bamileke-elements-cles-dune-immense-culture/",
    },
    {
      id: 3,
      title: "Danse et musique Bamiléké",
      description:
        "Regardez et apprenez-en plus sur les danses et les styles de musique traditionnels Bamiléké.",
      type: "Vidéo",
      link: "https://www.youtube.com/watch?v=2V9IUtwDI_k&ab_channel=Traditions%26Cultures%5Bs19ktv%5DAlixAubainTcho",
    },
    {
      id: 4,
      title: "Histoire du peuple Bamiléké",
      description:
        "Une histoire complète du peuple Bamiléké et de son patrimoine.",
      type: "Livre",
      link: "https://www.nofi.media/2014/09/bamilekes-2/1165",
    },
    {
      id: 5,
      title: "Histoire du peuple Bamiléké",
      description:
        "Une histoire complète du peuple Bamiléké et de son patrimoine.",
      type: "Livre",
      link: "https://www.nofi.media/2014/09/bamilekes-2/1165",
    },
  ];

  return (
    <div className="cultural-resources container">
      <h2>{title}</h2>
      <p>{subTitle}</p>

      <h3>Langues et Villages de la Région de l&apos;Ouest du Cameroun</h3>
      <table className="data-table">
        <thead>
          <tr>
            <th>Langues parlées</th>
            <th>Villages</th>
          </tr>
        </thead>
        <tbody>
          {spokenLanguages.map((language, index) => (
            <tr key={index}>
              <td>{language}</td>
              <td>{villages[index] || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="resource-cards">
        {resources.map((resource) => (
          <div className="resource-card" key={resource.id}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <p>
              <strong>Type:</strong> {resource.type}
            </p>
            <a
              href={resource.link}
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

export default CulturalResources;
