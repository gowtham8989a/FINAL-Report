import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="page-title">About Us</h1>
      <p className="about-us-description">
        Welcome to <strong>DOT-MART</strong> – Where Freshness Meets Convenience!
      </p>

      <div className="our-story">
        <h2>Our Story</h2>
        <p>
          At DOT-MART, we believe in the essence of quality groceries and the importance of a seamless shopping experience.
          Our journey began with a simple idea: to create a platform that brings together a wide range of fresh, high-quality groceries,
          making it easier for customers to shop for their everyday needs. We envisioned a space where convenience and quality are at the forefront,
          offering everything from fresh produce to pantry staples.
        </p>
      </div>

      <div className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide an exceptional grocery shopping experience by delivering freshness, quality, and convenience.
          We are committed to ensuring that every product meets our high standards, and we strive to make shopping as easy and enjoyable as possible.
          We aim to be the go-to destination for all your grocery needs, offering a diverse range of products and top-notch customer service.
        </p>
      </div>

      <div className="what-sets-us-apart">
        <h2>What Sets Us Apart</h2>
        <ul>
          <li>Commitment to Freshness: We prioritize the freshness of our products, ensuring you get the best quality with every purchase.</li>
          <li>Convenience: Our user-friendly platform and efficient delivery services make grocery shopping quick and easy.</li>
          <li>Diverse Selection: We offer a wide variety of groceries, from fresh produce to household essentials, all in one place.</li>
          <li>Customer-Centric Approach: Your satisfaction is our top priority. We are dedicated to providing excellent customer service and support.</li>
        </ul>
      </div>

      <div className="our-community">
        <h2>Our Community</h2>
        <p>
          DOT-MART is more than just a grocery app; it's a community of customers who value quality and convenience. 
          We believe in building strong relationships with our customers and continually improving our services to meet your needs.
          Your feedback and suggestions are always welcome, and we are committed to enhancing your shopping experience.
        </p>
      </div>

      <div className="join-us">
        <h2>Join Us</h2>
        <p>
          Whether you're looking for fresh groceries or want to stay updated on the latest offers, DOT-MART is your destination.
          Join our community and experience the convenience and quality we offer. Download our app and start shopping today!
        </p>
      </div>

      <p className="contact-info">
        If you have any questions or would like to get in touch, please don't hesitate to contact us at <strong>727822tuad016@skct.edu.in</strong>.
      </p>
    </div>
  );
};

export default AboutUs;
