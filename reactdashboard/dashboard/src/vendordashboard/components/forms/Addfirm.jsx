import React from 'react'
import '/src/styles/addfirm.css'

const Addfirm = () => {
  return (
    <div className='firmsection'>
     <form className="tableform">
      <h3>Add firm</h3>
        <label>firm name</label><br/>
        <input type="text" /><br/>
        <label>area</label><br/>
        <input type="text" /><br/>
        <div className="checkinp">
          <label>category</label><br/>
          <div className="checkbox-container"><br/>
            <label>wholesale</label>
          <input type="checkbox" value="wholesale" /><br/>
          <label>retail</label>
          <input type="checkbox" value="retail" /><br/>
          </div>
        </div>
        <label>offer</label><br/>
        <input type="text" /><br/>
        <label>firm image</label><br/>
        <input type="file" />
      <div className="btnsubmit">
        <button>submit</button>
      </div>
     </form>
    </div>
  )
}

export default Addfirm
