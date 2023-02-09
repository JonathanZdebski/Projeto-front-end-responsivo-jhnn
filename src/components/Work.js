import React from "react";
import Styles from "../components/WorkCard.module.css";
import WorkCard from "../components/WorkCard";
import WorkCardData from "../components/WorkCardData";

function Work() {
  return (
    <div className={Styles.workcontainer}>
      <h1 className={Styles.projectheading}>Projetos</h1>
      <div className={Styles.projectcontainer}>
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Work;
