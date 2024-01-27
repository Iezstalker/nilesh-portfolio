import React from 'react'
import './footer.css'
import { ImInstagram } from 'react-icons/im'
import { BsLinkedin } from 'react-icons/bs'
import { SiGithub } from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="/" className='footer__logo'>Nilesh</a>
      <ul className='permalinks'>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        {/* <li><a href="#">Experience</a></li> */}
        {/* <li><a href="/">Services</a></li> */}
        {/* <li><a href="/">Portfolio</a></li> */}
        <li><a href="/">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com" target='_blank' rel="noreferrer"><SiGithub /></a>
        <a href="https://instagram.com" target='_blank' rel="noreferrer"><ImInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nilesh | All rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer