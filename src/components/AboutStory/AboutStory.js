import React from 'react'
import './AboutStory.css'
import story_image from '../../images/ourStory.jpg'
import myoLogo from '../../images/new gym.png'

const AboutStory = () => {
  return (
    <section className='about__story'>
        <div className='container about__story_container'>
            <div className='about_section_image'>
                <img src={story_image} alt='Story image' />
                {/* Logo Overlay */}
                <div className='story-logo-overlay'>
                    <img src={myoLogo} alt="MYO FITNESS STUDIO" />
                </div>
            </div>
            <div className='about_section_content'>
                <h1>Our Story</h1>
                <p>Lacking motivation to get back into the gym? Back in the gym already but feel stagnated? Or maybe you're just looking for new inspiration for a the new year. Whatever your situation, reading words of wisdom from successful people can be super-inspiring.</p>
                <p>In September 2025, MYO FITNESS STUDIO was formed with a vision to transform the fitness industry. Beginning with only five employees, we've grown into a community of thousands.</p>
                <p>Immerse yourself in the MYO experience at one of our premium locations, where state-of-the-art equipment meets expert guidance and unwavering support.</p>
                
                {/* Signature Logo */}
                <div className='story-signature'>
                    <img src={myoLogo} alt="MYO FITNESS STUDIO" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutStory