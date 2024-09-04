import React from "react";
import styles from "../components/ProjectEcommerce.module.css";
import { NavLink } from "react-router-dom";
import Translate from "../components/Translate";
import CarHub from "../assets/CarHub.png";

const ProjectCarHub = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card2}>
        <Translate />
        <div className={styles.title}>
          <h1>Projeto CarHub</h1>
          <h3 className={styles.resumetext2}>Detalhes:</h3>
          <ul className={styles.resumetext}>
            <li style={{ listStyleType: "disc" }}>
              <strong>TypeScript:</strong>
              <ul>
                <li>
                  Segurança de Código: Adiciona tipagem estática ao JavaScript,
                  ajudando a identificar e corrigir erros antes da execução,
                  tornando o código mais seguro e robusto.
                </li>
                <li>
                  Autocompletar e IntelliSense: Oferece sugestões de código e
                  informações úteis em editores, facilitando o desenvolvimento e
                  reduzindo erros.
                </li>
                <li>
                  Refatoração Fácil: Facilita a refatoração e manutenção do
                  código com verificação de tipos rigorosa.
                </li>
                <li>
                  Integração com Tecnologias: Suporta muitos frameworks e
                  bibliotecas modernas, melhorando a interoperabilidade.
                </li>
              </ul>
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              <strong>Tailwind CSS:</strong>
              <ul>
                <li>
                  Desenvolvimento Rápido: Utiliza classes pré-definidas para
                  criar layouts rapidamente, economizando tempo e garantindo
                  consistência no design.
                </li>
                <li>
                  Design Responsivo: Facilita a criação de interfaces
                  responsivas com classes de utilitários para diferentes
                  tamanhos de tela.
                </li>
                <li>
                  Personalização Simples: Permite customizar o design e
                  adicionar novas utilidades facilmente através de configuração.
                </li>
                <li>
                  CSS Otimizado: Remove classes não utilizadas, reduzindo o
                  tamanho do CSS e melhorando o desempenho do site.
                </li>
              </ul>
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              <strong>Next.js:</strong>
              <ul>
                <li>
                  Renderização Híbrida: Suporta renderização no servidor e
                  geração de sites estáticos, melhorando o desempenho e a
                  experiência do usuário.
                </li>
                <li>
                  Otimização Automática: Realiza divisão de código e
                  carregamento sob demanda para tempos de carregamento mais
                  rápidos.
                </li>
                <li>
                  Roteamento Simplificado: O sistema de roteamento baseado em
                  páginas facilita a criação e gerenciamento de rotas.
                </li>
                <li>
                  API Routes: Permite criar endpoints de API no mesmo projeto,
                  simplificando o desenvolvimento full-stack.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "-30px" }} className={styles.containerimg}>
          <img
            className={styles.zoomimg}
            src={CarHub}
            alt="CarHub"
            width={600}
          />
        </div>
        <div>
          <NavLink
            to="https://car-hub-jhnn-project.vercel.app/"
            target="_blank"
            className={`${styles.btnwd} ${styles.web}`}
          >
            Acessar Projeto
          </NavLink>
          <NavLink
            to="https://github.com/JonathanZdebski/CarHub-jhnn-project"
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

export default ProjectCarHub;
