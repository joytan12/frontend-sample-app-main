// src/components/TherapyCard.jsx
import React from 'react';

const TherapyCard = ({ icon, title, description }) => (
  <div className="therapy-card">
    <div className="therapy-card__icon">
      <img src={icon} alt={`${title} icon`} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default TherapyCard;
