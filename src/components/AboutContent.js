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
          Sou desenvolvedor React front-end. Crio sites seguros e responsivos
          para os meus clientes.
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
