import React from 'react';
import {NavLink} from "react-router-dom";
// import "./ColorBar.css";

function ColorNav({colors}) {
  const links = colors.map(c => (
    <NavLink key={c.name} to={`/colors${c.name}`}>
      {c.name}
    </NavLink>
  ));

  return (
    <nav>
      <NavLink exact to="/colors">Home</NavLink>
      {links}
    </nav>
  );
}

export default ColorNav;
