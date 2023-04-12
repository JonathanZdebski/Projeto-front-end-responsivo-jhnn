import React from "react";
import Styles from "../components/WorkCard.module.css";
import { NavLink } from "react-router-dom";

function WorkCard(props) {
  return (
    <NavLink to={props.view} className={Styles.projectcard}>
      <img src={props.imgsrc} alt="" />
      <h2 className={Styles.projecttitle}>{props.title}</h2>
      <div className={Styles.prodetails}>
        <p>{props.text}</p>
      </div>
      <div className={Styles.probtns}>
        <NavLink to={props.view} className={Styles.btnwd}>
          Ver Projeto
        </NavLink>
      </div>
    </NavLink>
  );
}

export default WorkCard;
