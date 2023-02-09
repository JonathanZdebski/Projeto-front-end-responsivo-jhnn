import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../components/Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className={styles.header}>
      <Link to="/">
        <h1>JHNN</h1>
      </Link>
      <div className={click ? styles.navmenu : styles.navmenuactive}>
        <ul className={styles.navmenu}>
          <li>
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
