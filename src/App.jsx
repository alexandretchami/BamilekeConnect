import About from "./components/About/About";
import BusinessList from "./components/BusinessList/BusinessList";
import Contact from "./components/Contact/Contact";
import CulturalResources from "./components/CulturalResources/CulturalResources";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title title="Événements à Venir" />
      <Events />
      <About title="À Propos de Notre Communauté" />
      <BusinessList
        title="Entreprises et initiatives Bamiléké"
        subTitle="Découvrez les entreprises et initiatives Bamiléké à travers le monde."
      />
      <CulturalResources
        title="Ressources Culturelles Bamiléké"
        subTitle="Explorez des ressources précieuses pour découvrir et apprécier la
        culture Bamiléké."
      />
      <Title
        title="Voix de Notre Communauté"
        subTitle="Découvrez les histoires et témoignages des membres qui partagent leur expérience et leur amour pour notre culture."
      />
      <Testimonials />
      <Title
        title="Contactez-Nous"
        subTitle="Nous sommes là pour répondre à vos questions et renforcer notre communauté. N'hésitez pas à nous écrire !"
      />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
