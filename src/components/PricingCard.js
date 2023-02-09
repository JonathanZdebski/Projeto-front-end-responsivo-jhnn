import React from "react";
import Styles from "../components/PricingCard.module.css";
import { Link } from "react-router-dom";

function PricingCard() {
  return (
    <div>
      <div className={Styles.pricing}>
        <div className={Styles.cardcontainer}>
          <div className={Styles.card}>
            <h3>- Basic -</h3>
            <span className={Styles.bar}></span>
            <p className={Styles.btc}>$ 100</p>
            <p>- 3 Dias -</p>
            <p>- 3 Páginas -</p>
            <p>- Design Responsivo -</p>
            <Link to="/contact" className={Styles.btnproject}>
              REALIZAR COMPRA
            </Link>
          </div>

          <div className={Styles.card}>
            <h3>- Premium -</h3>
            <span className={Styles.bar}></span>
            <p className={Styles.btc}>$ 200</p>
            <p>- 2 Dias -</p>
            <p>- 5 Páginas -</p>
            <p>- Design Responsivo -</p>
            <Link to="/contact" className={Styles.btnproject}>
              REALIZAR COMPRA
            </Link>
          </div>

          <div className={Styles.card}>
            <h3>- Business -</h3>
            <span className={Styles.bar}></span>
            <p className={Styles.btc}>$ 300</p>
            <p>- 5 Dias -</p>
            <p>- 8 Páginas -</p>
            <p>- Design Responsivo -</p>
            <Link to="/contact" className={Styles.btnproject}>
              REALIZAR COMPRA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
