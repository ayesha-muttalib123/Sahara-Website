import React from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';

function AboutUs() {
  return (
<>


<div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">About Sahara Group</h1>
          <p className="hero-description">
            Transforming businesses with innovative solutions and unparalleled expertise.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-description">
          At Sahara Group, our mission is to empower businesses with cutting-edge technology and creative solutions, enabling them to excel in a rapidly evolving digital world.
        </p>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <Image src="/images1.jpg" alt="Jane Doe" width={200} height={200} className="team-image" />
            <h3 className="team-name">Jane Doe</h3>
            <p className="team-role">CEO & Founder</p>
          </div>
          <div className="team-member">
            <Image src="/images2.jpg" alt="John Smith" width={200} height={200} className="team-image" />
            <h3 className="team-name">John Smith</h3>
            <p className="team-role">Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <Image src="/images3.jpg" alt="Sarah Lee" width={200} height={200} className="team-image" />
            <h3 className="team-name">Sarah Lee</h3>
            <p className="team-role">Lead Designer</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2 className="section-title">Our Values</h2>
        <p className="section-description">
          We are committed to integrity, creativity, and delivering exceptional value to our clients through teamwork and innovation.
        </p>
      </section>
      
    </div>
    <Footer/>

</>
  );
}

export default AboutUs;
