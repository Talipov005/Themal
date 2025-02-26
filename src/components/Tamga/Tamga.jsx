import React from 'react';
import { tamga } from '../../data/flag';
import { Link } from 'react-router-dom';
import './Tamga.css'

function Tamga() {
  return (
    <div className='tamgalaar'>
      {tamga.map((item) => (
        <Link to={`/bukva/${item.title}`} key={item.id}>
          <h2>{item.title}</h2>
        </Link>
      ))}
    </div>
  );
}

export default Tamga;
