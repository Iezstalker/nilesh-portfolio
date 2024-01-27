import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { RiMessengerLine } from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_quzdyfa', 'template_f4qqie4', form.current, '8DJIPLUgOVlwhGxmL')
    };

  return (
    <section id='contact'>
      {/* <h5>Get In Touch</h5> */}
      <h1>Contact Me</h1>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nk875512@gmail.com</h5>
            <a href="mailto:nk875512@gmail.com">Send A Message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Ping Me</h5>
            <a href="whatsapp:contact=917880565666@s.whatsapp.com&message=" target="_blank">Send A Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Messenger</h5>
            <a href=""></a>
          </article>
        </div>
        <form ref ={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact