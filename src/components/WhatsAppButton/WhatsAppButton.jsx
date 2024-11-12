import "@fortawesome/fontawesome-free/css/all.min.css";
import "./WhatsAppButton.css";
import whatsappIcon from "../../assets/whatsapp-icon.png"; // Path to your icon image

const WhatsAppButton = () => {
  const channelLink = "https://whatsapp.com/channel/0029Vaw60e011ulTyi9cio3K"; // WhatsApp channel link

  return (
    <div className="whatsapp-buttons">
      {/* Button to open the WhatsApp channel */}
      <a
        href={channelLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-channel-button"
      >
        <img src={whatsappIcon} alt="WhatsApp Icon" className="whatsapp-icon" />
        Rejoignez notre chaîne WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppButton;
