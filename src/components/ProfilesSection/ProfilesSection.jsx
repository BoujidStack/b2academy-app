import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './ProfilesSection.css';
import imgPerson1 from '../../assets/AliIMAGE.png';
import imgPerson2 from '../../assets/imgPerson1.png';
import imgPerson3 from '../../assets/imgPerson2.png';

import { useTranslation } from 'react-i18next';

function ProfilesSection() {
    const { t } = useTranslation();
    return (
        <div name="ProfilesSection" className='ProfilesSection'>
            <div data-aos="fade-down" data-aos-duration="1000" className='Title'>
                <h1>{t('ProfilesSection.title3')}</h1>
                <p dangerouslySetInnerHTML={{ __html: t('ProfilesSection.description')}}></p>
            </div>
            <div data-aos="fade-down" data-aos-duration="1000" className='ProfileCardsContainer'>
                <div className='ProfileCard'>
                    <img src={imgPerson1} alt='Mr. Ali' className='ProfileImage' />
                    <div className='ProfileInfo'>
                        <h3>Ali EL ALAMI</h3>
                        <p>CEO</p>
                        <a href='https://www.linkedin.com/in/ali-el-alami-8080b0170/' className='ProfileLink'>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <div className='ProfileCard'>
                    <img src={imgPerson3} alt='Mr. Moise' className='ProfileImage' />
                    <div className='ProfileInfo'>
                        <h3>Madou DIALLO</h3>
                        <p>COO</p>
                        <a href='https://www.linkedin.com/feed/' className='ProfileLink'>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <div className='ProfileCard'>
                    <img src={imgPerson2} alt='Mr. Moise' className='ProfileImage' />
                    <div className='ProfileInfo'>
                        <h3>Zongo Antoine</h3>
                        <p dangerouslySetInnerHTML={{ __html: t('ProfilesSection.ProfileInfo1')}}></p>
                        <a href='https://www.linkedin.com/in/antoine-zongo-a0a0b137/?originalSubdomain=ml' className='ProfileLink'>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilesSection;
