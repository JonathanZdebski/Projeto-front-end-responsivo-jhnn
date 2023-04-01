import Styles from "../components/AboutContent.module.css";
import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

function AboutContent() {
  return (
    <div className={Styles.about}>
      <div className={Styles.left}>
        <h1>Quem sou</h1>
        <p>
          Sou entusiasta da tecnologia desde os 12 anos, sempre fascinado em
          como os websites funcionavam, e em 2018 tive a oportunidade e entrar
          nesse mundo fantástico da programação. Tenho muita garra e força de
          vontade para continuar evoluindo, estudando e ganhando novas
          experiências!
        </p>
        <Link to="/contact">
          <button className="btn">Contato</button>
        </Link>
      </div>
      <div className={Styles.right}>
        <div className={Styles.imagecontainer}>
          <div className={`${Styles["img-stack"]} ${Styles.top}`}>
            <img src={React1} className={Styles.img} alt="true" />
          </div>
          <div className={`${Styles["img-stack"]} ${Styles.bottom}`}>
            <img src={React2} className={Styles.img} alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
