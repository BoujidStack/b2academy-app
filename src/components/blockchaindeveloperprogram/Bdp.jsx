import React, { useState, useEffect } from 'react';
import './BdpStyles.css';
import Newsletter from '../newsletter/Newsletter';
import NumberCountingSection from '../NumberCountingSection/NumberCountingSection'
import Advantages from '../Advantages/Advantages'
import Enrolltoday from '../Enrolltoday/Enrolltoday'
import Business from '../B2AcademyForBusiness/Business'
import ProgramModules from '../programModules/ProgramModules'
import Fqa from '../FrequentlyAskedQuestions/Fqa';
import ModalOverlayEnroll from '../ModalOverlayEnrollNow/ModalOverlayEnroll';
import { useTranslation } from 'react-i18next';
import Navbar from '../navbar/Navbar';
import ContactUs from '../Contact Us/ContactUs';
import Footer from '../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Bdp = () => {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        AOS.init({
        });
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Navbar hideNavbarLinks={true} />
            <div name='Bdp' className='Bdp'>
                <div className='content-Bdp'>
                    <div className='centered-content'>
                        <h1 className='title-Bdp' data-aos="fade-down" data-aos-duration="1000">
                            {t('Bdp.title')}
                        </h1>
                        <p className='text-Bdp' data-aos="zoom-in" data-aos-duration="1000">
                            {t('Bdp.description')}
                        </p>
                        <button onClick={() => setShowModal(true)} className='centered-button' data-aos="fade-up" data-aos-duration="1000">
                            {t('Bdp.button')}
                        </button>
                    </div>
                </div>
            </div>
            {showModal && <ModalOverlayEnroll onClose={handleCloseModal} />}
            <NumberCountingSection />
            <ProgramModules />
            <Enrolltoday />
            <Advantages />
            <Business />
            <Newsletter />
            <ContactUs />
            <Fqa />
            <Footer hideFooterLinks={true} />
        </>
    );
};

export default Bdp;
