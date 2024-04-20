import React, { useState } from 'react';
import '/src/styles/landingpage.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Login from '../components/forms/Login';
import Register from '../components/forms/Register';
import Addfirm from '../components/forms/Addfirm';
import Addproduct from '../components/forms/Addproduct';
import Welcome from '../components/Welcome';

const Landingpage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showFirm, setShowFirm] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const showLoginHandler = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowFirm(false);
    setShowProduct(false);
    setShowWelcome(false);
  };

  const showRegisterHandler = () => {
    setShowRegister(true);
    setShowLogin(false);
    setShowFirm(false);
    setShowProduct(false);
    setShowWelcome(false);
  };

  const showFirmHandler = () => {
    setShowFirm(true);
    setShowRegister(false);
    setShowLogin(false);
    setShowProduct(false);
    setShowWelcome(false);

  };

  const showProductHandler = () => {
    setShowProduct(true);
    setShowFirm(false);
    setShowLogin(false);
    setShowRegister(false);
    setShowWelcome(false);
  }
  const showWelcomeHandler = () => {
    setShowProduct(false);
    setShowFirm(false);
    setShowLogin(false);
    setShowRegister(false);
    setShowWelcome(true);
  }

  return (
    <>
      <section className='landingsection'>
        <Navbar showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler} />
        <div className='collection'>
          <Sidebar showFirmHandler={showFirmHandler} showProductHandler={showProductHandler} />
          {showLogin && <Login showWelcomeHandler = {showWelcomeHandler}/>}
          {showRegister && <Register showLoginHandler = {showLoginHandler}/>}
          {showFirm && <Addfirm />}
          {showProduct && <Addproduct/>}
          {showWelcome && <Welcome/>}
        </div>
      </section>
    </>
  );
};

export default Landingpage;
