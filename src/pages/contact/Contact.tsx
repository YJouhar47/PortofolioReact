import React, { FormEventHandler, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../Components/Navbar/Navbar';

const ContactUs = () => {
  const[fname,setfName] = useState("");
  const[email,setEmail] = useState("");
  const[text, setText] = useState("");

  const sendEmail : FormEventHandler<HTMLFormElement>= (event) => {

    event.preventDefault();
    
    emailjs.sendForm('service_1dfy0ln', 'template_0479t3a', event.currentTarget, 'oN9pDSA5EKM4m_pa7')
      .then((result) => {
          console.log(result.text);
          setfName("")
          setEmail("")
          setText("");
          
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
    <form  onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" value={fname} onChange={(event) => { setfName(event.target.value) }} />
      <label>Email</label>
      <input type="email" name="user_email" value={email} onChange={(event) => { setEmail(event.target.value) }}  />
      <label>Message</label>
      <textarea name="message" value={text}  onChange={(event) => { setText(event.target.value) }}/>
      <input type="submit" value="Send" />
      </form>
      </div>
  );
};
export default ContactUs;