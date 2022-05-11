import React, { useState } from 'react';
import './contact.scss';

const Contact = ({ Ref }) => {
  const [form, setForm] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });
  const { name, subject, email, message } = form;

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className='Contact' ref={Ref}>
      <div className='TopTitle'>Get In Touch</div>
      <div className='Title'>CONTACT</div>
      <div className='Contents'>
        <div className='Form'>
          <div className='Line1'>
            <input
              className='Name'
              name='name'
              value={name}
              placeholder='Name'
              onChange={(e) => onChange(e)}
              autoComplete='off'
            />
            <input
              className='Subject'
              name='subject'
              value={subject}
              placeholder='Subject'
              onChange={(e) => onChange(e)}
              autoComplete='off'
            />
          </div>
          <input
            className='Email'
            name='email'
            value={email}
            placeholder='E-Mail'
            onChange={(e) => onChange(e)}
            autoComplete='off'
          />
          <textarea
            className='Message'
            name='message'
            value={message}
            placeholder='Message'
            onChange={(e) => onChange(e)}
            autoComplete='off'
          />
          <div className='Btn'>SEND MESSAGE</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
