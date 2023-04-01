import Styles from "../components/WorkCard.module.css";
import React from "react";
import { Link } from "react-router-dom";

function ButtonView() {
  return (
    <div className={Styles.btnacesscontainer}>
      <Link to="/project" className={Styles.btnacess}>
        Acessar Projetos
      </Link>
    </div>
  );
}

export default ButtonView;
