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
      Home
    </Link>
  </li>
  <li>
    <Link href="/about">
      About
    </Link>
  </li>
  <li>
    <Link href="/services">
      Services
    </Link>
  </li>
  <li>
    <Link href="/contact">
      Contact
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
        <div><Image src="/pic-1.png" alt="First image"  width={60} height={60}/></div>
        <div><Image src="/pic-2.png" alt="Second image"  width={60} height={60} /></div>
        <div><Image src="/pic-3.png" alt="Third image"  width={60} height={50} /></div>
        <div><Image src="/pic-4.png" alt="Fourth image"  width={60} height={60} /></div>
      </div>

      </div>
    </div>
  );
}
