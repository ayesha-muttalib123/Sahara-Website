// components/Footer.js

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="Footer">
      <p>© 2024 Sahara Group. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div className="social-icons">
      <Image
        src="/appgalery.jpeg"
        alt="App Gallery"
        width={70}
        height={70}
        className="social-icon"
      />
      <Image
        src="/appstore.png"
        alt="App Store"
        width={50}
        height={50}
        className="social-icon"
      />
      <Image
        src="/yt.png"
        alt="YouTube"
        width={50}
        height={50}
        className="social-icon"
      />
    </div>
      <div className="footer-bottom">
        <p>Call Us: +1 786 9790 877</p>
        <p>Get in touch with us</p>
      </div>
    </footer>
  );
};

export default Footer;
