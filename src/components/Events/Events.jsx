import "./Events.css";
import white_arrow from "../../assets/white-arrow.png";

// eslint-disable-next-line react/prop-types
const Events = ({ title }) => {
  const events = [
    {
      id: 1,
      title: "Rencontre Culturelle Bamiléké",
      description:
        "Une journée de célébration de la culture Bamiléké avec des danses, de la musique, et des discussions.",
      date: "2023-12-10",
      time: "14:00",
      location: "Douala, Cameroun",
    },
    {
      id: 2,
      title: "Conférence de la Diaspora",
      description:
        "Une rencontre des Bamilékés de la diaspora pour échanger et soutenir des initiatives communautaires.",
      date: "2024-01-15",
      time: "10:00",
      location: "Paris, France (et en ligne)",
    },
    {
      id: 3,
      title: "Atelier de Cuisine Traditionnelle",
      description:
        "Apprenez à cuisiner des plats traditionnels Bamiléké et partagez un repas en communauté.",
      date: "2024-02-20",
      time: "18:00",
      location: "Yaoundé, Cameroun",
    },
    {
      id: 4,
      title: "Festival d’Art et de Culture Bamiléké",
      description:
        "Une célébration des arts Bamiléké avec des expositions, des spectacles de danse, et de la musique en direct.",
      date: "2024-03-05",
      time: "11:00",
      location: "Bafoussam, Cameroun",
    },
    {
      id: 5,
      title: "Webinaire sur l'Histoire Bamiléké",
      description:
        "Un webinaire informatif sur l'histoire et les traditions des Bamilékés, ouvert à tous.",
      date: "2024-04-10",
      time: "16:00",
      location: "En ligne",
    },
    {
      id: 6,
      title: "Soirée de Networking pour Jeunes Bamilékés",
      description:
        "Une soirée pour les jeunes professionnels Bamilékés de la diaspora pour élargir leur réseau.",
      date: "2024-05-18",
      time: "19:30",
      location: "New York, USA",
    },
    {
      id: 7,
      title: "Marche Culturelle pour la Solidarité",
      description:
        "Une marche communautaire pour promouvoir l'unité et la solidarité entre les Bamilékés.",
      date: "2024-06-21",
      time: "09:00",
      location: "Dschang, Cameroun",
    },
    {
      id: 8,
      title: "Forum des Entrepreneurs Bamilékés",
      description:
        "Un forum dédié aux entrepreneurs Bamilékés pour discuter de développement économique.",
      date: "2024-07-30",
      time: "09:00",
      location: "Bruxelles, Belgique",
    },
    {
      id: 9,
      title: "Journée des Familles Bamiléké",
      description:
        "Une journée de rencontre pour les familles Bamiléké avec des jeux, des repas et des activités culturelles.",
      date: "2024-08-15",
      time: "10:00",
      location: "Londres, Royaume-Uni",
    },
  ];

  return (
    <div className="events">
      <h2>{title}</h2>
      <div className="events-list">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>
              <strong>Heure:</strong> {event.time}
            </p>
            <p>
              <strong>Lieu:</strong> {event.location}
            </p>
            <button className="btn">
              En savoir plus <img src={white_arrow} alt="" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
