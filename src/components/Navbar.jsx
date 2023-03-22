import React from 'react';
import Logo from "../assets/logo.svg";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='LogoDiv'>
      <img src={Logo} alt="logo" className="logo" />
      <h1 className="logoText">moozika</h1>
      </div>
      <form className='navForm'>
        <input placeholder="search our music database"/>
      </form>
    </div>
  )
}

export default Navbar;
