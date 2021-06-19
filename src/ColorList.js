import React from 'react';
import { Link } from 'react-router-dom';
import './ColorList.css';

function ColorList({colors}) {
  const links = Object.keys(colors).map(colorName => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));

  return (
    <div className="ColorList">
      <div className="ColorNav">
        <h1>Welcome to the Color Factory</h1>
        <h3>
          <Link to="/colors/new">Add a color</Link>
        </h3>
      </div>
      <div className="ColorIndex">
        <div>Please select a color</div>
        <ul>{links}</ul>
      </div>      
    </div>
  )
}

export default ColorList;