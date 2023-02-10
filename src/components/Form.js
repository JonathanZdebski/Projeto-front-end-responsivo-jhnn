import Styles from "../components/Form.module.css";
import React from "react";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          assunto: assunto,
          message: message,
        }),
      });

      const resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setAssunto("");
        setMessage("");
      } else {
        setMessage("Email enviado!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={Styles.form}>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Assunto</label>
        <input
          type="Subject"
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
        />
        <label>Mensagem</label>
        <textarea
          type="description"
          rows="6"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="handleSubmit" className="btn">
          Enviar
        </button>
      </form>
      <div className="setMessage">{message ? <p>{}</p> : null}</div>
    </div>
  );
}

export default Form;
