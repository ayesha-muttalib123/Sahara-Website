'use client';  // Add this line to mark the component as a Client Component

import React, { useState } from 'react';
// import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message Sent!');
    // Here you would typically send the data to a server
  };

  return (
<>

<div className='parent-contact'>
<div className="contact-container">
  <Navbar/>
      <h2>Contact Us</h2>
      <p>We would love to hear from you! Please fill out the form below.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
     
    </div>
 <div className='child-footer'>
 <Footer/>
 </div>
</div>

</>
  );
};

export default ContactUs;
