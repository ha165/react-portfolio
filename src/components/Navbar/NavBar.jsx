import React from 'react'
import './Navbar.css'
const NavBar = () => {
  return (
    <div className="n-wrapper"> 
      <div className="n-left">
        <div className="n-name">Harmony</div>
        <span>Toggle</span>
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
            Contact Us
        </button>
      </div>
    </div>
  )
}

export default NavBar
