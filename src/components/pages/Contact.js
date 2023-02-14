import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style/contact.css";
import Swal from "sweetalert2";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3pb4ym8",
        "template_1dtzrjj",
        form.current,
        "UtS5wF4XdHFhXqFWX"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Email its been send",
            showConfirmButton: true,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="containerContact">
      <form ref={form} onSubmit={sendEmail}>
        <h2>Contact Me</h2>

        <input type="text" name="from_name" placeholder="Name" />

        <input
          type="email"
          name="reply_to"
          placeholder="example@mail"
          id="email"
        />

        <h4>type your message here....</h4>
        <textarea name="message" />
        <input type="submit" value="Send" id="button" />
      </form>
    </div>
  );
};
