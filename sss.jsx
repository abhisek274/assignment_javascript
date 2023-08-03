import React from 'react';

const GreetingCard = ({ name, greeting }) => {
  return (
    <div className="greeting-card">
      <h2>{greeting}, {name}!</h2>
    </div>
  );
};

export default GreetingCard;
