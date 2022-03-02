import React from 'react';
import './ContactPage.styles.scss';
import ContactMessage from '../../components/ContactMessage/ContactMessage';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <ContactMessage />
      <ContactForm />
    </div>
  )
}

export default ContactPage;