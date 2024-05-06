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
  };

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setFile(selectedImage);
  };

  const handleFirmsubmit = async (e) => {
    e.preventDefault();
    try {
      const loginToken = localStorage.getItem("logintoken");
      if (!loginToken) {
        console.error("Please login first");
        return;
      }

      const formData = new FormData();
      formData.append('firmname', firmname);
      formData.append('area', area);
      formData.append('offer', offer);

      category.forEach((category) => {
        formData.append('category[]', category);
      });

      formData.append('image', file);

      const response = await fetch('http://localhost:4000/firm/addfirm', {
        method: 'POST',
        headers: {
          'token': `${loginToken}`
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
      else if(data.message == "Firm already exists"){
        alert("Firm already exists");
      }else{
        alert("Failed to add firm");
      }
      console.log(data.firmid);
      const firmid = data.firmid;
      localStorage.setItem('firmid', firmid);
    } catch (error) {
      console.error(error);
      alert('Failed to add firm');
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
            <input type="checkbox" checked={category.includes('Wholesale')} value="Wholesale" onChange={handleCategoryChange}/><br/>
            <label>retail</label>
            <input type="checkbox" checked={category.includes('Retail')} value="Retail"  onChange={handleCategoryChange}/><br/>
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
