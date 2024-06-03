import React from 'react';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import me from '../../img/me.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import './Intro.css';
const InTro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span> Hey! I Am</span>
                    <span>Lumumba Harmony</span>
                    <span>Frontend And Backend Developer with better expirience in web designinng and development,producing a quality work</span>
                </div>
                <button className="button i-button">Hireme</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={me} alt="" />
                <div style={{top:'-4%',left:'68%'}}></div>
            </div>
            <div>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
            </div>
            <div>
                <FloatingDiv image={Thumbup} txt1
            </div>
        </div>
    )
}

export default InTro
