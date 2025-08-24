import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaGithubAlt, FaGoogle, FaLinkedin } from 'react-icons/fa'; // ✅ Correct source
import './Footer.css';

function Footer() {
  return (
    <div id="main">
      <ol>
        <li><Link to="#">about us</Link></li>
        <li><Link to="#">contact us</Link></li>
        <li><Link to="#">privacy policy</Link></li>
      </ol>
      <h2>©SR INTERIORS</h2>

      <div id="icons">
        <FaInstagram id="instagram" size="2em" color="#ffffff" />
        <FaGithubAlt id="git" size="2em" color="#ffffff" />
        <FaGoogle id="google" size="2em" color="#ffffff" />
        <FaLinkedin id="linkedin" size="2em" color="#ffffff" />
      </div>
    </div>
  );
}

export default Footer;