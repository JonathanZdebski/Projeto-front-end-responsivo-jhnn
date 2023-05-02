import React, { Component } from "react";
import styles from "../components/Translate.module.css";

class TranslatePage extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "pt" },
        "google_translate_element"
      );
    };
  }

  render() {
    return (
      <div className={styles.translate}>
        <div id="google_translate_element"></div>
      </div>
    );
  }
}

export default TranslatePage;
