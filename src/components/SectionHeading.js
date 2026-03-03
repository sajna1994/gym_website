import React from 'react';
import './SectionHeading.css';

const SectionHeading = ({ icon, title, subtitle }) => {
    return (
        <div className='section_heading'>
            <div className='heading_icon'>
                {icon}
            </div>
            <div className='heading_content'>
                <h2>{title}</h2>
                {subtitle && <p className='heading_subtitle'>{subtitle}</p>}
            </div>
            <div className='heading_line'></div>
        </div>
    );
};

export default SectionHeading;