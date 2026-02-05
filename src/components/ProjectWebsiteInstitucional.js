import React from "react";
import styles from "../components/ProjectEcommerce.module.css";
import DraCamilaImg from "../assets/DraCamilaImg.png";
import Translate from "../components/Translate";
import { NavLink } from "react-router-dom";

const ProjectWebsiteInstitucional = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card2}>
        <Translate />
        <div className={styles.title}>
          <h1>Projeto Website Institucional</h1>
          <h3 className={styles.resumetext2}>Detalhes:</h3>
          <ul className={styles.resumetext}>
            <li style={{ listStyleType: "disc" }}>
              <strong>Next.js:</strong> Estrutura moderna com rotas otimizadas,
              renderização eficiente e bom desempenho para páginas
              institucionais.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              <strong>TypeScript:</strong> Tipagem estática para maior
              confiabilidade, manutenção simples e evolução segura do projeto.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              <strong>Tailwind CSS:</strong> Estilização rápida e consistente
              para interfaces modernas, responsivas e com boa identidade visual.
            </li>
            <br />
          </ul>
        </div>
        <div style={{ marginTop: "-30px" }} className={styles.containerimg}>
          <img
            className={styles.zoomimg}
            src={DraCamilaImg}
            alt="Website Institucional"
            width={700}
          />
        </div>
        <div>
          <NavLink
            to="https://website-veterinaria.vercel.app/"
            target="_blank"
            className={`${styles.btnwd} ${styles.web}`}
          >
            Acessar Projeto
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectWebsiteInstitucional;
