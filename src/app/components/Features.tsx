import React from 'react';
import Image from 'next/image';

function Features() {
  const features = [
    {
      count: '2,245,341',
      description: 'Satisfied Customers',
      imgSrc: '/feature1.png',
      imgAlt: 'Satisfied Customers',
    },
    {
      count: '46,328',
      description: 'Successful Group Tours',
      imgSrc: '/feature2.png',
      imgAlt: 'Successful Group Tours',
    },
    {
      count: '828,867',
      description: 'Positive Reviews',
      imgSrc: '/feature3.png',
      imgAlt: 'Positive Reviews',
    },
    {
      count: '1,926,436',
      description: 'Years of Excellence',
      imgSrc: '/feature4.png',
      imgAlt: 'Years of Excellence',
    },
  ];

  return (
    <section className="features-section">
      <div className="features">
        {/* Left Section with Heading and Description */}
        <div className="features-left">
          <h2 className="features-heading">Why Choose Sahara Group Services?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
            ullamcorper consequat pretium est urna nec eget. Ut at turpis arcu.
          </p>
        </div>

        {/* Right Section with Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <Image
                src={feature.imgSrc}
                alt={feature.imgAlt}
                width={100}
                height={100}
                className="feature-image"
              />
              <h3 className="feature-count">{feature.count}</h3>
              <p className="feature-description">{feature.description}</p>
             
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Features;
