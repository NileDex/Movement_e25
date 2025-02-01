import React, { useState, useRef } from 'react';
import { Camera } from 'lucide-react';
import html2canvas from 'html2canvas';

// Import wallpapers
import wallpaper1 from '../assets/cariyon1.png';
import wallpaper2 from '../assets/cariyon2.png';
import wallpaper3 from '../assets/cariyon3.png';
import wallpaper4 from '../assets/cariyon4.png';

const EventProfileCard = () => {
  const [nickname, setNickname] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [background, setBackground] = useState<string>('');
  const [isWallpaperVisible, setIsWallpaperVisible] = useState(false); // New state to toggle wallpaper selection visibility
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    if (cardRef.current) {
      try {
        // Ensure images are fully loaded before rendering
        const images = cardRef.current.getElementsByTagName('img');
        const imagePromises = Array.from(images).map((img) => {
          if (!img.complete) {
            return new Promise<void>((resolve) => {
              img.onload = () => resolve();
            });
          }
          return Promise.resolve();
        });
        await Promise.all(imagePromises);

        const canvas = await html2canvas(cardRef.current, {
          scale: window.devicePixelRatio, // Improved resolution for high-DPI screens
          useCORS: true, // Ensure proper image handling
          backgroundColor: null,
        });

        const url = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'event-profile.png';
        link.href = url;
        link.click();
      } catch (err) {
        console.error('Error generating image:', err);
      }
    }
  };

  // List of wallpapers
  const wallpapers = [
    wallpaper1,
    wallpaper2,
    wallpaper3,
    wallpaper4,
  ];

  const handleWallpaperChange = (bg: string) => {
    setBackground(`url(${bg})`);
    setIsWallpaperVisible(false); // Hide the wallpaper selection after choosing one
  };

  const toggleWallpaperVisibility = () => {
    setIsWallpaperVisible(!isWallpaperVisible); // Toggle visibility of wallpaper selection list
  };

  return (
    <div className="event-profile-container">
      <div ref={cardRef} className="event-card" style={{ backgroundImage: background }}>
        <div className="event-header">
          <h2 className="event-title">Tech Conference 2025</h2>
          <p className="event-date">March 15-17, Virtual Event</p>
        </div>

        <div className="profile-container">
          <div
            className="profile-pic"
            onClick={() => fileInputRef.current?.click()}
          >
            {imagePreview ? (
              <img src={imagePreview} alt="Profile" crossOrigin="anonymous" />
            ) : (
              <Camera size={40} className="camera-icon" />
            )}
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />

          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Enter your nickname"
            className="nickname-input"
          />

          <div className="attendee-status">
            {nickname ? nickname : 'Your Name'} - Set to attend!
          </div>
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="download-btn"
        disabled={!nickname}
      >
        Download Profile Card
      </button>

      <div className="wallpaper-selection">
        <h3 onClick={toggleWallpaperVisibility} style={{ cursor: 'pointer' }}>
          {isWallpaperVisible ? 'Close Wallpaper Selection' : 'Choose Background'}
        </h3>
        {isWallpaperVisible && (
          <div className="wallpaper-list">
            {wallpapers.map((bg, index) => (
              <div
                key={index}
                className="wallpaper-item"
                onClick={() => handleWallpaperChange(bg)}
                style={{ backgroundImage: `url(${bg})` }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventProfileCard;
