import React from 'react';
import './About.css'; // Linking the CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About SR Interior</h2>
        <p>
          At <strong>SR Interior</strong>, we believe that every space has the potential to inspire. With over a decade of experience in transforming homes and workspaces, we specialize in creating functional, stylish, and personalized interior solutions.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            SR Interior is a team of passionate designers, architects, and craftsmen dedicated to delivering excellence in every project. Whether it's a modular kitchen, elegant false ceiling, modern TV unit, or smart storage solutions — we bring your dream space to life.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Customized designs tailored to your lifestyle</li>
            <li>High-quality materials and precision craftsmanship</li>
            <li>End-to-end project management</li>
            <li>On-time delivery and transparent pricing</li>
          </ul>
        </div>
      </div>

      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To enrich lives by transforming ordinary spaces into extraordinary interiors. We aim to blend beauty with practicality, making every corner of your home or office truly yours.
        </p>
      </div>
    </div>
  );
};

export default About;