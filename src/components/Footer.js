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
    <div className={Styles.footer}>
      <div className={Styles.footercontainer}>
        <div className={Styles.left}>
          <div className={Styles.location}>
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Ponta Grossa, PR.</p>
              <p>Brasil.</p>
            </div>
          </div>
          <div className={Styles.phone}>
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              (55)42 99852-7599
            </h4>
          </div>
          <div className={Styles.email}>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              jonathanzdebski@yahoo.com
            </h4>
          </div>
        </div>
        <div className={Styles.right}>
          <Link to="/about">
            <h4>Sobre mim</h4>
          </Link>
          <p></p>
          <ul className={Styles.social}>
            <li>
              <NavLink to="https://wa.me/5542998527599" target="_blank">
                <FaWhatsapp
                  size={30}
                  style={{ color: "#fff", marginRight: "0rem" }}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.linkedin.com/in/jonathan-zdebski-3589851a0/"
                target="_blank"
              >
                <FaLinkedin
                  size={30}
                  style={{ color: "#fff", marginRight: "0rem" }}
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="https://github.com/JonathanZdebski" target="_blank">
                <FaGithub
                  size={30}
                  style={{
                    color: "#fff",
                    marginRight: "0rem",
                  }}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.instagram.com/jonathandalalibra/"
                target="_blank"
              >
                <FaInstagram
                  size={30}
                  style={{ color: "#fff", marginRight: "0rem" }}
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
