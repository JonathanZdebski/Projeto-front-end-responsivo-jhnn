import React from "react";
import Styles from "../components/WorkCard.module.css";
import { NavLink } from "react-router-dom";

function WorkCard(props) {
  const techs = props.text
    ? props.text.replace(/^Tecnologias:\s*/i, "").split(",").map((item) =>
        item.trim()
      )
    : [];

  return (
    <NavLink to={props.view} className={Styles.projectcard}>
      {props.isNew && <span className={Styles.badgeNew}>NOVO</span>}
      <img src={props.imgsrc} alt="" />
      <h2 className={Styles.projecttitle}>{props.title}</h2>
      <div className={Styles.prodetails}>
        {props.text && (
          <div className={Styles.techlist}>
            {techs.map((tech) => (
              <span key={tech} className={Styles.techpill}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </NavLink>
  );
}

export default WorkCard;
