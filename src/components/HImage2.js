import React from "react";
import Styles from "../components/HImage2.module.css";
import codingthreeImg from "../assets/codingthree.jpg";

function HImage2({ heading, text }) {
  return (
    <section
      className={Styles.heroimg}
      style={{ backgroundImage: `url(${codingthreeImg})` }}
    >
      <div className={Styles.gridOverlay} aria-hidden="true" />
      <div className={Styles.heading}>
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default HImage2;
