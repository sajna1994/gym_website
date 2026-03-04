import React from 'react'
import './OurMission.css'
import our_mission_image from '../../images/our_mission.jpg'
import myoLogo from '../../images/new gym.png'

const OurMission = () => {
  return (
    <section className='our__mission'>
        <div className='container our__mission_container'>
            <div className='our__mission_content'>
                <h1>Our Mission</h1>
                <p>At MYO FITNESS STUDIO, our mission is to empower every individual to discover their strongest self. We believe that fitness is not just about physical transformation—it's about building mental resilience, confidence, and a community that lifts each other up.</p>
                <p>We're committed to providing world-class training, cutting-edge equipment, and a supportive environment where beginners become athletes and athletes become legends.</p>
                <p>Every workout, every drop of sweat, every moment of discomfort—it's all part of the journey toward becoming the best version of yourself. We're here to guide you every step of the way.</p>
                
                {/* Mission Badge with Logo */}
                <div className='mission-badge'>
                    <img src={myoLogo} alt="MYO" />
                    <span>EST. 2025</span>
                </div>
            </div>
            <div className='our__mission_image'>
                <img src={our_mission_image} alt='Mission image' />
                {/* Logo Watermark */}
                <div className='mission-image-watermark'>
                    <img src={myoLogo} alt="MYO FITNESS STUDIO" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurMission