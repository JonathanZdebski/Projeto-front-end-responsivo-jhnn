import { useState, useEffect } from "react";
import React from "react";
import styles from "../components/BackToTopButton.module.css";

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="ScrollUp">
      {backToTopButton && (
        <button className={styles.backToTop} onClick={scrollUp}>
          ⬆
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
