import Styles from "../components/Form.module.css";
import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zet32rm",
        "template_c1kywm5",
        form.current,
        "YNgQJRZzSHe6Spfvk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSendMessage = () => {
    const formFields = form.current.elements;

    const isFormFilled = Array.from(formFields).every(
      (field) => field.tagName === "BUTTON" || field.value.trim() !== ""
    );
    if (isFormFilled) {
      toast.success("Seu e-mail foi enviado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        window.location.reload();
      }, 6000);
    } else {
      toast.error(
        "Por favor, preencha todos os campos antes de enviar o e-mail.",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    }
  };

  return (
    <div className={Styles.form}>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nome</label>
        <input type="text" name="user_name" required />
        <label>E-mail</label>
        <input type="email" name="user_email" required />
        <label>Assunto</label>
        <input type="Subject" name="subject" required />
        <label>Mensagem</label>
        <textarea type="description" rows="6" name="message" required />
        <button
          type="handleSubmit"
          onClick={handleSendMessage}
          className="btn"
          required
        >
          Enviar
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Form;
