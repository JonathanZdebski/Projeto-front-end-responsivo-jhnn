import React from "react";
import Styles from "../components/WorkCard.module.css";
import { NavLink } from "react-router-dom";

function WorkCard(props) {
  return (
    <div className={Styles.projectcard}>
      <img src={props.imgsrc} alt="" />
      <h2 className={Styles.projecttitle}>{props.title}</h2>
      <div className={Styles.prodetails}>
        <p>{props.text}</p>
        <div className={Styles.probtns}>
          <NavLink to="url.com" className={Styles.btnwd}>
            View
          </NavLink>
          <NavLink to={props.view} className={Styles.btnwd}>
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
