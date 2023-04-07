import React from "react";
import YouTube from "react-youtube";
import styles from "../components/ProjectEcommerce.module.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ProjectViagem = () => {
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
          <h1>Projeto Viagem Responsivo</h1>
          <p className={styles.resumetext}>
            Projeto realizado em ReactJS com formulários em JSON.
            <br />
            <br />
            Detalhes:
          </p>
          <p>
            <br />- Utilizamos o React Router para fazer as navegações entre as
            páginas. Permitindo gerenciar as rotas do aplicativo de maneira
            eficiente e fácil. Isso significa que as páginas do aplicativo podem
            ser exibidas com base no URL da página, tornando a navegação do
            usuário mais intuitiva.
          </p>
          <p>
            - Utilizamos um arquivo DATA separado para separar os dados do
            componente, é possível concentrar-se apenas na lógica do componente
            e manter os dados em um arquivo separado. Isso ajuda a tornar o
            código mais organizado e mais fácil de manter. Algumas vantagens são
            a reutilização de dados, facilidade de manutenção, performance e
            testabilidade do código.
          </p>
          <p>
            - Para deixar o projeto responsivo usamos uma lógica utilizando
            if/else e fazendo mapeamento dos Links do Navbar para o modo mobile,
            tudo de forma dinâmica (props).
          </p>
          <p>
            - Utilizamos o AXIOS nas páginas de contato, login e registro para
            registrar os dados em JSON no db.json do projeto. Em resumo, o axios
            é uma biblioteca JavaScript útil para fazer solicitações HTTP a um
            servidor. Ele oferece suporte a todas as solicitações HTTP, é fácil
            de usar e pode ser configurado rapidamente. Além disso, ele suporta
            interceptadores de solicitações e respostas, promessas, cancelamento
            de solicitações.
          </p>
        </div>
        <div>
          <h3 className={styles.apres}>APRESENTAÇÃO DO PROJETO EM VÍDEO:</h3>
          <YouTube
            videoId="8TnmOj5ZBjY"
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
            to="https://viagem-responsive-project-jhnn.vercel.app/"
            target="_blank"
            className={`${styles.btnwd} ${styles.web}`}
          >
            Acessar Projeto
          </NavLink>
          <NavLink
            to="https://github.com/JonathanZdebski/Viagem-responsive-project"
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

export default ProjectViagem;
