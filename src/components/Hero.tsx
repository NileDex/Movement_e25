// Hero.tsx
import React, { useState } from "react";
import "../styles/Hero.css";
import { FaCalendarAlt, FaGoogle, FaMicrosoft, FaRegCalendar, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import CountdownTimer from "./Countdown";

const Hero: React.FC = () => {
  const [showCalendarOptions, setShowCalendarOptions] = useState(false);

  const eventDetails = {
    title: "Movement Blockchain Summit",
    description: "Join us at the 1st edition Movement Blockchain Event, 10 May 2025.",
    location: "Rivers State, Nigeria, House of Dayspring",
    startDate: "2025-05-10T10:00:00",
    endDate: "2025-05-10T17:00:00",
  };

  const createGoogleCalendarLink = () => {
    const { title, description, location, startDate, endDate } = eventDetails;
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&dates=${startDate.replace(/[-:]/g, "")}/${endDate.replace(/[-:]/g, "")}`;
  };

  const createOutlookCalendarLink = () => {
    const { title, description, location, startDate, endDate } = eventDetails;
    return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&startdt=${startDate}&enddt=${endDate}`;
  };

  const createICalendarLink = () => {
    const { title, description, location, startDate, endDate } = eventDetails;
    return `data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ASUMMARY:${encodeURIComponent(title)}%0ADESC:${encodeURIComponent(description)}%0ALOCATION:${encodeURIComponent(location)}%0ADTSTART:${startDate.replace(/[-:]/g, "")}%0ADTEND:${endDate.replace(/[-:]/g, "")}%0AEND:VEVENT%0AEND:VCALENDAR`;
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h5>1ST EDITION</h5>
        <br />
        <h1>
         Movement <br /> BLOCKCHAIN SUMMIT
        </h1>
        <h2>8-10 May 2025</h2>
        
        <div className="navbar-buttons">
          <a href="/EventEmbed" className="ticket-buttonn">Ticket</a>
          <a href="/sponsor" className="sponsor-buttonn">Sponsor</a>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="social-media-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
      </div>

      <div className="hero-subcontent">
        <div className="calendar-btn-wrapper">
          <button
            className="calendar-btn"
            onClick={() => setShowCalendarOptions(!showCalendarOptions)}
          >
            <FaCalendarAlt /> Add to Calendar
          </button>
          {showCalendarOptions && (
            <div className="calendar-options">
              <a
                href={createGoogleCalendarLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="calendar-option"
              >
                <FaGoogle /> Google Calendar
              </a>
              <a
                href={createOutlookCalendarLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="calendar-option"
              >
                <FaMicrosoft /> Outlook Calendar
              </a>
              <a
                href={createICalendarLink()}
                download="event.ics"
                className="calendar-option"
              >
                <FaRegCalendar /> iCalendar
              </a>
            </div>
          )}
        </div>

        {/* Countdown component */}
        <CountdownTimer targetDate="2025-02-01T00:00:00" />

      </div>
    </section>
  );
};

export default Hero;
