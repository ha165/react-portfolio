import React, { useContext } from 'react'
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import 'swiper/css';
const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio">
            {/*Heading */}
            <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
            <span>Portfolio</span>

            {/*Slider*/}
            <Swiper spaceBetween={30}
                slidesPerView={4}
                grabCursor={true}
                className="portfolio-slider">
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio