// import Image from 'next/image';
// import Link from 'next/link';
// export default function Home() {
//   return (
//     <div className="container">
//       {/* Navigation Bar */}
//       <nav className="navbar">
//         <ul>





      

// <ul>
//   <li>
//     <Link href="/">
//       Home
//     </Link>
//   </li>
//   <li>
//     <Link href="/about">
//       About
//     </Link>
//   </li>
//   <li>
//     <Link href="/services">
//       Services
//     </Link>
//   </li>
//   <li>
//     <Link href="/contact">
//       Contact
//     </Link>
//   </li>
// </ul>

//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <div className="centre-section">
//       <div className="hero" >
//         <h1>Welcome to My Sahara</h1>
//         <p>Discover amazing solutions for your digital needs with cutting-edge technology.</p>
//         <a href="/services" className="cta-button">Get Started</a>
//       </div>

    
//       <div className="pictures">
//         <div><Image src="/pic-1.png" alt="First image"  width={50} height={50}/></div>
//         <div><Image src="/pic-2.png" alt="Second image"  width={50} height={50} /></div>
//         <div><Image src="/pic-3.png" alt="Third image"  width={50} height={50} /></div>
//         <div><Image src="/pic-4.png" alt="Fourth image"  width={50} height={50} /></div>
//       </div>

//       </div>
//     </div>
//   );
// }
// "use client"; // Marks the file as a Client Component
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="hero">
//         <h1>Welcome to Our Website</h1>
//         <button>Learn More</button>
//       </section>

//       {/* Partner Logos Section */}
//       <section className="partners">
//         <h2>Our Partners</h2>
//         <div className="partner-logos">
//           <Image src="/Rectangle 690.png" alt="Partner 1" width={100} height={100} />
//           {/* <Image src="/logo2.png" alt="Partner 2" width={100} height={100} />
//           <Image src="/logo3.png" alt="Partner 3" width={100} height={100} /> */}
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="services">
//         <h2>Our Services</h2>
//         <div className="service-cards">
//           <div className="card">
//             <Image src="/service1.png" alt="Service 1" width={300} height={200} />
//             <h3>Service 1</h3>
//             <p>Description of Service 1.</p>
//           </div>
//           <div className="card">
//             <Image src="/service2.png" alt="Service 2" width={300} height={200} />
//             <h3>Service 2</h3>
//             <p>Description of Service 2.</p>
//           </div>
//           <div className="card">
//             <Image src="/service3.png" alt="Service 3" width={300} height={200} />
//             <h3>Service 3</h3>
//             <p>Description of Service 3.</p>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="features">
//         <h2>Our Features</h2>
//         <div className="feature-cards">
//           <div className="card">
//             <h3>Feature 1</h3>
//             <p>Highlight of Feature 1.</p>
//             <Image src="/feature1.png" alt="Service 3" width={300} height={200} />

//           </div>
//           <div className="card">
//             <h3>Feature 2</h3>
//             <Image src="/feature1.png" alt="Service 3" width={300} height={200} />

//             <p>Highlight of Feature 2.</p>
//           </div>
//           <div className="card">
//             <h3>Feature 3</h3>
//             <Image src="/feature1.png" alt="Service 3" width={300} height={200} />

//             <p>Highlight of Feature 3.</p>
//           </div>
//         </div>
//       </section>

//       {/* Events Section */}
//       <section className="events">
//         <h2>Upcoming Events</h2>
//       </section>

//       {/* Contact Section */}
//       <section className="contact">
//         <div className="contact-section">
//           <div className="contact-header">
//             <h2>Contact Us</h2>
//             <h3>We'd love to hear from you!</h3>
//           </div>
//           <div className="contact-options">
//             <div className="option active">Email</div>
//             <div className="option">Phone</div>
//             <div className="option">Address</div>
//           </div>
//           <div className="map-section">
//             <p>Find us at our main office.</p>
//             <button className="call-us-button">Call Us</button>
//             <Image src="/map.jpg" alt="Map" width={800} height={400} />
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer>
//         <div className="footer">
//           <div className="footer-content">
//             <div className="footer-logo">
//               <Image src="/footer-logo.png" alt="Logo" width={100} height={100} />
//             </div>
//             <div className="footer-links">
//               <div>
//                 <h4>Quick Links</h4>
//                 <ul>
//                   <li><a href="#">Home</a></li>
//                   <li><a href="#">About</a></li>
//                   <li><a href="#">Services</a></li>
//                   <li><a href="#">Contact</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h4>Contact</h4>
//                 <ul>
//                   <li>Email: info@example.com</li>
//                   <li>Phone: +123 456 7890</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="footer-social">
//               <h4>Follow Us</h4>
//               <p>Social Media Links Here</p>
//             </div>
//             <div className="footer-apps">
//               <h4>Download Our App</h4>
//               <div className="app-icons">
//                 <Image src="/appstore.png" alt="App Store" width={100} height={40} />
//                 <Image src="/playstore.png" alt="Play Store" width={100} height={40} />
//               </div>
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <p>&copy; 2024 Your Company. All rights reserved.</p>
//             <p>Privacy Policy | Terms of Service</p>
//           </div>
//         </div>
//       </footer>

//       {/* Inline Styles */}
//       <style jsx>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           font-family: Arial, sans-serif;
//           color: #4F5155;
//         }

//         .hero {
//           background-image: url('/Desktop.png');
//           height: 100vh;
//           width:1000px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           color: white;
//           text-align: center;
//         }

//         .hero h1 {
//           font-size: 3em;
//           margin-bottom: 20px;
//         }

//         .hero button {
//           padding: 10px 20px;
//           font-size: 1em;
//           background-color: #E13300;
//           color: white;
//           border: none;
//           cursor: pointer;
//         }

//         .partners {
//           padding: 50px;
//           text-align: center;
//           background-color: #FAF3DD80;
//         }

//         .partner-logos img {
//           margin: 0 30px;
//         }

//         .services {
//           padding: 50px;
//         }

//         .service-cards {
//           display: flex;
//           justify-content: space-around;
//         }

//         .card {
//           padding: 20px;
//           text-align: center;
//         }

//         .features {
//           padding: 50px;
//           background-color: #FAF3DD80;
//         }

//         .feature-cards {
//           display: flex;
//           justify-content: space-around;
//         }

//         .events {
//           padding: 50px;
//           background-image: url('/event-background.jpg');
//           background-size: cover;
//           height: 300px;
//           color: white;
//           text-align: center;
//         }

//         .contact {
//           padding: 50px;
//           text-align: center;
//         }

//         .footer {
//           padding: 20px;
//           background-color: #333;
//           color: white;
//         }

//         .footer-content {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }
//       `}</style>
//     </>
//   );
// }

















// pages/index.js
import Aqua from "./components/Aqua";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Services from "./components/Services";



export default function Home() {
  return (
    <main className='main-class'>
      
      <HeroSection />
      <Partners />
    <Services/>
    {/* <Aqua/> */}
      <Features />

      <Footer />
    </main>
  );
}
