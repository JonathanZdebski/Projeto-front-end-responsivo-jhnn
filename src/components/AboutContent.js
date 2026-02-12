import Styles from "../components/AboutContent.module.css";
import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

function AboutContent() {
  return (
    <section className={Styles.about}>
      <div className={Styles.inner}>
        <article className={Styles.left}>
          <p className={Styles.kicker}>Sobre mim</p>
          <h2>Quem sou</h2>
          <p className={Styles.description}>
            Sou entusiasta de tecnologia desde os 12 anos, sempre curioso sobre
            o funcionamento dos websites. Em 2018, tive a oportunidade de entrar
            de vez no universo da programação. Desde então, sigo evoluindo com
            dedicação, determinação e vontade constante de aprender e adquirir
            novas experiências.
          </p>

          <div className={Styles.actions}>
            <Link to="/contact" className={`${Styles.cta} ${Styles.primary}`}>
              Contato
            </Link>
            <Link
              to="https://wa.me/5542998527599"
              target="_blank"
              rel="noreferrer"
              className={`${Styles.cta} ${Styles.whatsapp}`}
            >
              WhatsApp
            </Link>
          </div>
        </article>

        <aside className={Styles.right}>
          <div className={Styles.imagecontainer}>
            <div className={`${Styles.imgStack} ${Styles.top}`}>
              <img src={React1} className={Styles.img} alt="Dashboard de projeto" />
            </div>
            <div className={`${Styles.imgStack} ${Styles.bottom}`}>
              <img src={React2} className={Styles.img} alt="Interface de aplicação" />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default AboutContent;
