import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <div>
                    <p>Discover</p>
                    <p>the latest</p>
                    <p>trends</p>
                </div>
                <h2>ENJOY UP TO 30% OFF</h2>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="arrow icon" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="hero" />
            </div>
        </div>
    );
}

export default Hero;
