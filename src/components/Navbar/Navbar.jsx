import React from 'react'
import './Navbar.css'
import { NavLink,Link } from 'react-router-dom'
import {useEffect, useState,useRef } from 'react';
import * as FaIcons from 'react-icons/fa';

const Navbar = () => {
 
  const [sidebar,setSidebar] = useState(false);

  const showSidebar =() => setSidebar(!sidebar);

// click outside to close menubar on mobile 

let menuRef = useRef();
useEffect(()=>{
  let handler =(e)=>{
   if(!menuRef.current.contains(e.target)){
    setSidebar(false);
   }
  }
  document.addEventListener('mousedown',handler);

  return ()=>{
    document.removeEventListener("mousedown",handler);
  }
})

// sticky Navigation bar
  const [fix,setfix] = useState(false);

  function stickynav(){
    if(window.scrollY >=10){
      setfix(true);
    }
    else{
      setfix(false);
    }
  }
  window.addEventListener("scroll",stickynav);

  // logo
  let img_logo = require('../../Assets/logo.png');
  
// home page.

  return (
    <>
      <header className={fix? "header fixed":"header"}>
      <div className="logo">
             
             <Link to='/'> <img className="logo_img" src={img_logo} alt=""/></Link>
          </div>
        <nav className='NavBar' > 
          <ul className={showSidebar?`menu-list ${sidebar && "mobile-NavBar"}`:"menu-list"} ref = {menuRef}>
            <li>
              <NavLink to="/" className="list" id="home" >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className="list" id="about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/services' className="list" id="services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' className="list" id="contact">
                ContactUs
              </NavLink>
            </li>
            <li>
              <NavLink to='/login'  id="login" className="list">
                  <button>SignUp</button>
              </NavLink>
            </li>
            <div className="mobile-nav">
            </div>
          </ul>
        </nav>
        <div className="mobile-bar">
            <FaIcons.FaBars className={`menu-icon ${sidebar}`} onClick={showSidebar} />
        </div>
      </header>
    </>
  )
}
export default Navbar;
