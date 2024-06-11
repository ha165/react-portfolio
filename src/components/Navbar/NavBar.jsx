import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
const NavBar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Harmony</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <Link spy={true} to='NavBar' smooth={true} activeClass='activeClass'>
              <li>Home</li>
            </Link>
            <Link spy={true} to='Tasks' smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to='Expirience' smooth={true}>
              <lI>Expirience</lI>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true}>
              <lI>Portfolio</lI>
            </Link>
          </ul>
        </div>
        <button className="button n-button">
          Contact
        </button>
      </div>
    </div>
  )
}

export default NavBar
