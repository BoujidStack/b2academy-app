import React, { useState } from 'react';
import './RoadMapStyles.css';
import { FaHome, FaCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Roadmap = () => {
    const [stepIndex, setStepIndex] = useState(0);
    const { t } = useTranslation();

    const handleStepClick = (index) => {
        setStepIndex(index);
    };

    return (
        <div className='RoadMap'>
            <div className="process-wrapper">
                <h3 data-aos="fade-left" data-aos-duration="1000">ROADMAP</h3>
                <h1 data-aos="fade-right" data-aos-duration="1000">{t('roadmap.title')}</h1>
                

            
            </div>
        </div>
    );
};

export default Roadmap;