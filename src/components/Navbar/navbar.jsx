import React, { useRef, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import menu1 from '../../assets/menu1.png'
import close from '../../assets/close.jpg'
const navbar = () => {

  const [menu,setMenu]= useState("home");
  const menuRef = useRef();

  const openMenu =()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <img className='ib-img' src={logo} alt=""/>
      <img src={menu1} alt="" onClick={openMenu} className='nav-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={close} onClick={closeMenu} className='nav-close' alt="" />
        <a href="#home"><li>Home</li></a>
        <a href="#about"><li>About Me</li></a>
        <a href="#service"><li>Services</li></a>
        <a href="#work"><li>Portfolio</li></a>
        <a href="#contact"><li>Contact</li></a>
      </ul>
      <div className="nav-connect">
        <a href="#contact">Connect With Me</a>
      </div>
    </div>
  )
}

export default navbar
