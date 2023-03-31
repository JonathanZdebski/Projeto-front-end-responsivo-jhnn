import Styles from "../components/Footer.module.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
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
          <h4>Sobre nós</h4>
          <p>
            Lorem ipsum sem scelerisque condimentum a donec arcu, eget massa
            nisi nec molestie venenatis mi.
          </p>
          <ul className={Styles.social}>
            <li>
              <FaFacebook
                size={30}
                style={{
                  color: "#fff",
                  marginRight: "0rem",
                }}
              />
            </li>
            <li>
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "0rem" }}
              />
            </li>
            <li>
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "0rem" }}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
