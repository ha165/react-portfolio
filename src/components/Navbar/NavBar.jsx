import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link; } from 'react-scroll'
const NavBar = () => {
  return (
    <div className="n-wrapper"> 
      <div className="n-left">
        <div className="n-name">Harmony</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType:'none'}}> 
                <li>Home</li>
                <li>Services</li>
                <lI>Expirience</lI>
                <li>Testimonials</li>
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
