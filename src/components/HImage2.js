import React from "react";
import Styles from "../components/HImage2.module.css";
import { Component } from "react";

class HImage2 extends Component {
  render() {
    return (
      <div className={Styles.heroimg}>
        <div className={Styles.heading}>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HImage2;
