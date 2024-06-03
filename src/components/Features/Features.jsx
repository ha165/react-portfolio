import React from 'react';
import './Features.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
const Features = () => {
    return (
        <div className="services">
            {/* Left Side*/}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <spane>
                    this are the services i offer and also the works
                    <br />
                    i have done in the past
                </spane>
                <div className="button s-button">Download CV</div>
                <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>
            </div>
            {/*ight side*/}
            <div className="cards">
               this is the right
            </div>
        </div>
    )
}

export default Features