import React from 'react';

export default ({name, year, onDelete, onChangeName}) => (
  <div style={{
    border: '1px solid #ccc',
    marginBottom: '10px',
    display: 'block',
    padding: '10px',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
    borderRadius: '5px'
  }}>
    <h3>Car Name: {name}</h3>
    <p>Year: <strong>{year}</strong></p>
    <input type="text" onChange={onChangeName} value={name}/>
    <button onClick={onDelete}>Delete</button>
  </div>
);