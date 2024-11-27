import React from 'react';
import Image from 'next/image';

function Partners() {
  return (
    <section className="partners-section">
      <h2 className="partners-heading">Our Partners</h2>
      <div className="partners-logos">
        <div className="partner-logo">
          <Image src="/image1.png" alt="Partner 1" width={120} height={120} />
        </div>
        <div className="partner-logo">
          <Image src="/image2.png" alt="Partner 2" width={120} height={120} />
        </div>
        <div className="partner-logo">
          <Image src="/image3.png" alt="Partner 3" width={120} height={120} />
        </div>
        <div className="partner-logo">
          <Image src="/image4.png" alt="Partner 3" width={120} height={120} />
        </div>
        <div className="partner-logo">
          <Image src="/image5.png" alt="Partner 3" width={120} height={120} />
        </div>
      </div>
    </section>
  );
}

export default Partners;
