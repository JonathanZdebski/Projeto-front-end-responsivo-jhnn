import Styles from "../components/AboutContent.module.css";
import React from "react";
import { Link } from "react-router-dom";

function AboutContent() {
  return (
    <section className={Styles.about}>
      <div className={Styles.inner}>
        <article className={Styles.left}>
          <p className={Styles.kicker}>Sobre mim</p>
          <h2>Quem sou</h2>
          <p className={Styles.description}>
            Desenvolvedor Web com foco em arquitetura, clareza, performance,
            impacto real e IA.
            <br />
            <br />
            Atuo na construção de aplicações pensando além da implementação:
            entendo o problema, modelo o sistema e tomo decisões técnicas com
            base em trade-offs, escalabilidade e experiência do usuário.
            <br />
            <br />
            Tenho interesse especial em produtos digitais e sistemas bem
            estruturados, com foco em soluções que simplificam a complexidade
            {" — "}não aumentam.
            <br />
            <br />
            Trabalho principalmente com Next.js, React, TypeScript, Firebase e
            Supabase.
            <br />
            Desenvolvendo aplicações com autenticação, integração com APIs e
            organização de estado, sempre priorizando código sustentável,
            performance e evolução contínua.
            <br />
            <br />
            Atualmente, também venho explorando a integração de IA em
            aplicações, aplicando LLMs para tornar produtos mais inteligentes e
            eficientes.
          </p>

          <div className={Styles.actions}>
            <Link to="/contact" className={`${Styles.cta} ${Styles.primary}`}>
              Contato
            </Link>
            <Link
              to="https://wa.me/5542998527599"
              target="_blank"
              rel="noreferrer"
              className={`${Styles.cta} ${Styles.whatsapp}`}
            >
              WhatsApp
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutContent;
