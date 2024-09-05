import React from 'react';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BiX } from "react-icons/bi";

const Nav = ({ son, setSon }) => {
  return (
    <nav className={`${son ? "nav" : ""}`}>
      {
        son ? 
          <BiX onClick={() => setSon(!son)} className="menu-toggle-icon" /> 
        : 
          <HiOutlineMenuAlt2 onClick={() => setSon(!son)} className="menu-toggle-icon" />
      }
    </nav>
  );
}

export default Nav;
