import React from "react";
import YouTube from "react-youtube";
import styles from "../components/ProjectEcommerce.module.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import zoom from "../assets/zoom.png";
import Translate from "../components/Translate";

const ProjectDownloader = () => {
  const [playerId, setPlayerId] = useState(null);
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
        <Translate />
        <div className={styles.title}>
          <h1>Projeto Protótipo Downloader System</h1>
          <h3 className={styles.resumetext2}>Detalhes:</h3>
          <ul className={styles.resumetext}>
            <li style={{ listStyleType: "disc" }}>
              O projeto Downloader System foi criado há alguns anos, na época em
              que ainda não havia concluído a faculdade. Como mencionado na
              seção "Sobre", sempre fui fascinado por como os websites
              funcionavam e, antes de entrar nesse mundo da programação, queria
              desenvolver minhas primeiras habilidades no desenvolvimento. O
              site em si não foi feito por mim em código, mas a sua estruturação
              foi feita com base nos meus primeiros aprendizados em programação.
              Com os conhecimentos que possuo hoje, tenho como projeto recriá-lo
              do zero em ReactJS e NextJS e deixá-lo mais moderno com base nas
              tecnologias atuais.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Durante esse período, utilizei um modelo e o backend do WordPress,
              que usa PHP e MySQL em seus modelos. Com o passar do tempo,
              aprendi a trabalhar com mais tecnologias (antes de entrar na
              faculdade), como o Google Search. Estudei como funcionavam os
              mecanismos de pesquisa e indexei esse modelo no Google e em outras
              plataformas. Como resultado, obtive até o momento cerca de 350.844
              visitantes nas páginas e aproximadamente 10 mil acessos por mês.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              O projeto foi criado inicialmente para facilitar o download dos
              softwares mais utilizados na internet, contendo tutoriais de
              instalação, download e descrição do software sem propagandas, com
              o objetivo de facilitar a vida do usuário.
            </li>
            <br />
            <div className={styles.containerimg}>
              <img className={styles.zoomimg} src={zoom} alt="zoom" />
            </div>
          </ul>
        </div>
        <div>
          <h3 className={styles.apres}>APRESENTAÇÃO DO PROJETO EM VÍDEO:</h3>
          <YouTube
            videoId="JGH-XdZWQyU"
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
            to="https://downloadersystem.wordpress.com/"
            target="_blank"
            className={`${styles.btnwd} ${styles.web}`}
          >
            Acessar Projeto
          </NavLink>
          <NavLink
            to="https://www.youtube.com/@downloadersystem2523"
            target="_blank"
            className={`${styles.btnwd} ${styles.youtube}`}
          >
            YouTube Channel
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectDownloader;
