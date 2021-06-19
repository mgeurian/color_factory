import React from 'react';
import { Link } from "react-router-dom";
import "./ColorNav.css";

function ColorNav() {

  return (
    <div className="ColorNav">
      <div>Welcome to the Color Factory</div>
      <Link exact to="/colors/new">Add a color</Link>
    </div>
  );
}

export default ColorNav;
