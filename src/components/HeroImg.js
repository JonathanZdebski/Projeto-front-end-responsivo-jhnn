import Styles from "../components/HeroImg.module.css";
import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

function HeroImg() {
  return (
    <div className={Styles.hero}>
      <div className={Styles.mask}>
        <img className={Styles.intoimg} src={IntroImg} alt="IntroImg" />
      </div>
      <div className={Styles.content}>
        <p>OLÁ, MEU NOME É JONATHAN</p>
        <h1>Dev Jr ReactJS e NextJS</h1>
        <div>
          <Link to="/project" className="btn">
            Projetos
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contato
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
