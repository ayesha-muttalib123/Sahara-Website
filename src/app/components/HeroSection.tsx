import React from 'react';
import Navbar from './Navbar';


const HeroSection = () => {
  return (
    <>
   <Navbar/>
      <section className="hero">
        <h1>Welcome to Sahara Group Services</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ratione deserunt qui
          <br /> repudiandae quasi alias earum iure nulla ut, enim modi quae sapiente. Deserunt, modi eligendi dicta molestias veniam impedit?
        </p>
        <div>
          <button>Enroll Now</button>
          <button>Read More</button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
