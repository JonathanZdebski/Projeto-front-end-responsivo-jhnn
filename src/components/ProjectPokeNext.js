import React from "react";
import styles from "../components/ProjectEcommerce.module.css";
import { NavLink } from "react-router-dom";
import Translate from "../components/Translate";
import pokenext from "../assets/pokenext.png";

const ProjectEcommerce = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card2}>
        <Translate />
        <div className={styles.title}>
          <h1>Projeto PokeNext</h1>
          <h3 className={styles.resumetext2}>Detalhes:</h3>
          <ul className={styles.resumetext}>
            <li style={{ listStyleType: "disc" }}>
              O projeto PokeNext foi criado em NextJS para fins de estudos onde
              implementamos uma API externa e diversas funções e métodos
              modernos da linguagem.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Implementamos o getStaticPaths que é especialmente útil para criar
              páginas dinâmicas com conteúdo estático, como blogs, listagens de
              produtos ou páginas de categorias. Ele oferece flexibilidade para
              pré-renderizar páginas com base em parâmetros dinâmicos e aprimora
              o desempenho geral do site.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Utilizamos o getStaticProps que permite buscar dados externos
              durante a fase de construção e pré-renderizar páginas estáticas
              com base nesses dados, melhorando a velocidade de carregamento do
              site e garantindo que as informações estejam atualizadas.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Também empregamos uma API externa com os dados dinâmicos por ID e
              mapeamos todos os 251 Pokemons.
            </li>

            <br />
            <li style={{ listStyleType: "disc" }}>
              Obtemos algumas vantagens do Next.js que é construído em cima do
              React, o que significa que você pode aproveitar todo o ecossistema
              de bibliotecas e ferramentas do React para desenvolver seu site.
              Isso inclui a vasta comunidade, a documentação abrangente e as
              melhores práticas estabelecidas.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Roteamento simplificado: O Next.js possui um sistema de roteamento
              interno que simplifica a criação de rotas para as páginas do seu
              site. Você pode criar rotas dinâmicas com facilidade, permitindo a
              criação de URLs amigáveis e personalizadas.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Renderização híbrida: O Next.js suporta tanto a renderização do
              lado do servidor (Server-Side Rendering - SSR) quanto a
              renderização no lado do cliente (Client-Side Rendering - CSR),
              permitindo que você escolha a melhor abordagem para cada página ou
              componente do seu site.
            </li>
          </ul>
          <div className={styles.containerimg}>
            <img
              className={styles.zoomimg}
              src={pokenext}
              alt="pokenext"
              width={700}
            />
          </div>
        </div>

        <div>
          <NavLink
            to="https://poke-project-jhnn.vercel.app/"
            target="_blank"
            className={`${styles.btnwd} ${styles.web}`}
          >
            Acessar Projeto
          </NavLink>
          <NavLink
            to="https://github.com/JonathanZdebski/Poke-project"
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
