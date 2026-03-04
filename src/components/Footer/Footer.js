import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import myoLogo from '../../images/new gym.png'

const Footer = () => {
  return (
    <footer>
        <div className='container footer__container'>
            <article>
                <Link to='/' className='logo'> 
                    <img src={myoLogo} alt="MYO FITNESS STUDIO" className='footer-logo' />
                </Link>
                <p>Transform your body, transform your life. Join MYO FITNESS STUDIO today and experience the ultimate fitness journey with state-of-the-art equipment and expert trainers.
                </p>
                <div className='footer_socials'>
                    <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer noopener'><FaLinkedin></FaLinkedin></a>
                    <a href='https://www.facebook.com/' target='_blank' rel='noreferrer noopener'><FaFacebook></FaFacebook></a>
                    <a href='https://twitter.com' target='_blank' rel='noreferrer noopener'><FaTwitter></FaTwitter></a>
                    <a href='https://www.instagram.com/' target='_blank' rel='noreferrer noopener'><FaInstagram></FaInstagram></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/plans">Plans</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Case Studies</Link>
                    <Link to="/s">Events</Link>
                    <Link to="/s">Communities</Link>
                    <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/s">Support</Link>
                    <Link to="/s">Membership</Link>
                    <Link to="/s">24/7 Support</Link>
            </article>
        </div>
        <div className='footer_copyright'>
            <small>2025 MYO FITNESS STUDIO &copy; All Rights Reserved.</small>
        </div>
    </footer>
  )
}

export default Footer