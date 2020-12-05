import React from 'react';

export default ({name, year, onChangeTitle}) => (
  <div>
    <h3>Car Name: {name}</h3>
    <p>Year: <strong>{year}</strong></p>
    <button onClick={onChangeTitle}>Click</button>
  </div>
);