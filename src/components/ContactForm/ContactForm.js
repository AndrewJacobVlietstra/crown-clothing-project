import React from 'react';
import './ContactForm.styles.scss';

const ContactForm = () => {
  return (
    <div className='contact-form-container'>
      <form className='contact-form'>
        <h2 className='form-title'>Send us a message 🚀</h2>
        <input type='text' placeholder='Full name*' className='name-input' required></input>
        <input type='email' placeholder='Email*' className='email-input' required></input>
        <input type='text' placeholder='Subject' className='subject-input'></input>
        <label className='big-message-label' htmlFor='big-message'>Tell us more about yourself *</label>
        <textarea rows='7' id='big-message' required></textarea>
        <button type='submit' className='contact-form-submit'>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm;