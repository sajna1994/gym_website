import React from 'react';
import './Values.css';
import gymHuman from '../../images/gymhuman.jpg';
import SectionHeading from '../SectionHeading';
import { FaCrown, FaHeart, FaHandsHelping, FaLeaf, FaUsers, FaTarget } from 'react-icons/fa';
import { values } from '../../data';
import Card from '../../UI/Card/Card';

const Values = () => {
    return (
        <section className='values_area'>
            <div className='container values_container'>
                <div className='values_left'>
                    <div className='values_image_wrapper'>
                        <div className='values_image_circle'></div>
                        <div className='values_image'>
                            <img src={gymHuman} alt="Dedicated athlete training at MYO FITNESS STUDIO" />
                        </div>
                        
                       
                    </div>
                </div>
                <div className='values_right'>
                    <SectionHeading 
                        icon={<FaCrown />} 
                        title='Our Core Values'
                        subtitle='The principles that drive our fitness philosophy'
                    />
                    
                    <div className='values_intro'>
                        <p>At MYO FITNESS STUDIO, we believe that true transformation goes beyond physical changes. Our values shape every workout, every interaction, and every success story.</p>
                    </div>
                    
                    <div className='values_wrapper'>
                        {
                            values.map(({id, icon, title, desc}) => {
                                return (
                                    <Card className='values_value' key={id}>
                                        <div className='value_icon'>
                                            {icon}
                                        </div>
                                        <div className='value_content'>
                                            <h4>{title}</h4>
                                            <p>{desc}</p>
                                        </div>
                                        
                                        {/* Decorative corner element */}
                                        <div className='value_corner'></div>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
            {/* Decorative Elements */}
            <div className='values_background'>
                <div className='bg_line line1'></div>
                <div className='bg_line line2'></div>
            </div>
        </section>
    );
};

export default Values;