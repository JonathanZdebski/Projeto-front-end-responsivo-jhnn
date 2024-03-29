import React from "react";
import YouTube from "react-youtube";
import styles from "../components/ProjectEcommerce.module.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Translate from "../components/Translate";

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
          <h1>Projeto Ecommerce John Dala</h1>
          <h3 className={styles.resumetext2}>Detalhes:</h3>
          <ul className={styles.resumetext}>
            <li style={{ listStyleType: "disc" }}>
              Utilizamos o next/link no projeto que melhora o desempenho e faz
              uso do pré-carregamento inteligente, que carrega automaticamente
              as páginas adjacentes para que o usuário possa navegar entre elas
              sem qualquer tempo de carregamento significativo dentre outras
              vantagens.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Implementamos useState e o useContext na lógica do projeto para
              facilitar a passagem de dados entre componentes e compartilhar
              dados entre componentes sem precisar passar propriedades
              manualmente entre cada um deles. Isso torna o código mais limpo e
              fácil de ler, além de reduzir a complexidade do gerenciamento de
              estados.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Utilizamos o getStaticPaths que gera dinamicamente caminhos de
              rota estática para suas páginas, permitindo que o Next.js
              pré-calcule e armazene em cache essas páginas, melhorando o
              desempenho da sua aplicação. Também utilizando dados dinâmicos da
              API do Sanity.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Também empregamos o getStaticProps que trabalha em conjunto com o
              getStaticPaths para permitir a geração dinâmica de páginas
              estáticas. O getStaticPaths gera caminhos de rota estática para as
              páginas com base em dados dinâmicos, enquanto o getStaticProps
              busca os dados necessários para cada caminho e retorna as
              propriedades necessárias para renderizar a página correspondente.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Recorremos também o getServerSideProps que é uma função muito útil
              no Next.js que permite buscar dados no servidor em tempo de
              execução e passá-los como propriedades para uma página. O uso do
              getServerSideProps pode permitir a renderização dinâmica de
              conteúdo personalizado, acesso a dados de autenticação,
              flexibilidade na busca de dados dinâmicos e melhorar o SEO da
              aplicação.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Utilizamos o useEffect para setar todos os dados do carrinho na
              página de realização de compra e setar o cache após a compra do
              usuário. Resumindo o useEffect é uma ferramenta poderosa que ajuda
              a tornar os componentes do React mais dinâmicos e responsivos,
              permitindo que eles realizem ações secundárias e se adaptem às
              mudanças no estado da aplicação.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Aplicamos o Sanity que é uma plataforma de gerenciamento de
              conteúdo flexível e escalável que oferece uma abordagem moderna e
              personalizável para a criação de experiências digitais. Ele possui
              uma arquitetura de dados flexível, permite colaboração em tempo
              real, possui um sistema de gerenciamento de ativos integrado e
              oferece APIs poderosas para integração com outras ferramentas e
              serviços. O Sanity.io é altamente escalável, personalizável e
              extensível, tornando-o uma escolha popular para projetos de grande
              escala e exigentes.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Empregamos o Stripe também que é uma plataforma de pagamentos
              online que simplifica e facilita o processo de aceitar pagamentos
              na internet. Ele oferece uma API poderosa e simples de usar,
              permitindo que empresas e desenvolvedores integrem facilmente
              funcionalidades de pagamento em seus aplicativos e sites. O Stripe
              lida com a complexidade de lidar com segurança, conformidade e
              processamento de pagamentos, permitindo que os usuários se
              concentrem em construir seus negócios.
            </li>
          </ul>
        </div>
        <div>
          <br />
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
          <NavLink
            to="https://projeto-ecommerce-john-dala.vercel.app/"
            target="_blank"
            className={`${styles.btnwd} ${styles.web}`}
          >
            Acessar Projeto
          </NavLink>
          <NavLink
            to="https://github.com/JonathanZdebski/Projeto-ecommerce-john-dala"
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
