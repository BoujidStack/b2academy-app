import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './ProfilesSection.css';
import imgPerson2 from '../../assets/imgPerson2.jpg';

function ProfilesSection() {
    return (
        <div className='ProfilesSection'>
            <div className='ProfileCard'>
                <img src={imgPerson2} alt='Mr. Moise' className='ProfileImage' />
                <div className='ProfileInfo'>
                    <h3>Mr. Moise</h3>
                    <p>Director of Operations</p>
                    <a href='#' className='ProfileLink'>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className='ProfileCard'>
                <img src={imgPerson2} alt='Mr. Ali' className='ProfileImage' />
                <div className='ProfileInfo'>
                    <h3>Mr. Ali</h3>
                    <p>President</p>
                    <a href='#' className='ProfileLink'>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProfilesSection;
