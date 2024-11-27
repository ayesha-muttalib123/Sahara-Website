import React from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';

const Services = () => {
  return (
<>

<div className="services-container">
      <h2>Our Services</h2>
      <p>We offer a range of services to meet your needs.</p>
      <div className="service-cards">
        <div className="service-card">
          <Image src="/pic-1.png" alt="Camel Riding" className="service-image" width={300} height={200} />
          <h3>Camel Rides</h3>
          <p>Experience the beauty of the Sahara Desert on a guided camel ride.</p>
        </div>
        <div className="service-card">
          <Image src="/pic-2.png" alt="Desert Camping" className="service-image" width={300} height={200} />
          <h3>Desert Camping</h3>
          <p>Enjoy a unique overnight experience under the stars in our desert camps.</p>
        </div>
        <div className="service-card">
          <Image src="/pic-3.png" alt="Cultural Experiences" className="service-image" width={300} height={200} />
          <h3>Cultural Experiences</h3>
          <p>Immerse yourself in local traditions and learn about the Saharan lifestyle.</p>
        </div>
      </div>
     
    </div>
     <Footer/>


</>
  );
};

export default Services;
