import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import HeroImg from '../../images/hero.png';
import myoLogo from '../../images/new gym.png';

const Hero = () => {
    return (
        <div className='hero_area main__header'>
            <div className='container main__header_container'>
                <div className='main__header_left'>
                    <div className='header_badge'>
                        <span className='badge_line'></span>
                        <h4>#30DaysWorkOutChallenge</h4>
                    </div>
                    <h1>
                        <span className="thin-text">Join The Legends</span>
                        <br />
                        <span className="bold-text">Of The Fitness World</span>
                    </h1>
                    <p>Experience the pinnacle of fitness excellence at MYO FITNESS STUDIO. Where dedication meets transformation, and every workout brings you closer to your legendary self.</p>
                    <div className='hero_btn'>
                        <Link to='/plans' className='btn primary-btn'>Get Started</Link>
                        <Link to='/about' className='btn secondary-btn'>Learn More</Link>
                    </div>
                    
                    {/* Stats Section */}
                    <div className='hero_stats'>
                        <div className='stat_item'>
                            <h3>50+</h3>
                            <p>Expert Trainers</p>
                        </div>
                        <div className='stat_item'>
                            <h3>1000+</h3>
                            <p>Happy Members</p>
                        </div>
                        <div className='stat_item'>
                            <h3>24/7</h3>
                            <p>Access</p>
                        </div>
                    </div>
                </div>
                <div className='main__header_right'>
                    <div className='main__header_circle'></div>
                    <div className='main__header_image'>
                        <img src={HeroImg} alt="Athlete in action"/>
                    </div>
                    
                    {/* Watermark Logo */}
                    <div className='hero-watermark'>
                        <img src={myoLogo} alt="MYO FITNESS STUDIO" />
                    </div>
                    
                    {/* Floating Elements for Classy Look */}
                    <div className='floating_card card_1'>
                        <span className='card_dot'></span>
                        <div className='card_content'>
                            <small>Personal Training</small>
                            <h5>Elite Coaching</h5>
                        </div>
                    </div>
                    <div className='floating_card card_2'>
                        <span className='card_dot'></span>
                        <div className='card_content'>
                            <small>Modern Equipment</small>
                            <h5>Premium Gear</h5>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className='scroll_indicator'>
                <div className='mouse'></div>
                <span>Scroll</span>
            </div>
        </div>
    );
};

export default Hero;