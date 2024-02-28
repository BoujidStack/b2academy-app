import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './ProfilesSection.css';
import imgPerson2 from '../../assets/imgPerson2.jpg';
import { useTranslation } from 'react-i18next';

function ProfilesSection() {
      const { t } = useTranslation();
    return (
        <div className='ProfilesSection'>
            <div className='Title'>
                <h3>{t('ProfilesSection.title1')}</h3>
                <h1>{t('ProfilesSection.title2')}</h1>
            </div>
            <div className='ProfileCardsContainer'>
                <div className='ProfileCard'>
                    <img src={imgPerson2} alt='Mr. Moise' className='ProfileImage' />
                    <div className='ProfileInfo'>
                        <h3>Mr. Moise</h3>
                        <p> {t('ProfilesSection.ProfileInfo1')}</p>
                        <a href='#' className='ProfileLink'>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <div className='ProfileCard'>
                    <img src={imgPerson2} alt='Mr. Ali' className='ProfileImage' />
                    <div className='ProfileInfo'>
                        <h3>Mr. Ali</h3>
                        <p> {t('ProfilesSection.ProfileInfo2')}</p>
                        <a href='#' className='ProfileLink'>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilesSection;
