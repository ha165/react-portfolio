import React from 'react'

const NavBar = () => {
  return (
    <div className="n-wrapper"> 
      <div className="n-lef">
        <div className="n-name">Harmony</div>
        <span>Toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
            <ul>
                <li>Home</li>
                <li>Services</li>
                <lI>Expirience</lI>
                <li>Tstimonials</li>
            </ul>
        </div>
        <button className="button">
            Contact Us
        </button>
      </div>
    </div>
  )
}

export default NavBar
