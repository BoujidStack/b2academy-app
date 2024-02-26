import React from 'react';
import './ProfilesSection.css';
import imgPerson1 from '../../assets/imgPerson1.jpg';
import imgPerson2 from '../../assets/imgPerson2.jpg';

function ProfilesSection() {
    return (
        <div className='ProfilesSection'>
            <div className='profileCard'>
                <img src={imgPerson1} alt='Mr. Ali' className='profileImage' />
                <br/>
                <div className='profileDetails'>
                    <h2>Mr. Ali</h2>
                    <h2>President</h2>
                    <p>Is a visionary leader dedicated to driving innovation and growth within our organization.</p>
                </div>
            </div>
            <div className='profileCard'>
                <img src={imgPerson2} alt='Mr. Moise' className='profileImage' />
                <br/>
                <div className='profileDetails'>
                    <h2>Mr. Moise</h2>
                    <h2>Director of Operations</h2>
                    <p>Excels in optimizing operations and fostering a culture of excellence.</p>
                </div>
            </div>
        </div>
    );
}

export default ProfilesSection;
