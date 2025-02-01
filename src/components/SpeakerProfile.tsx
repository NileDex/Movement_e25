import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import "../styles/SpeakerProfile.css";

interface Speaker {
  name: string;
  company: string;
  image: string;
  linkedin: string;
  bio: string[];
}

const SpeakerProfile: React.FC = () => {
  const speakerData: Speaker = {
    name: "NileDex",
    company: "nil",
    image: "/default-profile.png", // Add a placeholder image
    linkedin: "https://linkedin.com/in/anthony-scaramucci",
    bio: [
      "Anthony Scaramucci is the founder and managing partner of SkyBridge...",
      "Prior to founding SkyBridge in 2005, Scaramucci co-founded Oscar Capital...",
      "In 2022, Scaramucci was ranked #47 in Cointelegraph's Top 100 Influencers...",
      "He is the author of five books.",
      "Scaramucci served on President Donald J. Trump's 16-person Presidential...",
      "Scaramucci, a native of Long Island, New York, holds a BA from Tufts..."
    ],
  };

  return (
    <div className="speaker-profile">
      <div className="profile-header">
        <div className="profile-image-container">
          <img
            src={speakerData.image}
            alt={speakerData.name}
            className="profile-image"
          />
        </div>
        <div className="profile-title">
          <h1>{speakerData.name}</h1>
          <h2>{speakerData.company}</h2>
          <a
            href={speakerData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="profile-content">
        {speakerData.bio.map((paragraph, index) => (
          <p key={index} className="bio-paragraph">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SpeakerProfile;
