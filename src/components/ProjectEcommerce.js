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
          <h3 className={styles.resumetext}>Detalhes:</h3>
          <p>
            <br />- Utilizamos o next/link no projeto que melhora o desempenho e
            faz uso do pré-carregamento inteligente, que carrega automaticamente
            as páginas adjacentes para que o usuário possa navegar entre elas
            sem qualquer tempo de carregamento significativo dentre outras
            vantagens.
          </p>
          <p>
            - Utilizamos useState e o useContext na lógica do projeto para
            facilitar a passagem de dados entre componentes e compartilhar dados
            entre componentes sem precisar passar propriedades manualmente entre
            cada um deles. Isso torna o código mais limpo e fácil de ler, além
            de reduzir a complexidade do gerenciamento de estados.
          </p>
          <p>
            - Utilizamos o getStaticPaths que gera dinamicamente caminhos de
            rota estática para suas páginas, permitindo que o Next.js
            pré-calcule e armazene em cache essas páginas, melhorando o
            desempenho da sua aplicação. Também utilizando dados dinâmicos da
            API do Sanity.
          </p>
          <p>
            - Também utilizamos o getStaticProps que trabalha em conjunto com o
            getStaticPaths para permitir a geração dinâmica de páginas
            estáticas. O getStaticPaths gera caminhos de rota estática para as
            páginas com base em dados dinâmicos, enquanto o getStaticProps busca
            os dados necessários para cada caminho e retorna as propriedades
            necessárias para renderizar a página correspondente.
          </p>
          <p>
            - Utilizamos também o getServerSideProps que é uma função muito útil
            no Next.js que permite buscar dados no servidor em tempo de execução
            e passá-los como propriedades para uma página. O uso do
            getServerSideProps pode permitir a renderização dinâmica de conteúdo
            personalizado, acesso a dados de autenticação, flexibilidade na
            busca de dados dinâmicos e melhorar o SEO da aplicação.
          </p>
          <p>
            - Utilizamos o useEffect para setar todos os dados do carrinho na
            página de realização de compra e setar o cache após a compra do
            usuário. Resumindo o useEffect é uma ferramenta poderosa que ajuda a
            tornar os componentes do React mais dinâmicos e responsivos,
            permitindo que eles realizem ações secundárias e se adaptem às
            mudanças no estado da aplicação.
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
