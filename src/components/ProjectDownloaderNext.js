import React from "react";
import YouTube from "react-youtube";
import styles from "../components/ProjectEcommerce.module.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Translate from "../components/Translate";
import { Link } from "react-router-dom";

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
        <Translate />
        <div className={styles.title}>
          <h1>Projeto Downloader System em NextJS</h1>
          <h3 className={styles.resumetext2}>Detalhes:</h3>
          <ul className={styles.resumetext}>
            <li style={{ listStyleType: "disc" }}>
              Como citado no projeto de protótipo, recriamos o Downloader System
              em NextJS e suas tecnologias. Para mais informações sobre a ideia
              do projeto{" "}
              <Link
                className={styles.Link}
                to="/projeto-downloader-system"
                target="_blank"
              >
                clique aqui.
              </Link>
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Next.js é um framework para desenvolvimento web em React que traz
              várias vantagens para desenvolvedores. Aqui estão três delas:{" "}
              <br />
              <br />
              <strong>Server-Side Rendering (SSR):</strong> uma das principais
              vantagens do Next.js é a capacidade de fazer SSR, o que significa
              que as páginas são pré-renderizadas no servidor antes de serem
              enviadas para o navegador. Isso melhora significativamente o tempo
              de carregamento da página e a experiência do usuário,
              especialmente em dispositivos com conexões de internet lentas.{" "}
              <br /> <br />
              <strong>Automatic Code Splitting: </strong> o Next.js faz o code
              splitting automaticamente, o que significa que o código é dividido
              em pedaços menores e carregado de forma assíncrona conforme
              necessário. Isso reduz o tamanho total do arquivo JavaScript
              enviado ao navegador, melhorando ainda mais o tempo de
              carregamento da página. <br /> <br />
              <strong>Ferramentas e funcionalidades pré-configuradas:</strong> o
              Next.js vem com muitas ferramentas e funcionalidades
              pré-configuradas, como rotas automatizadas, suporte a CSS Modules,
              Hot Module Replacement (HMR) e muito mais. Isso economiza tempo e
              esforço no desenvolvimento e permite que os desenvolvedores se
              concentrem mais na lógica de negócios e menos na configuração de
              ferramentas e funcionalidades.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Também utilizamos o getStaticProps é uma das funções disponíveis
              no Next.js que permite a obtenção de dados em tempo de compilação.
              A principal vantagem de usar getStaticProps é que ele permite a
              pré-renderização de páginas estáticas com dados dinâmicos em tempo
              de build. Isso significa que, em vez de buscar os dados a cada
              requisição do usuário, o Next.js busca os dados em tempo de build
              e gera uma página estática com esses dados já incluídos.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Utilizamos os componentes Data, que podem ser substituídos por uma
              API futuramente. A principal vantagem de utilizar arquivos de
              dados externos no Next.js é a separação de responsabilidades e o
              aumento da modularidade da aplicação, o que pode facilitar a
              manutenção e o desenvolvimento contínuo da aplicação.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Usamos a API do EmailJS para envio de emails na página de
              contatos. Em resumo, a API EmailJS é uma solução útil para enviar
              e-mails diretamente de um aplicativo ou site usando código
              JavaScript. Ela oferece fácil integração, redução de trabalho,
              segurança, personalização, escalabilidade e suporte técnico para
              desenvolvedores.
            </li>
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
            to="https://downloader-system-nextjs.vercel.app/"
            target="_blank"
            className={`${styles.btnwd} ${styles.web}`}
          >
            Acessar Projeto
          </NavLink>
          <NavLink
            to="https://github.com/JonathanZdebski/Downloader-System"
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
