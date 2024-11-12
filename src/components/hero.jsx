import React from 'react';
import { Link } from 'react-router-dom';
import VideoModal from './VideoModal';

// image
import Himg1 from '../images/slider/1.png'
import Hshape from '../images/slider/shape.svg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const hero = () => {
    return (
        <section className="hero_section">
            <div className="bg_shape">
                <svg viewBox="0 0 1920 1075" fill="none">
                    <path d="M0 0H1920V1000C1920 1000 1632 619 962 917C292 1215 0 1000 0 1000V0Z" fill="#EBF7FF" />
                </svg>
            </div>
            <div className="content">
                <h2>We are Here for You</h2>
                <h3>Spandan Multispeciality <br/> Hospital</h3>
                <p>Your Health is Our Priority</p>
                <Link onClick={ClickHandler} className="theme-btn" to="/about">Contact Us</Link>
            </div>
            <div className="image_content">
                <div className="video">
                    <VideoModal />
                </div>
                <div className="image">
                    <img src={Himg1} alt="" />
                    <div className="bg_shape_2">
                        <img src={Hshape} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default hero;