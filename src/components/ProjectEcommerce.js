import React from "react";
import YouTube from "react-youtube";
import styles from "../components/ProjectEcommerce.module.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ProjectEcommerce = () => {
  const [setPlayerId] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onReady = (event) => {
    setPlayerId(event.target.getIframe().id);
  };

  return (
    <div className={styles.card}>
      <div className={styles.card2}>
        <div className={styles.title}>
          <h1>Projeto Ecommerce John Dala</h1>
          <p>
            Projeto realizado em ReactJS, NextJS, Sanity como API backend e o
            Stripe como API de pagamento.
          </p>
        </div>
        <div>
          <h3 className={styles.apres}>APRESENTAÇÃO DO PROJETO EM VÍDEO:</h3>
          <YouTube
            videoId="cMbdd_1hLNA"
            opts={{
              height: windowWidth < 640 ? "195" : "390",
              width: windowWidth < 640 ? "320" : "640",
              playerVars: {
                autoplay: 0,
              },
            }}
            onReady={onReady}
          />
        </div>
        <div>
          <NavLink to="" className={`${styles.btnwd} ${styles.web}`}>
            Acessar Projeto
          </NavLink>
          <NavLink
            to="https://github.com/JonathanZdebski/Ecommerce-sanity-stripe"
            target="_blank"
            className={`${styles.btnwd} ${styles.github}`}
          >
            Código GitHub
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectEcommerce;
