import Styles from "../components/Footer.module.css";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.container}>
        {/* INFO */}
        <div className={Styles.col}>
          <h3 className={Styles.title}>Contato</h3>

          <div className={Styles.item}>
            <FaHome className={Styles.icon} />
            <p>
              Ponta Grossa, PR
              <br />
              Brasil
            </p>
          </div>

          <div className={Styles.item}>
            <FaPhone className={Styles.icon} />
            <p>(55) 42 99852-7599</p>
          </div>

          <div className={Styles.item}>
            <FaMailBulk className={Styles.icon} />
            <p>jonathanzdebski@yahoo.com</p>
          </div>
        </div>

        {/* LINKS */}
        <div className={Styles.col}>
          <h3 className={Styles.title}>Navegação</h3>
          <ul className={Styles.links}>
            <li>
              <Link to="/about">Sobre mim</Link>
            </li>
            <li>
              <Link to="/project">Projetos</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className={Styles.col}>
          <h3 className={Styles.title}>Redes sociais</h3>

          <div className={Styles.social}>
            <NavLink to="https://wa.me/5542998527599" target="_blank">
              <FaWhatsapp />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/jonathan-zdebski-dalalibra-3589851a0/"
              target="_blank"
            >
              <FaLinkedin />
            </NavLink>
            <NavLink to="https://github.com/JonathanZdebski" target="_blank">
              <FaGithub />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/jonathandalalibra/"
              target="_blank"
            >
              <FaInstagram />
            </NavLink>
          </div>
        </div>
      </div>

      <div className={Styles.copy}>
        © {new Date().getFullYear()} Jonathan Zdebski — Todos os direitos
        reservados
      </div>
    </footer>
  );
}

export default Footer;
