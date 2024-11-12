import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Aminatou Fonkou</h3>
                  <span>Ancien marché Bafoussam, Cameroun</span>
                  <p>
                    Grâce à cette plateforme, j&apos;ai pu renouer avec ma
                    culture et rencontrer d&apos;autres Bamilékés de la
                    diaspora. Partager nos histoires et nos traditions m&apos;a
                    permis de redécouvrir la richesse de notre héritage.
                    C&apos;est un véritable pont entre nous tous !
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Florence Ngassa</h3>
                  <span>Bakong Bazou, Cameroun</span>
                  <p>
                    Cette communauté en ligne m&apos;a offert un espace où je
                    peux parler ma langue et m&apos;informer sur nos coutumes.
                    C&apos;est aussi une excellente ressource pour les jeunes
                    générations. Nous avons tellement à apprendre les uns des
                    autres !
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Patricia Mofor</h3>
                  <span>Menchum Bamenda, Cameroun</span>
                  <p>
                    J&apos;ai trouvé un réel soutien ici. C&apos;est incroyable
                    de voir comment les membres partagent leurs connaissances et
                    s&apos;entraident. Cela me rappelle à quel point
                    l&apos;unité Bamiléké est forte, peu importe où nous nous
                    trouvons dans le monde.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Yvonne Kemajou</h3>
                  <span>Marche B Bangangté, Cameroun</span>
                  <p>
                    Grâce aux ressources culturelles partagées sur ce site,
                    j&apos;ai pu enseigner à mes enfants nos valeurs et
                    traditions. C&apos;est un héritage précieux que nous pouvons
                    maintenant transmettre facilement, même à des milliers de
                    kilomètres.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
