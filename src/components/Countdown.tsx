// import React, { useState, useEffect } from 'react';
// import "../styles/Countdown.css";

// const CountdownTimer = ({ targetDate }) => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   useEffect(() => {
//     const calculateTimeLeft = () => {
//       const now = new Date().getTime();
//       const target = new Date(targetDate).getTime();
//       const difference = target - now;

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((difference % (1000 * 60)) / 1000),
//         });
//       }
//     };

//     const timer = setInterval(calculateTimeLeft, 1000);
//     calculateTimeLeft(); // Initial calculation

//     return () => clearInterval(timer);
//   }, [targetDate]);

//   const padNumber = (num) => String(num).padStart(2, '0');

//   return (
//     <div className="countdown-container">
//       {Object.entries(timeLeft).map(([label, value]) => (
//         <div key={label} className="countdown-item">
//           <div className="countdown-box">
//             <span className="countdown-value">{padNumber(value)}</span>
//           </div>
//           <span className="countdown-label">
//             {label.charAt(0).toUpperCase() + label.slice(1)}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CountdownTimer;
import React, { useState, useEffect } from 'react';
import "../styles/Countdown.css";

interface CountdownTimerProps {
  targetDate: string; // Ensure the prop is passed as a string
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    if (Object.values(timeLeft).every((value) => value === 0)) {
      return; // Stop setting state if the countdown has ended
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const padNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="countdown-container">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="countdown-item">
          <div className="countdown-box">
            <span className="countdown-value">{padNumber(value)}</span>
          </div>
          <span className="countdown-label">
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
