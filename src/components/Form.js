import Styles from "../components/Form.module.css";
import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Form = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const formFields = form.current.elements;
    const isFormFilled = Array.from(formFields).every(
      (field) => field.tagName === "BUTTON" || field.value.trim() !== ""
    );

    if (!isFormFilled) {
      toast.error(
        "Por favor, preencha todos os campos antes de enviar o e-mail.",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      return;
    }

    try {
      await emailjs.sendForm(
        "service_zet32rm",
        "template_c1kywm5",
        form.current,
        "YNgQJRZzSHe6Spfvk"
      );
      toast.success("Mensagem enviada com sucesso. Retorno em breve.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      form.current.reset();
    } catch (error) {
      toast.error("Nao foi possivel enviar agora. Tente novamente em instantes.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <section className={Styles.section}>
      <div className={Styles.panel}>
        <div className={Styles.header}>
          <p className={Styles.kicker}>Contato</p>
          <h2>Vamos transformar sua ideia em produto</h2>
          <p className={Styles.subtitle}>
            Preencha o formulario e eu retorno o mais rapido possivel.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className={Styles.form}>
          <div className={Styles.field}>
            <label htmlFor="contact-name">Nome</label>
            <input
              id="contact-name"
              type="text"
              name="user_name"
              autoComplete="name"
              placeholder="Seu nome"
              required
            />
          </div>

          <div className={Styles.field}>
            <label htmlFor="contact-email">E-mail</label>
            <input
              id="contact-email"
              type="email"
              name="user_email"
              autoComplete="email"
              placeholder="seuemail@dominio.com"
              required
            />
          </div>

          <div className={Styles.field}>
            <label htmlFor="contact-subject">Assunto</label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder="Sobre seu projeto"
              required
            />
          </div>

          <div className={Styles.field}>
            <label htmlFor="contact-message">Mensagem</label>
            <textarea
              id="contact-message"
              rows="6"
              name="message"
              placeholder="Descreva brevemente o que voce precisa."
              required
            />
          </div>

          <button type="submit" className={Styles.submitButton}>
            Enviar mensagem
          </button>
        </form>

        <ToastContainer
          position="top-right"
          autoClose={4500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />
      </div>
    </section>
  );
};

export default Form;
