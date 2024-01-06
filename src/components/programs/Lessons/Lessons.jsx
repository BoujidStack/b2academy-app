import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lessons.css';
import imageBlockchain from '../../../assets/blockchain image.jpeg';
import imageAI from '../../../assets/ai image.jpeg';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ModalOverlayEnroll from '../../ModalOverlayEnrollNow/ModalOverlayEnroll';
import Navbar from '../../navbar/Navbar';
import Newsletter from '../../newsletter/Newsletter';
import ContactUs from '../../Contact Us/ContactUs';
import Fqa from '../../FrequentlyAskedQuestions/Fqa';
import Footer from '../../footer/Footer';
import WhatsAppChatButton from '../../WhatsApp Chat Button/WhatsAppChatButton';
import AOS from 'aos';
const Lessons = () => {
    const [nav, setNav] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { t } = useTranslation();

    const handleClose = () => {
        setNav(!nav);
    };
    useEffect(() => {
        AOS.init();
    }, []);


    const handleCloseModal = () => {
        setShowModal(false);
    };

    const navigate = useNavigate();
    const handleGoToBdp = () => {
        navigate('/blockchain');
        window.scrollTo(0, 0);
    };

    const handleGoToAi = () => {
        navigate('/Ai');
        window.scrollTo(0, 0);
    };

    return (
        <>
            <Navbar hideNavbarLinks={true} />
            <div name="Lessons" className="Lessons">
                <div className="contentLessons">
                    <h1 data-aos="fade-down" data-aos-duration="1000">{t('Lessons.titleSection')}</h1>
                    <div id="container" data-aos="fade-right" data-aos-duration="1000">
                        <div className="product-details" data-aos="fade-zoom-in" data-aos-duration="1000">
                            <h1>{t('Lessons.titleBlockchain')}</h1>
                            <p className="information">
                                {t('Lessons.descriptionBlockchain')}
                            </p>
                            <div className="button-containerLessons">
                                <div>
                                    <button className="ctaLessons" onClick={handleGoToBdp}>
                                        <a>
                                            <span className="hover-underline-animation">{t('programs.button')}</span>
                                        </a>
                                        <FaArrowRight />
                                    </button>
                                    <a className="open-enrollment-link" onClick={() => setShowModal(true)}>
                                        • {t('programs.buttonTwo')}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="product-image">
                            <img src={imageBlockchain} alt="" />
                        </div>
                    </div>
                </div>

                <div className="contentLessons">
                    <div id="container" data-aos="fade-right" data-aos-duration="1000">
                        <div className="product-details" data-aos="fade-zoom-in" data-aos-duration="1000">
                            <h1>{t('Lessons.titleAI')}</h1>
                            <p className="information">
                                {t('Lessons.descriptionAI')}
                            </p>
                            <div className="button-containerLessons">
                                <div>
                                    <button className="ctaLessons" onClick={handleGoToAi}>
                                        <a>
                                            <span className="hover-underline-animation">{t('programs.button')}</span>
                                        </a>
                                        <FaArrowRight />
                                    </button>
                                    <a className="open-enrollment-link" onClick={() => setShowModal(true)}>
                                        • {t('programs.buttonTwo')}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="product-image">
                            <img src={imageAI} alt="" />
                        </div>
                    </div>
                </div>
                <Newsletter />
                <ContactUs />
                <Fqa />
                <Footer hideFooterLinks={true} />
                <WhatsAppChatButton />
                {showModal && <ModalOverlayEnroll onClose={handleCloseModal} />}
            </div>
        </>
    );
};

export default Lessons;
