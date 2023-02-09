import Styles from "../components/Form.module.css";
import React from "react";

function Form() {
  return (
    <div className={Styles.form}>
      <form>
        <label>Nome</label>
        <input type="text"></input>

        <label>E-mail</label>
        <input type="email"></input>

        <label>Assunto</label>
        <input type="Subject"></input>

        <label>Mensagem</label>
        <textarea rows="6" placeholder="Digite sua mensagem aqui"></textarea>
        <button className="btn">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
