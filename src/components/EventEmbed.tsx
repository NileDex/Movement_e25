import React from "react";
import '../styles/Ticket.css'
const Ticket: React.FC = () => {
  return (
    <div className="ticket-container">
      <iframe
        src="https://lu.ma/embed/event/evt-H3OOWpfYBtrCL98/simple"
        width="100%"
        height="600"
        frameBorder="0"
        style={{
          border: "1px solid #bfcbda88",
          borderRadius: "4px",
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Ticket;
