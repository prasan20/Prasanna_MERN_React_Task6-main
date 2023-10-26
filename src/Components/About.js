import React from 'react';
import './About.css'; 
import img1 from '../images/pic.jpg';

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
      <h2>About Me</h2>
        <img
          src={img1} 
          alt="Prasanna picture"
          className="about-photo"
        />
        <p>
        I am Prasanna Venkatesh. I'm pursing my undergrad in Computer Science and Engineering with spl in AI and ml at VIT Chennai. I am techie with a lil knowlegde in web3, AI/ML and Web Dev.
      </p>  
      </div>
    </section>
  );
}

export default About;
