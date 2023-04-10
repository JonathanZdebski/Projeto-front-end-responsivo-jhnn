import React from "react";
import YouTube from "react-youtube";
import styles from "../components/ProjectEcommerce.module.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ProjectPortfolio = () => {
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
          <h1>Projeto Portfolio Responsivo</h1>
          <h3 className={styles.resumetext2}>Detalhes:</h3>
          <ul className={styles.resumetext}>
            <li style={{ listStyleType: "disc" }}>
              Utilizamos o React Router para fazer as navegações entre as
              páginas. Permitindo gerenciar as rotas do aplicativo de maneira
              eficiente e fácil. Isso significa que as páginas do aplicativo
              podem ser exibidas com base no URL da página, tornando a navegação
              do usuário mais intuitiva.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Utilizamos o Hook useRef no projeto que é uma ferramenta útil para
              manipulação de elementos DOM e para preservação de valores entre
              renderizações em componentes funcionais do React. Ele também é
              flexível e pode ser usado para referenciar qualquer valor mutável,
              além de oferecer melhor desempenho em comparação com as variáveis
              de estado do React.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Utilizamos o Hook useEffect e useState para criar uma função de
              Scrollup em três páginas com conteúdo para facilitar a
              usabilidade. O useEffect é uma ferramenta poderosa que ajuda a
              tornar os componentes do React mais dinâmicos e responsivos,
              permitindo que eles realizem ações secundárias e se adaptem às
              mudanças no estado da aplicação. E o useState é uma ferramenta
              útil para gerenciar o estado interno de um componente funcional do
              React. Ele é fácil de usar, flexível, garante atualizações de
              estado assíncronas e mantém o estado apenas no escopo local do
              componente.
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
            <br />
            <li style={{ listStyleType: "disc" }}>
              Também usamos o Toastify na página de envio de email para as
              notificações. Em resumo, o Toastify é uma biblioteca React
              flexível e personalizável que permite exibir notificações em um
              aplicativo web. Ele é fácil de usar, responsivo, compatível com o
              React e oferece uma ampla gama de recursos de personalização. Com
              uma comunidade ativa de desenvolvedores, o Toastify é uma opção
              viável para desenvolvedores que precisam exibir notificações em
              seus aplicativos web.
            </li>
          </ul>
        </div>
        <div>
          <br />
          <h3 className={styles.apres}>APRESENTAÇÃO DO PROJETO EM VÍDEO:</h3>
          <YouTube
            videoId="hUJMJ2Ilh8w"
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
            to="/"
            target="_blank"
            className={`${styles.btnwd} ${styles.web}`}
          >
            Acessar Projeto
          </NavLink>
          <NavLink
            to="https://github.com/JonathanZdebski/Projeto-front-end-responsivo-jhnn"
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

export default ProjectPortfolio;
