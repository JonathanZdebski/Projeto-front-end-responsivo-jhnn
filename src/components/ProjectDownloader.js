import React from "react";
import YouTube from "react-youtube";
import styles from "../components/ProjectEcommerce.module.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import zoom from "../assets/zoom.png";

const ProjectDownloader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.card2}>
        <div className={styles.title}>
          <h1>Projeto Protótipo Downloader System</h1>
          <h3 className={styles.resumetext2}>Detalhes:</h3>
          <ul className={styles.resumetext}>
            <li style={{ listStyleType: "disc" }}>
              O projeto Downloader System foi criado há alguns anos, em uma
              época em que eu ainda não havia concluído a faculdade. Como
              mencionado na seção "Sobre", sempre fui fascinado por como os
              websites funcionavam e, antes de entrar no mundo da programação,
              quis desenvolver minhas primeiras habilidades na área. O site em
              si não foi codificado por mim, mas sua estrutura foi construída
              com base nos meus primeiros aprendizados em programação. Com os
              conhecimentos que possuo hoje, tenho como objetivo recriá-lo do
              zero em React.js e Next.js e deixá-lo mais moderno com base nas
              tecnologias atuais.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Durante esse período, utilizei um modelo com backend em
              WordPress, que usa PHP e MySQL. Com o passar do tempo, aprendi a
              trabalhar com outras tecnologias (antes mesmo de entrar na
              faculdade), como o Google Search. Estudei o funcionamento dos
              mecanismos de pesquisa e indexei esse modelo no Google e em outras
              plataformas. Como resultado, até o momento, obtive cerca de
              350.844 visitantes nas páginas e aproximadamente 10 mil acessos
              por mês.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              O projeto foi criado inicialmente para facilitar o download dos
              softwares mais utilizados na internet, com tutoriais de
              instalação, links para download e descrição dos softwares sem
              propagandas, com o objetivo de facilitar a vida do usuário.
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