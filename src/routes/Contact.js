import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HImage2 from "../components/HImage2";
import Form from "../components/Form";

function Contact() {
  return (
    <div>
      <Navbar />
      <HImage2 heading="CONTACT." text="Entre em contato conosco." />
      <Form />
      <Footer />
    </div>
  );
}
export default Contact;
