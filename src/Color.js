import React from 'react'

function Color() {
  console.log("redpage");
  return (
    <div 
      className="Color" 
      style={{
        backgroundColor: "red"
      }}>
    </div>
    // <button className="RemoveBox" onClick={remove}>X</button>
  )
}

export default Color
