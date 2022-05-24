import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

const ResultMessage = () => {
    return <p>Message has been sent! We will contact you shortly</p>
}

const ContactForm = (props) => {
  const form = useRef();
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_c2hlenr',
        'template_z18k827',
        form.current,
        'ZJu-GXYf45Y5SZ8gh'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-3'>
      <input name='fullName' type='text' placeholder='Full name' />
      <input name='email' type='email' placeholder='Email Address' />
      <input name='phone' type='tel' placeholder='Phone Number' />
      <input name='subject' type='text' placeholder='Service subject' />
      <textarea name='message' type='text' placeholder='Message' />
      <button>Send Message</button>
      <div>{result ? <ResultMessage/> : null}</div>
    </form>
  );
};

export default ContactForm;
