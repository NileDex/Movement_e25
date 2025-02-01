import React from 'react';
import '../styles/HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      {/* Left side - Video */}
      <div className="video-section">
        <div className="video-wrapper">
          {/* Corrected iframe URL */}
          <iframe
            src="https://www.youtube.com/embed/"
            title="Paris Blockchain Week 2025"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="100%"  // Ensure the video is responsive
            height="100%" // Adjust to fit the container
          ></iframe>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="content-section">
        <div className="main-content">
          <p className="description">
          Scope:
To educate and onboard individuals and communities across Southern and Eastern Nigeria, and eventually the entire nation, to the Movement ecosystem by bridging the gap in blockchain literacy and increasing adoption of the Movement Network. By beginning from where has not been reached and yet to be reached. This is a milestone that we want to achieve, and not just a regular Meetup.

          </p>
          
          <p className="description">
          Vision
"Moving Everywhere with Movement" can become a powerful campaign slogan to inspire communities. Your mission to onboard both the young and old while fostering belief in the Movement Network can resonate deeply if tied to clear goals like:
Educating individuals about blockchain basics and the MOVE programming language.
Showcasing the real-world impact of Movement's technology.
Building trust in decentralized systems.

          </p>

          <div className="testimonial">
            <p className="quote">
              "The event maintained high engagement with a series of workshops, live demos, and Q&A sessions. Attendees appreciated the opportunity to ask questions and gain insights directly from the community leaders."
            </p>
            <div className="author">
              <p className="name">Attendee (2024)</p>
              <p className="title">Movement PHC</p>
            </div>
          </div>

      
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
