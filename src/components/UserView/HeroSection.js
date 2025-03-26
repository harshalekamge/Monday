import React from "react";
import "./HeroSection.css"; // Import the CSS file

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">Explore Our Cards</h1>
      <p className="hero-subtitle">Discover unique cards curated for you.</p>
      <img
        src="/images/Screenshot (104).png"
        alt="Nature-inspired hero image"
        className="hero-image"
      />
    </section>
  );
};

export default HeroSection;