import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
// import {RiServiceLine} from 'react-iconss/ri'
import {SiGooglemessages} from 'react-icons/si'
import {useState} from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><ImHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BiBook/></a>
      {/* <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}><RiServiceLine/></a> */}
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><SiGooglemessages/></a>
    </nav>

  )
}

export default Nav