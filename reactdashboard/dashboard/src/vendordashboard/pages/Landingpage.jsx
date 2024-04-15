import React, { useState } from 'react';
import '/src/styles/landingpage.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Login from '../components/forms/Login';
import Register from '../components/forms/Register';
import Addfirm from '../components/forms/Addfirm';
import Addproduct from '../components/forms/Addproduct';

const Landingpage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showFirm, setShowFirm] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  const showLoginHandler = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowFirm(false);
    setShowProduct(false);
  };

  const showRegisterHandler = () => {
    setShowRegister(true);
    setShowLogin(false);
    setShowFirm(false);
    setShowProduct(false);
  };

  const showFirmHandler = () => {
    setShowFirm(true);
    setShowRegister(false);
    setShowLogin(false);
    setShowProduct(false);
  };

  const showProductHandler = () => {
    setShowProduct(true);
    setShowFirm(false);
    setShowLogin(false);
    setShowRegister(false);
  }

  return (
    <>
      <section className='landingsection'>
        <Navbar showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler} />
        <div className='collection'>
          <Sidebar showFirmHandler={showFirmHandler} showProductHandler={showProductHandler} />
          {showLogin && <Login />}
          {showRegister && <Register />}
          {showFirm && <Addfirm />}
          {showProduct && <Addproduct/>}
        </div>
      </section>
    </>
  );
};

export default Landingpage;
