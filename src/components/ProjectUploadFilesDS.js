import React from "react";
import styles from "../components/ProjectEcommerce.module.css";
import { NavLink } from "react-router-dom";
import Translate from "../components/Translate";
import UploadFilesDSPic from "../assets/uploadfilesds.png";

const UploadFilesDS = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card2}>
        <Translate />
        <div className={styles.title}>
          <h1>Projeto SaaS Upload Files DS</h1>
          <h3 className={styles.resumetext2}>Detalhes:</h3>
          <ul className={styles.resumetext}>
            <br />
            <li style={{ listStyleType: "disc" }}>
              <strong>Google Analytics:</strong>
              <ul>
                <li>
                  Fornece insights detalhados sobre o tráfego e comportamento
                  dos usuários em seu site, ajudando a otimizar estratégias de
                  marketing e melhorar a experiência do usuário.
                </li>
                <br />
              </ul>
            </li>
            <li style={{ listStyleType: "disc" }}>
              <strong>Google Search SEO:</strong>
              <ul>
                <li>
                  Melhora a visibilidade do site nos resultados de pesquisa,
                  aumentando o tráfego orgânico e potencializando a descoberta
                  de conteúdo por novos usuários.
                </li>
                <br />
              </ul>
            </li>
            <li style={{ listStyleType: "disc" }}>
              <strong>TypeScript:</strong>
              <ul>
                <li>
                  Adiciona tipagem estática ao JavaScript, reduzindo erros e
                  melhorando a manutenção e escalabilidade do código com uma
                  experiência de desenvolvimento mais robusta.
                </li>
                <br />
              </ul>
            </li>
            <li style={{ listStyleType: "disc" }}>
              <strong>Next.js:</strong>
              <ul>
                <li>
                  Framework para React que oferece renderização do lado do
                  servidor, geração de sites estáticos e otimização de
                  desempenho, facilitando o desenvolvimento de aplicativos web
                  rápidos e SEO-friendly.
                </li>
                <br />
              </ul>
            </li>
            <li style={{ listStyleType: "disc" }}>
              <strong>Stripe Payments:</strong>
              <ul>
                <li>
                  Simplifica a integração de pagamentos online, oferecendo uma
                  experiência de checkout segura e personalizável, além de
                  suporte a vários métodos de pagamento.
                </li>
                <br />
              </ul>
            </li>
            <li style={{ listStyleType: "disc" }}>
              <strong>Tailwind CSS:</strong>
              <ul>
                <li>
                  Framework de CSS utilitário que permite a criação de
                  interfaces responsivas e personalizáveis rapidamente, com um
                  sistema de classes flexível que facilita a estilização.
                </li>
                <br />
              </ul>
            </li>
            <li style={{ listStyleType: "disc" }}>
              <strong>NextAuth v5:</strong>
              <ul>
                <li>
                  Biblioteca de autenticação para Next.js que oferece suporte a
                  múltiplos provedores de autenticação e uma solução de sessão
                  robusta, simplificando a gestão de usuários e autenticação.
                </li>
                <br />
              </ul>
            </li>
            <li style={{ listStyleType: "disc" }}>
              <strong>MongoDB:</strong>
              <ul>
                <li>
                  Banco de dados NoSQL que armazena dados em documentos JSON,
                  oferecendo flexibilidade na modelagem de dados e
                  escalabilidade horizontal para aplicações modernas.
                </li>
                <br />
              </ul>
            </li>
            <li style={{ listStyleType: "disc" }}>
              <strong>EdgeStore:</strong>
              <ul>
                <li>
                  Serviço de armazenamento de arquivos seguro e escalável, ideal
                  para gerenciar o upload e acesso a arquivos com alta
                  performance e proteção de dados.
                </li>
                <br />
              </ul>
            </li>
            <li style={{ listStyleType: "disc" }}>
              <strong>ShadCN:</strong>
              <ul>
                <li>
                  Biblioteca de componentes UI com suporte a transições suaves e
                  estilos personalizáveis, facilitando a criação de interfaces
                  ricas e dinâmicas.
                </li>
                <br />
              </ul>
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "-50px" }} className={styles.containerimg}>
          <img
            className={styles.zoomimg}
            src={UploadFilesDSPic}
            alt="UploadFilesDSPic"
            width={600}
          />
        </div>
        <div>
          <NavLink
            to="https://upload-files-ds.vercel.app/"
            target="_blank"
            className={`${styles.btnwd} ${styles.web}`}
          >
            Acessar Projeto
          </NavLink>
          <NavLink
            to="https://github.com/JonathanZdebski/upload-files-ds"
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

export default UploadFilesDS;
