import React from 'react';
import './Contact.css';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import contactUsImage from '../../images/contact.jpg';
import ContactUs from '../../components/ContactUs/ContactUs';
import myoLogo from '../../images/new gym.png';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFemale, FaUsers, FaDumbbell, FaGift } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <BreadCrumb title="Contact Us" image={contactUsImage}>
                Ready to transform your life? Connect with MYO FITNESS STUDIO today and start your fitness journey.
            </BreadCrumb>
            
            {/* Promotional Banner */}
            <section className='promo-banner-section'>
                <div className='container'>
                    <div className='promo-banner'>
                        <div className='promo-content'>
                            <div className='promo-tag'>LIMITED TIME OFFER</div>
                            <h2>READY TO GET <span className='highlight'>STRONGER?</span></h2>
                            <div className='promo-date'>
                                <FaClock className='promo-icon' />
                                <span>STARTING AT 10/10/25 • 5:30 PM</span>
                            </div>
                            <p className='promo-tagline'>Where Goals Become Reality!</p>
                            
                            <div className='promo-features'>
                                <div className='promo-feature'>
                                    <span className='feature-check'>✓</span>
                                    <span>50% Off Admission Fee</span>
                                </div>
                                <div className='promo-feature'>
                                    <span className='feature-check'>✓</span>
                                    <span>25% Off 2 Month Fee</span>
                                </div>
                                <div className='promo-feature'>
                                    <span className='feature-check'>✓</span>
                                    <span>Ladies & Unisex</span>
                                </div>
                                <div className='promo-feature'>
                                    <span className='feature-check'>✓</span>
                                    <span>Expert Coaches & Supportive Community</span>
                                </div>
                            </div>
                            
                            <div className='promo-highlight'>
                                <FaGift className='gift-icon' />
                                <span>LIMITED-TIME OFFER: <strong>FIRST CLASS FREE!</strong></span>
                            </div>
                            
                            <div className='promo-cta'>
                                <button className='btn promo-btn'>BOOK YOUR SPOT NOW</button>
                            </div>
                        </div>
                        <div className='promo-logo'>
                            <img src={myoLogo} alt="MYO FITNESS STUDIO" />
                        </div>
                    </div>
                </div>
            </section>
            
            <ContactUs />
            
            {/* Location & Contact Info */}
            <section className='location-section'>
                <div className='container'>
                    <div className='location-grid'>
                        <div className='location-card'>
                            <div className='location-icon'>
                                <FaMapMarkerAlt />
                            </div>
                            <h3>Visit Us</h3>
                            <p>KAVUNGAL, MALAPPURAM</p>
                            <p className='location-detail'>Kerala, India</p>
                           // In the location-card for "Visit Us"
<a href='https://www.google.com/maps/search/?api=1&query=11.0356768,76.0930277' 
   target='_blank' 
   rel='noopener noreferrer' 
   className='location-link'>
    Get Directions →
</a>
                        </div>
                        
                        <div className='location-card'>
                            <div className='location-icon'>
                                <FaPhone />
                            </div>
                            <h3>Call Us</h3>
                            <p className='phone-number'>9495103460</p>
                            <p className='phone-detail'>24/7 Available</p>
                            <a href='tel:9495103460' className='location-link'>
                                Call Now →
                            </a>
                        </div>
                        
                        <div className='location-card'>
                            <div className='location-icon'>
                                <FaEnvelope />
                            </div>
                            <h3>Email Us</h3>
                            <p className='email-address'>myofitnessstudio@gmail.com</p>
                            <p className='email-detail'>We reply within 24 hours</p>
                            <a href='mailto:myofitnessstudio@gmail.com' className='location-link'>
                                Send Message →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
           {/* Map Section */}
<section className='contact-map-section'>
    <div className='container'>
        <div className='section-heading-compact'>
            <h2>Find <span className='highlight'>Us</span></h2>
            <div className='heading-line'></div>
        </div>
        <div className='map-wrapper'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125345.62589714626!2d76.01765445!3d11.0356768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64f9a3f4b8c8d%3A0x8a5f6d8c4b3a2f1!2sKavungal%2C%20Malappuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="MYO FITNESS STUDIO Location"
                className='map-iframe'
            ></iframe>
            
            {/* Map Overlay Badge */}
            <div className='map-badge'>
                <img src={myoLogo} alt="MYO" />
                <span>WE ARE HERE</span>
            </div>
        </div>
    </div>
</section>
            
            {/* Business Hours */}
            <section className='hours-section'>
                <div className='container'>
                    <div className='hours-card'>
                        <div className='hours-icon'>
                            <FaClock />
                        </div>
                        <h3>Business Hours</h3>
                        <div className='hours-grid'>
                            <div className='hour-item'>
                                <span className='day'>Monday - Friday</span>
                                <span className='time'>5:00 AM - 11:00 PM</span>
                            </div>
                            <div className='hour-item'>
                                <span className='day'>Saturday</span>
                                <span className='time'>6:00 AM - 10:00 PM</span>
                            </div>
                            <div className='hour-item'>
                                <span className='day'>Sunday</span>
                                <span className='time'>7:00 AM - 8:00 PM</span>
                            </div>
                            <div className='hour-item highlight'>
                                <span className='day'>💪 Peak Hours</span>
                                <span className='time'>5:30 PM - 8:00 PM</span>
                            </div>
                        </div>
                        <p className='hours-note'>24/7 Access for Premium Members</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;