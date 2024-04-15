import React from 'react'
import '/src/styles/sidebar.css'

const Sidebar = ({showFirmHandler, showProductHandler}) => {
  return (
    <div className='sidebarsection'>
      <ul>
        <li>user details</li>
        <li onClick={showFirmHandler}>Add firm</li>
        <li onClick={showProductHandler}>Add product</li>
        <li>All products</li>
      </ul>
    </div>
  )
}

export default Sidebar
