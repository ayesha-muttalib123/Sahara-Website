import React from 'react';
import Image from 'next/image';

function AboutUs() {
  return (
    <div className="about-container">
      
      <section className="hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>We are passionate about delivering the best digital experiences.</p>
        </div>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses with the latest technology solutions and help them grow in the digital world.
        </p>
      </section>

  
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <Image src="images1.jpg" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <Image src="/images2.jpg" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <Image src="/images3.jpg" alt="Team Member 3" />
            <h3>Sarah Lee</h3>
            <p>Lead Designer</p>
          </div>
        </div>
      </section>

    
      <section className="values-section">
        <h2>Our Values</h2>
        <p>We believe in integrity, creativity, and delivering exceptional value to our clients.</p>
      </section>
    </div>
  );
}

export default AboutUs;
