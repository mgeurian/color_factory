import React from 'react';
import { Link } from 'react-router-dom';

function ColorList({colors}) {
  return (
    <div>
      {colors.map(c => (
        <div>
          <div 
            className="Box" 
            style={{
              width: `200px`, 
              height: `200px`, 
              backgroundColor: `${c.name}`
            }}>
          </div>
          <Link to={`/colors/${c.name.toLowerCase()}`}>{c.name}</Link>
        </div>
      ))}

    </div>
  )
}

export default ColorList;

