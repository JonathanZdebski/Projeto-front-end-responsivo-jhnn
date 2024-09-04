import React, { Component } from "react";
import Styles from "../components/HImage2.module.css";
import codingthreeImg from "../assets/codingthree.jpg"; // Caminho para a imagem

class HImage2 extends Component {
  render() {
    return (
      <div
        className={Styles.heroimg}
        style={{
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          height: "60vh",
          position: "relative",
        }}
      >
        <div
          style={{
            content: '""',
            background: `url(${codingthreeImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <div
          className={Styles.heading}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HImage2;
