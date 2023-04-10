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
          <h3 className={styles.resumetext}>Detalhes:</h3>
          <p>
            <br />- Utilizamos o React Router para fazer as navegações entre as
            páginas. Permitindo gerenciar as rotas do aplicativo de maneira
            eficiente e fácil. Isso significa que as páginas do aplicativo podem
            ser exibidas com base no URL da página, tornando a navegação do
            usuário mais intuitiva.
          </p>
          <p>
            - Utilizamos o UUID no projeto, em resumo, o uso de UUIDs em
            projetos oferece vantagens de unicidade, sem colisão, sem
            previsibilidade, compatibilidade, escalabilidade e privacidade.
            Essas vantagens tornam os UUIDs uma opção viável para identificar
            objetos de forma exclusiva em projetos distribuídos, multiplataforma
            e sensíveis à privacidade.
          </p>
          <p>
            - Utilizamos o DB.JSON, é um arquivo simples e flexível que pode ser
            usado para criar uma API RESTful fake para prototipação ou para
            testes em um projeto. Ele é fácil de implementar, rápido,
            personalizável e compatível com o formato JSON. Além disso, o
            db.json é útil para testes automatizados e pode ser usado em
            diferentes tipos de projetos.
          </p>
          <p>
            - Usamos o Hook useEffect para registrar os dados em JSON, resumindo
            o useEffect é uma ferramenta poderosa que ajuda a tornar os
            componentes do React mais dinâmicos e responsivos, permitindo que
            eles realizem ações secundárias e se adaptem às mudanças no estado
            da aplicação.
          </p>
          <p>
            - Usamos o Hook useState para capturar os dados de serviços do
            projeto, o useState é uma ferramenta útil para gerenciar o estado
            interno de um componente funcional do React. Ele é fácil de usar,
            flexível, garante atualizações de estado assíncronas e mantém o
            estado apenas no escopo local do componente.
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
