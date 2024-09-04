import React from "react";
import styles from "../components/ProjectEcommerce.module.css";
import { NavLink } from "react-router-dom";
import Translate from "../components/Translate";
import NewTab from "../assets/newtab.png";

const ProjectNewTab = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card2}>
        <Translate />
        <div className={styles.title}>
          <h1>Projeto New Tab</h1>
          <h3 className={styles.resumetext2}>Detalhes:</h3>
          <ul className={styles.resumetext}>
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
                <br />
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    <strong>Benefícios do LocalStorage:</strong>
                  </li>
                  <li>
                    *Persistência: Armazena dados que permanecem após o
                    fechamento do navegador.
                  </li>
                  <li>
                    *Acesso Rápido: Dados acessados localmente, sem necessidade
                    de requisições ao servidor.
                  </li>
                  <li>
                    *Simplicidade: Solução fácil de usar com uma API simples.
                  </li>
                  <li>
                    *Offline: Disponível mesmo sem conexão com a internet.
                  </li>
                  <li>
                    *Capacidade Adequada: Oferece espaço suficiente para muitas
                    aplicações.
                  </li>
                  <li>
                    *Facilidade de Implementação: Métodos diretos e simples para
                    armazenar e recuperar dados.
                  </li>
                </ul>
              </ul>
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "-30px" }} className={styles.containerimg}>
          <img
            className={styles.zoomimg}
            src={NewTab}
            alt="NewTab "
            width={600}
          />
        </div>
        <div>
          <NavLink
            to="https://newtab-chi.vercel.app/"
            target="_blank"
            className={`${styles.btnwd} ${styles.web}`}
          >
            Acessar Projeto
          </NavLink>
          <NavLink
            to="https://github.com/JonathanZdebski/newtab"
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

export default ProjectNewTab;
