import React from 'react';
import { FaCrown, FaAngleRight, FaDumbbell, FaHeart, FaRunning, FaBolt } from 'react-icons/fa';
import SectionHeading from '../SectionHeading';
import './Programs.css';
import {programs} from '../../data'
import Card from '../../UI/Card/Card';
import { Link } from 'react-router-dom';

const Programs = () => {
    return (
        <section className='programs_area programs'>
            <div className='container programs_container'>
                <SectionHeading 
                    icon={<FaCrown />} 
                    title="Elite Programs"
                    subtitle="Transform Your Body, Elevate Your Spirit"
                />
                <div className='programs_wrapper'>
                    {
                        programs.map(({id, icon, title, info, path}) => {
                        return (
                            <Card className='programs_program' key={id}>
                                <div className='program_icon'>
                                    {icon}
                                </div>
                                <h4>{title}</h4>
                                <p>{info}</p>
                                <Link to={path} className='program_link'>
                                    Explore Program <FaAngleRight />
                                </Link>
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