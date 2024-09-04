import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../components/Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import jhnnlogo from "../assets/jhnnlogo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    handleScroll(); // Chama a função de scroll suave

    // Adiciona um ouvinte para navegação, se aplicável
    window.addEventListener("popstate", handleScroll);

    return () => {
      window.removeEventListener("popstate", handleScroll);
    };
  }, []);

  return (
    <div className={styles.header}>
      <a href="/">
        <img className="imglogo" alt="jhn" src={jhnnlogo} />
      </a>
      <div className={click ? styles.navmenu : styles.navmenuactive}>
        <ul className={styles.navmenu}>
          <li onClick={() => window.location.reload()}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Projetos</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </div>
      <div className={styles.hamburguer} onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
