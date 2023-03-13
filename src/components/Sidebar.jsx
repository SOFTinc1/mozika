import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import { logo } from "../assets";
import { links } from "../assets/constants";


const Sidebar = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="main">
        {links.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className="icons"
          >
          <item.icon className="w-7 h-10 icon" />
          </NavLink>
        ))}
      </div>

      {/* <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div> */}
    </>
  );
};

export default Sidebar;
