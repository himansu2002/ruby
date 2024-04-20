import React, { useState } from 'react';
import '/src/styles/addfirm.css';

const Addfirm = () => {
  const [firmname, setFirmname] = useState('');
  const [area, setArea] = useState('');
  const [category, setCategory] = useState([]);
  const [offer, setOffer] = useState('');
  const [file, setFile] = useState(null);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory(category.filter((item) => item !== value));
    } else {
      setCategory([...category, value]);
    }
  }

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setFile(selectedImage);
  }


  const handleFirmsubmit = async (e) => {
    e.preventDefault();
    try {
      const loginToken = localStorage.getItem("logintoken");
      if (!loginToken) {
        console.error("Please login first");
      }

      const formData = new FormData();
      formData.append('firmname', firmname);
      formData.append('area', area);
      formData.append('offer', offer);

      category.forEach((category) => {
        formData.append('category', category);
      });
      const response = await fetch('http://localhost:4000/firm/addfirm', {
        method: 'POST',
        headers: {
          'tokien': `${loginToken}`
        },
        body: formData
      });
      const data = await response.json();
      if (response.ok) {
        alert("Firm added successfully");
        setFirmname('');
        setArea('');
        setCategory([]);
        setOffer('');
        setFile(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='firmsection'>
      <form className="tableform" onSubmit={handleFirmsubmit}>
        <h3>Add firm</h3>
        <label>firm name</label><br/>
        <input type="text" name='firmname' value={firmname} onChange={(e) => setFirmname(e.target.value)}/><br/>
        <label>area</label><br/>
        <input type="text"  name='area' value={area} onChange={(e) => setArea(e.target.value)}/><br/>
        <div className="checkinp">
          <label>category</label><br/>
          <div className="checkbox-container" ><br/>
            <label>wholesale</label>
            <input type="checkbox" checked={category.includes('wholesale')} value="wholesale" onChange={handleCategoryChange}/><br/>
            <label>retail</label>
            <input type="checkbox" checked={category.includes('retail')} value="retail"  onChange={handleCategoryChange}/><br/>
          </div>
        </div>
        <label>offer</label><br/>
        <input type="text"  name='offer' value={offer} onChange={(e) => setOffer(e.target.value)}/><br/>
        <label>firm image</label><br/>
        <input type="file" onChange={handleImageUpload}/>
        <div className="btnsubmit">
          <button type='submit'>submit</button>
        </div>
      </form>
    </div>
  );
};

export default Addfirm;
