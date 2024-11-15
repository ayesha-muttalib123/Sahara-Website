import React from 'react';


const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We would love to hear from you! Please fill out the form below.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message"  required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
export default ContactUs

