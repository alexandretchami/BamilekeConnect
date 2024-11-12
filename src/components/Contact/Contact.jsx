import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d5a00aed-ab80-4d23-a331-bdf39e65477b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Formulaire soumis avec succès");
      event.target.reset();
    } else {
      console.log("Erreur", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Entrons en Contact <img src={msg_icon} alt="" />
        </h3>
        <p>
          Vous avez des questions, des suggestions ou souhaitez en savoir plus
          sur notre communauté et nos initiatives? Remplissez le formulaire
          ci-dessous ou contactez-nous directement. Nous avons hâte de vous
          entendre !
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            tchamistephane@yahoo.fr
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +33 658-950-856
          </li>
          <li>
            <img src={location_icon} alt="" />
            Argenteuil 95100, <br /> France
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Votre nom</label>
          <input
            type="text"
            name="name"
            placeholder="Entrez votre nom"
            required
          />
          <label>Numéro de téléphone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Entrez votre numéro de portable"
            required
          />
          <label>Écrivez vos messages ici</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Entrez votre message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Envoyer maintenant <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
