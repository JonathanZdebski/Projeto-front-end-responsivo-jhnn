import React from "react";
import YouTube from "react-youtube";
import styles from "../components/ProjectEcommerce.module.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ProjectHBanks = () => {
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
          <h1>Projeto HBanks Responsivo</h1>
          <h3 className={styles.resumetext2}>Detalhes:</h3>
          <ul className={styles.resumetext}>
            <li>
              Obtemos algumas excelentes vantagens ao utilizar essas tecnologias
              como:
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Performance: O Vite é um build tool que oferece uma compilação
              rápida de arquivos, enquanto o ReactJS é uma biblioteca de
              renderização rápida. A combinação dessas duas tecnologias pode
              melhorar significativamente a velocidade de desenvolvimento e a
              performance da aplicação.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Produtividade: O Vite é conhecido por sua configuração fácil e
              rápida, o que pode economizar muito tempo para os desenvolvedores.
              Já o Tailwind CSS é uma biblioteca de estilos altamente
              personalizável que permite criar interfaces rapidamente, sem a
              necessidade de escrever CSS personalizado. Isso pode ajudar a
              aumentar a produtividade dos desenvolvedores.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Flexibilidade: O ReactJS é uma biblioteca altamente flexível que
              pode ser usada em diversas aplicações. Já o Vite e o Tailwind CSS
              também são altamente personalizáveis e podem ser configurados de
              acordo com as necessidades de cada projeto. Isso permite que os
              desenvolvedores tenham mais liberdade para criar interfaces
              exclusivas e personalizadas.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Comunidade: O ReactJS, Vite e Tailwind CSS são tecnologias bem
              estabelecidas com grandes comunidades de desenvolvedores. Isso
              significa que é fácil encontrar suporte e recursos para essas
              tecnologias, incluindo documentação, exemplos de código e
              bibliotecas adicionais.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Reutilização: O ReactJS é conhecido por sua capacidade de
              reutilização de componentes, o que pode ajudar a reduzir a
              duplicação de código e aumentar a eficiência do desenvolvimento. O
              Tailwind CSS também pode ajudar nesse sentido, pois seus estilos
              pré-definidos podem ser reutilizados em toda a aplicação.
            </li>
          </ul>
        </div>
        <div>
          <br />
          <h3 className={styles.apres}>APRESENTAÇÃO DO PROJETO EM VÍDEO:</h3>
          <YouTube
            videoId="hfI4mqUs5T8"
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
            to="https://project-hbanks-jhnn.vercel.app/"
            target="_blank"
            className={`${styles.btnwd} ${styles.web}`}
          >
            Acessar Projeto
          </NavLink>
          <NavLink
            to="https://github.com/JonathanZdebski/Project-hbanks-jhnn"
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

export default ProjectHBanks;
