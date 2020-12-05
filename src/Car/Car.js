import React from 'react';

import './Car.css';


export default ({name, year, onDelete, onChangeName}) => (
  <div className="Car">
    <h3>Car Name: {name}</h3>
    <p>Year: <strong>{year}</strong></p>
    <input type="text" onChange={onChangeName} value={name}/>
    <button onClick={onDelete}>Delete</button>
  </div>
);