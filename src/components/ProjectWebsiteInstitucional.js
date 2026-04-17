import React from "react";
import styles from "../components/ProjectEcommerce.module.css";
import DraCamilaImg from "../assets/DraCamilaImg.png";
import { NavLink } from "react-router-dom";

const ProjectWebsiteInstitucional = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card2}>
        <div className={styles.title}>
          <h1>Projeto Website Institucional</h1>
          <h3 className={styles.resumetext2}>Detalhes:</h3>

          <div className={styles.summaryBlock}>
            <h4 className={styles.summaryTitle}>Sobre o produto</h4>
            <p className={styles.summaryText}>
              Projeto desenvolvido com foco em design moderno, performance e
              boas práticas de front-end.
            </p>
            <p className={styles.summaryText}>
              O site apresenta uma estrutura institucional completa para uma
              clínica veterinária, com seções informativas, layout responsivo e
              experiência do usuário bem definida. Desenvolvido utilizando
              Next.js, TypeScript e Tailwind CSS, priorizando componentização,
              tipagem forte e otimização para SEO.
            </p>
          </div>

          <ul className={styles.resumetext}>
            <li style={{ listStyleType: "disc" }}>
              <strong>Tecnologias utilizadas:</strong> Next.js (App Router),
              TypeScript, Tailwind CSS.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              <strong>Finalidade do projeto:</strong> Prática de arquitetura
              front-end moderna.
            </li>
            <br />
          </ul>
        </div>

        <div className={styles.containerimg}>
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