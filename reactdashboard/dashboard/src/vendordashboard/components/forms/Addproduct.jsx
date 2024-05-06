import React, { useState } from 'react';
import '/src/styles/addproduct.css';


const Addproduct = () => {
  const [productname, setProductname] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState([]);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

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
    setImage(selectedImage);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const logintoken = localStorage.getItem("logintoken");
      const firmid = localStorage.getItem("firmid");

      if (!logintoken || !firmid) {
        console.error("user not authenticated");
      }
      const formData = new FormData();
      formData.append('productname', productname);
      formData.append('price', price);
      formData.append('description', description);

      category.forEach((category) => {
        formData.append('category[]', category);
      });

      formData.append('image', image);

      const response = await fetch(`http://localhost:4000/product/addproduct/${firmid}`, {
        method: 'POST',
        body: formData
      });
      const data = await response.json();

      if (response.ok) {
        alert("Product added successfully");
      }

    } catch (error) {
      console.error(error);
      alert("Product not added");

    }
  };

  return (
    <div>
      <div className='productsection'>
        <form className="tableform" onSubmit={handleAddProduct}>
          <h3>Add product</h3>
          <label>product name</label><br/>
          <input type="text" value={productname} onChange={(e) => setProductname(e.target.value)}/><br/>
          <label>price</label><br/>
          <input type="text"  value={price} onChange={(e) => setPrice(e.target.value)}/><br/>
          <div className="checkinp">
            <label>category</label><br/>
            <div className="checkbox-container"><br/>
              <label>tinture</label>
              <input type="checkbox" checked={category.includes('Tinture')} value="Tinture" onChange={handleCategoryChange} /><br/>
              <label>biochemic</label>
              <input type="checkbox" checked={category.includes('Biochemic')} value="Biochemic" onChange={handleCategoryChange} /><br/>
            </div>
          </div>
          <label>description</label><br/>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /><br/>
          <label>product image</label><br/>
          <input type="file" onChange={handleImageUpload}  />
          <div className="btnsubmit">
            <button type='submit'>submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
