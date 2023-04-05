import React from "react";
import YouTube from "react-youtube";
import styles from "../components/ProjectEcommerce.module.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ProjectGen = () => {
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
          <h1>Projeto Gen</h1>
          <p>
            Projeto realizado em ReactJS utilizando API do JSON para armazenar
            os serviços criados.
          </p>
        </div>
        <div>
          <h3 className={styles.apres}>APRESENTAÇÃO DO PROJETO EM VÍDEO:</h3>
          <YouTube
            videoId="dqQkpE3rkss"
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
          <NavLink
            to="https://projeto-gen.vercel.app/"
            target="_blank"
            className={`${styles.btnwd} ${styles.web}`}
          >
            Acessar Projeto
          </NavLink>
          <NavLink
            to="https://github.com/JonathanZdebski/Projeto-Gen"
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

export default ProjectGen;
