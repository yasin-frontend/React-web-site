import React, { useState } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { PiBarnFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import "./styles/App.scss";
import logo from "./images/Shape.png"

const App = () => {
  const [son, setSon] = useState(false);

  return (
    <div className='App'>
      <div className={`${son ? 'menubar-act' : 'menubar-small'} menubar`}>
        <div className="logo">
        <img src={logo} alt="logo" />
        <h1>TailAdmin</h1>
        </div>
        <div className="links">
          <NavLink to="/table" className={({ isActive }) => isActive ? "active" : ""}><AiFillHome /> {son && 'Menu'}</NavLink>
          <NavLink to="/sales" className={({ isActive }) => isActive ? "active" : ""}><FaShoppingCart /> {son && "Sotuv bo'lim"}</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? "active" : ""}><FaShop /> {son && 'Magazine'}</NavLink>
          <NavLink to="/warehouse" className={({ isActive }) => isActive ? "active" : ""}><PiBarnFill /> {son && 'Omborxona'}</NavLink>
          <NavLink to="/settings" className={({ isActive }) => isActive ? "active" : ""}><IoMdSettings /> {son && 'Sozlamalar'}</NavLink>
        </div>
      </div>
      <div className={`main-page ${son ? 'shifted' : ''}`}>
        <Nav son={son} setSon={setSon} />
        <Main son={son} />
      </div>
    </div>
  );
};


export default App;
