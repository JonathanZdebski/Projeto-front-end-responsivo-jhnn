import React from "react";
import Styles from "../components/WorkCard.module.css";
import ProjectCardData from "./WorkCardData";

function WorkHome() {
  return (
    <div className={Styles.projectcontainer}>
      {ProjectCardData.map((project) => (
        <div className={Styles.projectcard}>
          <img src={project.imgsrc} alt="" />
          <h2 className={Styles.projecttitle}>{project.title}</h2>
          <div className={Styles.prodetails}>
            <p>{project.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkHome;
