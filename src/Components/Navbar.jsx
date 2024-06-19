// Navbar.js
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css';
import { BsBrightnessHigh, BsBrightnessHighFill } from "react-icons/bs";
import { ThemeContext } from './Context/ThemeContext';

function Navbar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="logo"><h1>Logo.</h1></div>
      <div className="menu">
        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
        <NavLink to='/aboutus' activeClassName='active'>About Us</NavLink>
        <NavLink to='/contactus' activeClassName='active'>Contact Us</NavLink>
      </div>
      <div className="toggle" onClick={toggleTheme}>
        <div className="toggleicon">
          {isDarkMode ? <BsBrightnessHigh /> : <BsBrightnessHighFill />}
        </div>
        <p>Get in Touch</p>
      </div>
    </div>
  );
}

export default Navbar;
