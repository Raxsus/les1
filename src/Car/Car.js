import React from 'react';

import './Car.css';


export default ({name, year, onDelete, onChangeName}) => {
  const inputClasses = ['input'];

  if (name) {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }

  if (name.length > 4) {
    inputClasses.push('bold')
  }

  return (
    <div className="Car">
      <h3>Car Name: {name}</h3>
      <p>Year: <strong>{year}</strong></p>
      <input
        type="text"
        onChange={onChangeName}
        value={name}
        className={inputClasses.join(' ')}
      />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}