import React from 'react';

export default ({name, year, onDelete, onChangeName}) => (
  <div style={{border: '1px solid #ccc', marginBottom: '10px'}}>
    <h3>Car Name: {name}</h3>
    <p>Year: <strong>{year}</strong></p>
    <input type="text" onChange={onChangeName} value={name}/>
    <button onClick={onDelete}>Delete</button>
  </div>
);