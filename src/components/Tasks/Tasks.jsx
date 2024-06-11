import React, { useContext } from 'react'
import './Tasks.css';
import Card from '../Card/Card.jsx';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import Resume from "./CV.pdf";
import { motion } from 'framer-motion';
const Tasks = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {
        duration: 1,
        type: "spring",
    };

    return (
        <div className="services">
            {/*Left Side */}
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
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
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, Adobe"}
                    />
                </motion.div>
                {/* second  Card*/}
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                    style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={'Html, Laravel, JavaScript, React'}
                    />
                </motion.div>
                {/* third Card */}
                <motion.div
                    initial={{ top: "25rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                    style={{ top: '22rem', left: "14rem" }}>
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={"Lorem ispum dummy text are usually use in section where we need some random text"}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}
                ></div>
            </div>
        </div>

    )
}

export default Tasks