import { useState, useEffect } from "react";
import React from "react";
import styles from "../components/BackToTopButton.module.css";
import { FiChevronUp } from "react-icons/fi"; // ÍCONE MODERNO

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
          <FiChevronUp size={28} />
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
