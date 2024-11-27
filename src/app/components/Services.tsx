import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <section className="services-container">
      
      <h2 className="services-heading">What're Hayya Group Visa?</h2>
      <p className="services-description">
        We offer a range of services to meet your needs.
      </p>
      <div className="service-cards">
        <div className="service-card">
          <Image
            src="/pic-1.png"
            alt="Camel Riding"
            className="service-image"
            width={300}
            height={200}
          />
          <h3>Camel Rides</h3>
          <p>Experience the beauty of the Sahara Desert on a guided camel ride.</p>
        </div>
        <div className="service-card">
          <Image
            src="/pic-2.png"
            alt="Desert Camping"
            className="service-image"
            width={300}
            height={200}
          />
          <h3>Desert Camping</h3>
          <p>Enjoy a unique overnight experience under the stars in our desert camps.</p>
        </div>
        <div className="service-card">
          <Image
            src="/pic-3.png"
            alt="Cultural Experiences"
            className="service-image"
            width={300}
            height={200}
          />
          <h3>Cultural Experiences</h3>
          <p>Immerse yourself in local traditions and learn about the Saharan lifestyle.</p>
        </div>
        <div className="service-card">
          <Image
            src="/pic-4.png"
            alt="Group Service"
            className="service-image"
            width={300}
            height={200}
          />
          <h3>Group Service</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
