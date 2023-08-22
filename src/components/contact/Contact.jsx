import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rdx0itb', 'template_h48edet', e.target, 'WIl-MiJaM3o1eH5MU')
      .then((response) => {
        console.log('SUCCESS!');
        setMessage(true);
      })
      .catch((error) => console.log('FAILED...', error));
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" placeholder="Your Name" />
          <label>Your Email*</label>
          <input name="user_email" type="text" placeholder="Email" />
          <label>Message*</label>
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I will reply ASAP ;)</span>}
        </form>
      </div>
    </div>
  );
}
