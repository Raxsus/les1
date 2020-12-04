import React from 'react';

export default ({carName, year}) => (
  <div>
    <h3>Car Name: {carName}</h3>
    <p>Number: <strong>{year}</strong></p>
  </div>
);
