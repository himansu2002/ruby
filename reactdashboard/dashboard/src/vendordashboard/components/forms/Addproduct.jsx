import React from 'react'
import '/src/styles/addproduct.css'

const Addproduct = () => {
  return (
    <div>
      <div className='productsection'>
     <form className="tableform">
      <h3>Add product</h3>
        <label>product name</label><br/>
        <input type="text" /><br/>
        <label>price</label><br/>
        <input type="text" /><br/>
        <div className="checkinp">
          <label>category</label><br/>
          <div className="checkbox-container"><br/>
            <label>tinture</label>
          <input type="checkbox" value="tinture" /><br/>
          <label>biochemic</label>
          <input type="checkbox" value ="biochemic" /><br/>
          </div>
        </div>
        <label>description</label><br/>
        <input type="text" /><br/>
        <label>product image</label><br/>
        <input type="file" />
      <div className="btnsubmit">
        <button>submit</button>
      </div>
     </form>
    </div>
    </div>
  )
}

export default Addproduct
