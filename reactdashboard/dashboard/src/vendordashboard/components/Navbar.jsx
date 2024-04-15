import React from 'react'
import '/src/styles/navbar.css'

const Navbar = ({showLoginHandler, showRegisterHandler}) => {

  return (
    <div className='navsection'>
      <div className='company'>Vendor dashborard
      </div>
      <div className='user auth'>
        <span onClick={showLoginHandler}>login/</span>
        <span onClick={showRegisterHandler}> signup</span>
      
      </div>
      
      
    </div>
  )
}

export default Navbar
