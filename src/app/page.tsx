export default function Home() {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="centre-section">
      <div className="hero">
        <h1>Welcome to My Sahara</h1>
        <p>Discover amazing solutions for your digital needs with cutting-edge technology.</p>
        <a href="/services" className="cta-button">Get Started</a>
      </div>

    
      <div className="pictures">
        <div><img src="/pic-1.png" alt="First image" /></div>
        <div><img src="/pic-2.png" alt="Second image" /></div>
        <div><img src="/pic-3.png" alt="Third image" /></div>
        <div><img src="/pic-4.png" alt="Fourth image" /></div>
      </div>

      </div>
    </div>
  );
}
