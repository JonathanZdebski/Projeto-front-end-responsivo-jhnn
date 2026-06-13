import React from "react";
import styles from "../components/ProjectEcommerce.module.css";
import { NavLink } from "react-router-dom";
import aiModelLearn from "../assets/aimodellearn.png";

const ProjectAiModelLearn = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card2}>
        <div className={styles.title}>
          <h1>Projeto SaaS AI Model Learn</h1>
          <h3 className={styles.resumetext2}>Detalhes:</h3>
          <div className={styles.summaryBlock}>
            <h4 className={styles.summaryTitle}>Sobre o produto</h4>
            <p className={styles.summaryText}>
              AI Model Learn é a plataforma que centraliza o universo de IA em
              um só lugar. O produto permite descobrir, comparar e testar
              ferramentas para texto, imagem, áudio, vídeo, código e dados, com
              descrições claras e acesso direto.
            </p>
            <p className={styles.summaryText}>
              A experiência de aprendizado segue um caminho guiado, passando
              por fundamentos, engenharia de prompts e prática real, com
              certificado ao final. A comunidade também pode compartilhar
              experiências, publicar conteúdo e construir conhecimento de forma
              colaborativa.
            </p>
            <p className={styles.summaryText}>
              Com tradução automática em 7 idiomas preservando contexto e tom,
              a plataforma remove a barreira do inglês e torna a IA mais
              acessível, prática e útil para iniciantes e profissionais.
            </p>
          </div>

          <ul className={styles.resumetext}>
            <li style={{ listStyleType: "disc" }}>
              <strong>Next.js:</strong> <br />
              Framework React moderno que oferece rotas otimizadas, SSR, SSG e
              excelente performance para aplicações SaaS escaláveis.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              <strong>TypeScript:</strong> <br />
              Adiciona tipagem estática ao JavaScript, aumentando segurança,
              previsibilidade e organização em bases de código maiores.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              <strong>Supabase:</strong> <br />
              Plataforma com banco PostgreSQL, autenticação, storage e APIs
              automáticas para acelerar o desenvolvimento do back-end.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              <strong>Tailwind CSS:</strong> <br />
              Framework de utilitários que permite criar interfaces modernas,
              responsivas e consistentes com produtividade.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              <strong>NextAuth v5:</strong> <br />
              Solução de autenticação para Next.js com suporte a múltiplos
              provedores, sessões seguras e fluxo de login profissional.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              <strong>Framer Motion:</strong> <br />
              Biblioteca de animações para criar transições suaves,
              microinterações e uma experiência mais dinâmica.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              <strong>Google Search Console SEO:</strong> <br />
              Auxilia no monitoramento de indexação, desempenho orgânico,
              sitemaps e boas práticas de presença nos resultados de busca.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              <strong>Shadcn/UI:</strong> <br />
              Conjunto de componentes acessíveis e personalizáveis que acelera
              a construção de interfaces consistentes com Tailwind CSS.
            </li>
            <br />
          </ul>
        </div>

        <div className={styles.containerimg}>
          <img
            src={aiModelLearn}
            alt="Interface do projeto SaaS AI Model Learn"
            className={styles.zoomimg}
          />
        </div>

        <div>
          <NavLink
            to="https://aimodellearn.com/"
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

export default ProjectAiModelLearn;
