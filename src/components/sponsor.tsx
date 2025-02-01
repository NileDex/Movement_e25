import React, { useState } from 'react';


const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email) {
      alert(`Thank you for subscribing with email: ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1>Coming Soon</h1>
        <p>We're working hard to launch something amazing. Stay tuned!</p>
       
      </div>
    </div>
  );
};

export default ComingSoon;
