import React from 'react'
import { Link, Redirect } from 'react-router-dom';

function Color({color}) {

  if (!color) return <Redirect to="/colors" />
  return (
    <div>

      <div 
        className="Color" 
        style={{
          backgroundColor: "red"
        }}>
      </div>
      <Link to={`/colors`}>Home</Link>      
    </div>


  )
}

export default Color
