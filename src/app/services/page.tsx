// Services.jsx
import React from 'react';
const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <p>We offer a range of services to meet your needs.</p>
      <div className="service-cards">
        <div className="service-card">
          <img src="pic-1.png" alt="Camel Riding" className="service-image" />
          <h3>Camel Rides</h3>
          <p>Experience the beauty of the Sahara Desert on a guided camel ride.</p>
        </div>
        <div className="service-card">
          <img src="pic-2.png" alt="Desert Camping" className="service-image" />
          <h3>Desert Camping</h3>
          <p>Enjoy a unique overnight experience under the stars in our desert camps.</p>
        </div>
        <div className="service-card">
          <img src="pic-3.png" alt="Cultural Experiences" className="service-image" />
          <h3>Cultural Experiences</h3>
          <p>Immerse yourself in local traditions and learn about the Saharan lifestyle.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;