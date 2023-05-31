import React from "react";
import styles from "../components/ProjectEcommerce.module.css";
import { NavLink } from "react-router-dom";
import Translate from "../components/Translate";
import prompts from "../assets/prompts.png";
import { Link } from "react-router-dom";

const ProjectEcommerce = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card2}>
        <Translate />
        <div className={styles.title}>
          <h1>Projeto Prompts Full-Stack</h1>
          <h3 className={styles.resumetext2}>Detalhes:</h3>
          <ul className={styles.resumetext}>
            <li style={{ listStyleType: "disc" }}>
              O projeto Prompts foi realizado na mais nova versão do NextJS onde
              não utilizamos pages router e sim o app router da nova
              atualização. A atualização para o Next.js 13 não requer o uso do
              novo App Router. Você pode continuar usando páginas com novos
              recursos que funcionam em ambos os diretórios, como o componente
              Imagem atualizado, componente Link, componente Script e otimização
              de fonte.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              O diretório pages router usa getServerSideProps e getStaticProps
              para buscar dados para páginas. Dentro do diretório app, essas
              funções anteriores de busca de dados são substituídas por uma API
              mais simples construída sobre fetch() e componentes de servidor
              React assíncronos. Mais informações na{" "}
              <Link
                to="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration"
                className={styles.Link}
                target="_blank"
              >
                documentação.
              </Link>
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Integramos o uso do Autenticador do Google que oferece facilidade
              de uso, segurança, confiabilidade, integração com outros serviços
              do Google e redução do trabalho de desenvolvimento. Essas
              vantagens podem melhorar a experiência do usuário e acelerar o
              processo de implementação da autenticação em sua aplicação.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              Integramos também o uso do MongoDB Atlas que oferece
              escalabilidade, gerenciamento automático, alta disponibilidade,
              segurança avançada, integração com serviços em nuvem e
              flexibilidade de implantação. Esses benefícios facilitam o
              desenvolvimento e o gerenciamento de aplicativos que requerem um
              banco de dados confiável, seguro e escalável na nuvem.
            </li>

            <br />
            <li style={{ listStyleType: "disc" }}>
              Aplicamos o CRUD no projeto que oferece facilidade de
              implementação, integração com APIs, pré-renderização otimizada,
              roteamento avançado, atualizações em tempo real e benefícios de
              escalabilidade e desempenho. Essas vantagens combinadas ajudam a
              criar aplicações robustas, eficientes e com uma ótima experiência
              de usuário.
            </li>
            <br />
            <li style={{ listStyleType: "disc" }}>
              O App Router do Next.js oferece várias vantagens nas aplicações.
              Ele fornece um sistema de roteamento avançado, permitindo criar
              rotas estáticas, dinâmicas e com parâmetros de forma simples. Além
              disso, suporta a pré-renderização otimizada, melhorando o
              desempenho e a eficiência do carregamento. Com o carregamento de
              código otimizado, o tempo de carregamento inicial da página é
              reduzido. O suporte ao roteamento no lado do servidor possibilita
              a execução de lógica personalizada durante a renderização do
              servidor. O App Router atual também facilita a migração de
              aplicações existentes e faz parte de um ecossistema ativo, com
              suporte e recursos adicionais disponíveis. Essas vantagens tornam
              o App Router do Next.js uma escolha poderosa para lidar com o
              roteamento em aplicações Next.js.
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
              src={prompts}
              alt="prompts"
              width={600}
            />
          </div>
        </div>

        <div>
          <NavLink
            to="https://projeto-fullstack-promp.vercel.app/"
            target="_blank"
            className={`${styles.btnwd} ${styles.web}`}
          >
            Acessar Projeto
          </NavLink>
          <NavLink
            to="https://github.com/JonathanZdebski/Projeto-fullstack-promp"
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
