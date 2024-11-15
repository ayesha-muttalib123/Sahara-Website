import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
        import Link from 'next/link';

<ul>
  <li>
    <Link href="/">
      <a>Home</a>
    </Link>
  </li>
  <li>
    <Link href="/about">
      <a>About</a>
    </Link>
  </li>
  <li>
    <Link href="/services">
      <a>Services</a>
    </Link>
  </li>
  <li>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </li>
</ul>

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
        <div><Image src="/pic-1.png" alt="First image" /></div>
        <div><Image src="/pic-2.png" alt="Second image" /></div>
        <div><Image src="/pic-3.png" alt="Third image" /></div>
        <div><Image src="/pic-4.png" alt="Fourth image" /></div>
      </div>

      </div>
    </div>
  );
}
