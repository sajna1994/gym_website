import React from 'react';
import { FaCrown, FaAngleRight } from 'react-icons/fa';
import SectionHeading from '../SectionHeading';
import './Programs.css';
import {programs} from '../../data'
import Card from '../../UI/Card/Card';
import { Link } from 'react-router-dom';
import myoLogo from '../../images/new gym.png';

const Programs = () => {
    return (
        <section className='programs_area programs'>
            <div className='container programs_container'>
                <SectionHeading 
                    icon={<FaCrown />} 
                    title="Elite Programs"
                    subtitle="Transform Your Body, Elevate Your Spirit"
                />
                
                {/* Brand Decoration */}
                <div className='programs-brand-mark'>
                    <img src={myoLogo} alt="MYO" className='brand-mark' />
                </div>
                
                <div className='programs_wrapper'>
                    {
                        programs.map(({id, icon, title, info, path}) => {
                        return (
                            <Card className='programs_program' key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                <Link to={path} className="program-link">Let's Roll <FaAngleRight></FaAngleRight></Link>
                            </Card>
                        )
                        })
                    } 
                </div>
            </div>
            
            {/* Decorative Elements */}
            <div className='programs_background'>
                <div className='bg_circle circle1'></div>
                <div className='bg_circle circle2'></div>
            </div>
        </section>
    );
};

export default Programs;