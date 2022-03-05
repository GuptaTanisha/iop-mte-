import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About</a></p>
          <p><a href="#possibility">Contact Us</a></p>
          <p><a href="#features">Get Started</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p><a href="https://limitless-sea-21645.herokuapp.com/users/login">Sign in</a></p>
        <p><a href="https://limitless-sea-21645.herokuapp.com/users/register">Sign up</a></p>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">About</a></p>
            <p><a href="#possibility">Contact Us</a></p>
            <p><a href="#features">Get Started</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p><button onClick={handleClick} type="button">Register</button></p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
