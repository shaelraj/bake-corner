import React, { useState, useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from '@emailjs/browser';

import "./contact-us.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const ContactUsPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sothdo7', 'template_xqmq6gz', form.current, '2t3i-a0I-iJRk_s37')
      .then((result) => {
          console.log(result.text);
          setUserName('');
          setEmail('');
          setMessage('');
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    if(name === 'userName'){
      setUserName(value);
      return;
    }

    if(name === 'email'){
      setEmail(value);
      return;
    }
    if(name === 'message'){
      setMessage(value);
      return;
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4 className="option-title">Email</h4>
            <h5 className="option-title">cakeandbake96@gmail.com</h5>
            <a href="mailto:cakeandbake96@gmail.com" className="option-link">
              {" "}
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-option-icon" />
            <h4 className="option-title">Messenger</h4>
            <h5 className="option-title">bakecorner3</h5>
            <a href="https://m.me/bakecorner3" className="option-link">
              {" "}
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4 className="option-title">WhatsApp</h4>
            <h5 className="option-title">+91 82354 48372</h5>
            <a
              href="https://api.whatsapp.com/send?phone=918235448372"
              className="option-link"
            >
              Send a message
            </a>
          </article>
        </div>
      </div>

      <form className="contact-us-form" ref={form} onSubmit={sendEmail}>
        <h2>Contact Us</h2>
        <FormInput
          name="userName"
          type="userName"
          label="Name"
          value={userName}
          onChange={handleInputChange}
          required
        />
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="message"
          className="form-textarea"
          rows={7}
          placeholder="Your message"
          value={message}
          onChange={handleInputChange}
          required
        />
        <CustomButton type="submit"> Send message </CustomButton>
      </form>
    </div>
  );
};

export default ContactUsPage;
