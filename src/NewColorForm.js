import React, { useState, Link } from 'react';
import { useHistory } from "react-router-dom";
import './NewColorForm.css';

function NewColorForm({addColor}) {

  const [formData, setFormData] = useState({ name: "", hex: "#ffffff"});
  const history = useHistory();

  function handleChange(e) {
    e.persist();
    const { name, value } = e.target;
    setFormData(f => ({
      ...f,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    addColor({ [formData.name]: formData.hex });
    history.push("/colors");
  }

  const { name, hex } = formData;

  return (
    <div className="NewColorForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color name</label>
          <input
            name="name"
            id="name"
            placeholder="Enter color name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor='hex'>Color Picker</label>
          <input 
            type="color" 
            id="hex"
            name="hex"
            onChange={handleChange} 
            value={hex}
          />        
        </div>
        <input type="Submit" value="Add Color" />
      </form>

      {/* Having the link below causes the entire page to not render. Why? */}
      {/* <Link to={`/`}>Home</Link>       */}
    </div>
  )
}

export default NewColorForm;