// SpeakersShowcase.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Profile.css';

interface Company {
  name: string;
  logo: string;
}

interface Speaker {
  id: number;
  name: string;
  image: string;
  company?: Company;
}

const SpeakerCard: React.FC<{ speaker: Speaker }> = ({ speaker }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="speaker-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={speaker.image} alt={speaker.name} className="speaker-image" />
      <div className={`speaker-overlay ${isHovered ? 'visible' : ''}`}>
        <h3>{speaker.name}</h3>
        <Link to={`/speakerProfile/${speaker.id}`} className="profile-button">
          View Profile
        </Link>
      </div>
      {speaker.company && (
        <img src={speaker.company.logo} alt={speaker.company.name} className="company-logo" />
      )}
    </div>
  );
};

const SpeakersShowcase: React.FC = () => {
  const speakers: Speaker[] = [
    {
      id: 1,
      name: "NileDex",
      image: "",
      company: {
        name: "MoveDAO",
        logo: "https://cdn.punchng.com/wp-content/uploads/2023/07/24084806/Twitter-new-logo.jpeg"
      }
    },

    // Add more speakers here
  ];

  return (
    <div className="speakers-container">
      <h1 className="titlee">MEET THE VISIONARIES</h1>
      <h2 className="subtitle">SHAPING 2025</h2>
      <div className="speakers-grid">
        {speakers.map(speaker => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
      <div className="action-buttons">
        <button className="be-speaker-btn"><a href='https://forms.gle/1div3f7cv5mtKexe9'>BE A SPEAKER </a></button>
        <button className="see-more-btn">SEE MORE SPEAKERS</button>
      </div>
    </div>
  );
};

export default SpeakersShowcase;
