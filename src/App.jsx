import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Founder from './components/Founder';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Articles from './components/Articles';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <Founder />
        <AboutUs />
        <Features />
        <Articles />
        <Enquiry />
      </main>
      <Footer />
    </div>
  );
}
