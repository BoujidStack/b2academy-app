import React, { useState } from 'react'
import './BdpStyles.css'
import Newsletter from '../newsletter/Newsletter'
import Fqa from '../FrequentlyAskedQuestions/Fqa'
import Footer from '../footer/Footer'
import ModalOverlayEnroll from '../ModalOverlayEnrollNow/ModalOverlayEnroll'
import NumberCountingSection from '../NumberCountingSection/NumberCountingSection'
import Enrolltoday from '../Enrolltoday/Enrolltoday'
import Advantages from '../Advantages/Advantages'
import Business from '../B2AcademyForBusiness/Business'
import NavbarTwoComponent from '../navbarForTalk&bdv/NavbarTwo'
import ProgramModules from '../programModules/ProgramModules'
import { useTranslation } from 'react-i18next';

const Bdp = () => {
    const { t } = useTranslation();
    const [nav, setNav] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => {
        setNav(!nav);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <>
            <div name='Bdp' className='Bdp'>
                <NavbarTwoComponent/>
                <div className='content-Bdp'>
                    <div className='centered-content'>
                        <h1 className='title-Bdp' data-aos="fade-down" data-aos-duration="1000">{t('Bdp.title')}</h1>
                        <p className='text-Bdp' data-aos="zoom-in" data-aos-duration="1000">
                        {t('Bdp.description')}
                        </p>
                        <button onClick={() => setShowModal(true)} className='centered-button' data-aos="fade-up" data-aos-duration="1000">{t('Bdp.button')}</button>
                    </div>
                </div>
            </div>
            {showModal && <ModalOverlayEnroll onClose={handleCloseModal} />}
            <NumberCountingSection/>
            <ProgramModules/>
            <Enrolltoday/>
            <Advantages/>
            <Business/>
            <Newsletter />
            <Fqa />
            <Footer />

        </>
    )
}

export default Bdp