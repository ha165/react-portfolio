import React from 'react'
import './Tasks.css';
import Card from '../Card/Card.jsx';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./CV.pdf";
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
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/*right side*/}
            <div className="cards">
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, Adobe"}
                    />
                </div>
                {/* second  Card*/}
                <div style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={'Html, Laravel, JavaScript, React'}
                    />
                </div>
                {/* third Card */}
                <div style={{ top: '22rem', left: "14rem" }}>
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={"Lorem ispum dummy text are usually use in section where we need some random text"}
                    />
                </div>
                <div className="blur s-blur2"style={{ background: "var(--purple)" }}
                ></div>
            </div>
        </div>

    )
}

export default Tasks