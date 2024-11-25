import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="Aboutus">
      <div className="Aboutus-content">
        <h2>ABOUT US</h2>
        <h3>Award winning real estate<br /> company in India</h3>
        <p>Whether you're a first-time homebuyer, a seasoned investor, or simply<br /> looking for a change, we're here to guide you every step of the way. Our<br /> mission is to make your real estate journey smooth and successful.</p>
        
        <div className="MoreInfo">
          <h4>Previous Projects</h4>
          <h4>Year Experience</h4>
          <h4>Ongoing Projects</h4>
        </div>
        
        <div className="MoreInfoo">
          <p>34+</p>
          <p>20+</p>
          <p>12</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
