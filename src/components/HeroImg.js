import Styles from "../components/HeroImg.module.css";
import coding from "../assets/codingone.png";
import { Link } from "react-router-dom";

function HeroImg() {
  return (
    <section className={Styles.hero}>
      <div className={Styles.mask}>
        <img className={Styles.intoimg} src={coding} alt="Codigo em um notebook" />
      </div>
      <div className={Styles.gridOverlay} />

      <div className={Styles.content}>
        <p className={Styles.eyebrow}>Ola, meu nome e Jonathan</p>

        <h1 className={Styles.title}>
          Desenvolvedor Front-end com experiencia em React.js, Next.js,
          TypeScript e boas praticas de UI/UX.
        </h1>

        <div className={Styles.actions}>
          <Link to="/project" className={`${Styles.cta} ${Styles.primary}`}>
            Projetos
          </Link>
          <Link to="/contact" className={`${Styles.cta} ${Styles.secondary}`}>
            Contato
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroImg;
