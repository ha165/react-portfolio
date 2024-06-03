import React from 'react'
import './Tasks.css';
import Card from '../Card/Card.jsx';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
const Tasks = () => {
    return (
        <div className="services">
            {/*Left Side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <spane>
                    Lorem ispum is simpley dummy text of printing of printing Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </spane>
                <button className="button s-button">Download CV</button>
                <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/*right side*/}
            <div className="cards">
                <div>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma,Sketch,Photoshop,Adobe,Adobe"}
                    />
                </div>
            </div>
        </div>

    )
}

export default Tasks