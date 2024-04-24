import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          {/* <img src={logo} /> */}
          <h1>CodewithGrowth</h1>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#cwg__header">Home</a></p>
          <p><a href="#wgpt3">What is CWG?</a></p>
          <p><a href="#possibility">Join Us</a></p>
          <p><a href="#features">Notes</a></p>
          <p><a href="gpt3__blog">Read Blogs</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#cwg__header">Home</a></p>
            <p><a href="cc">What is CWG?</a></p>
            <p><a href="https://chat.whatsapp.com/I0kY3JjgYNNHydoruRejEc">Join Us</a></p>
            <p><a href="#features">Notes</a></p>
            <p><a href="#blog">Read Blogs</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;