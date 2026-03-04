import React from 'react';
import './Values.css'
import gymHuman from '../../images/gymhuman.jpg' 
import SectionHeading from '../SectionHeading';
import { FaCrown } from 'react-icons/fa';
import { values } from '../../data';
import Card from '../../UI/Card/Card';
import myoLogo from '../../images/new gym.png';

const Values = () => {
    return (
        <section className='values_area'>
            <div className='container values_container'>
                <div className='values_left'>
                    <div className='values_image_wrapper'>
                        <div className='values_image_circle'></div>
                        <div className='values_image'>
                            <img src={gymHuman} alt="Human" srcSet='' />
                        </div>
                        
  
                        
                     
                    </div>
                </div>
                <div className='values_right'>
                    <SectionHeading icon={<FaCrown></FaCrown>} title='Our Core Values' subtitle='The principles that drive our fitness philosophy'></SectionHeading>
                    
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
                                        <h4>{title}</h4>
                                        <small>{desc}</small>
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