import React from 'react';
import '../styles/EventCard.css'
const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
      
    </div>
  );
};

export default EventCard;