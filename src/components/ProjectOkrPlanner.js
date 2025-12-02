import React from "react";
import styles from "../components/ProjectEcommerce.module.css";
import { NavLink } from "react-router-dom";
import Translate from "../components/Translate";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";

const ProjectOkrPlanner = () => {
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
          <h1>Projeto SaaS OKR Planner</h1>
          <h3 className={styles.resumetext2}>Detalhes:</h3>

          <ul className={styles.resumetext}>
            <li style={{ listStyleType: "disc" }}>
              <strong>Next.js:</strong> <br />
              Framework React moderno que oferece SSR, SSG e rotas otimizadas.
              Facilita a criação de aplicações rápidas, escaláveis e com
              excelente desempenho, além de melhorar significativamente o SEO e
              fornecer otimizações automáticas de build.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              <strong>Supabase:</strong> <br />
              Plataforma open-source que funciona como uma alternativa completa
              ao Firebase. Oferece banco de dados PostgreSQL, autenticação,
              storage e APIs automáticas, permitindo criar aplicações modernas
              com back-end escalável e fácil de integrar ao Next.js.
            </li>
            <br />

            <li style={{ listStyleType: "disc" }}>
              <strong>Framer Motion:</strong> <br />
              Biblioteca de animações avançadas para React e Next.js. Permite
              criar transições suaves, microinterações e efeitos dinâmicos com
              alta performance, trazendo vida e profissionalismo à interface do
              usuário.
            </li>
            <br />

            <li style={{ listStyleType: "disc" }}>
              <strong>Stripe Payments:</strong> <br />
              Plataforma de pagamentos moderna que facilita a integração de
              cobranças online. Suporta cartões, Pix, pagamentos recorrentes e
              checkout otimizado, garantindo segurança, velocidade e uma
              experiência de pagamento profissional.
            </li>
            <br />

            <li style={{ listStyleType: "disc" }}>
              <strong>Google Search Console:</strong> <br />
              Ferramenta essencial do Google para monitorar e otimizar a
              presença de um site nos resultados de busca. Permite analisar
              desempenho orgânico, identificar problemas de indexação, enviar
              sitemaps, acompanhar palavras-chave que geram tráfego e garantir
              que o site esteja seguindo as melhores práticas de SEO.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              <strong>Shadcn/UI:</strong> <br />
              Biblioteca de componentes moderna e altamente personalizável para
              React e Next.js. Oferece componentes acessíveis, estilizados com
              Tailwind CSS, permitindo criar interfaces elegantes e consistentes
              com rapidez. Facilita a padronização do design e acelera a
              construção de interfaces profissionais.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              <strong>TypeScript:</strong> <br />
              Superset do JavaScript que adiciona tipagem estática, ajudando a
              prevenir erros durante o desenvolvimento. Traz maior segurança,
              organização, previsibilidade e mantém o código mais limpo e fácil
              de escalar.
            </li>
            <br />

            <li style={{ listStyleType: "disc" }}>
              <strong>NextAuth v5:</strong> <br />
              Biblioteca de autenticação para Next.js que oferece suporte a
              múltiplos provedores de autenticação e uma solução de sessão
              robusta, simplificando a gestão de usuários e autenticação.
            </li>
            <br />

            <li style={{ listStyleType: "disc" }}>
              <strong>Tailwind CSS:</strong> <br />
              Framework de utilitários CSS que acelera a criação de interfaces
              modernas, responsivas e altamente personalizáveis. Permite
              estilização rápida sem sair do JSX, mantendo consistência e
              produtividade no desenvolvimento.
            </li>
            <br />
          </ul>
        </div>

        <div>
          <h3 className={styles.apres}>APRESENTAÇÃO DO PROJETO EM VÍDEO:</h3>{" "}
          <br />
          <YouTube
            videoId="WG4hl9TFOWw"
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
            to="https://www.okrplanner.com/"
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

export default ProjectOkrPlanner;
