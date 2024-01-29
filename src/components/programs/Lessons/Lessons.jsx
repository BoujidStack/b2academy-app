import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lessons.css';
import imageBlockchain from '../../../assets/blockchain image.jpeg';
import imageAI from '../../../assets/ai image.jpeg';
import SpecialOffer from '../../../assets/Special Offer.png';
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
    const calculateCountdown = () => {
        const targetDate = new Date('2024-02-18T23:59:59');
        const now = new Date();
        const difference = targetDate - now;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };
    const [countdown, setCountdown] = useState(calculateCountdown());

    useEffect(() => {
        AOS.init({});

        const interval = setInterval(() => {
            setCountdown(calculateCountdown());
        }, 1000);

        return () => clearInterval(interval);
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
                    <h1 data-aos="fade-down" data-aos-duration="1000">{t('programs.titleSection')}</h1>
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
                                    <a className='price'>6000Dh</a>
                                    <a className='price'>{t('programs.timeProgram')}</a>
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
                                    <a className='price'>6000Dh</a>
                                    <a className='price'>{t('programs.timeProgram')}</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-image">
                            <img src={imageAI} alt="" />
                        </div>
                    </div>
                </div>

                <div className="contentLessons">
                    <div id="container" data-aos="fade-right" data-aos-duration="1000">
                        <div className="product-details" data-aos="fade-zoom-in" data-aos-duration="1000">
                            <h1>{t('Lessons.title2Programs')}</h1>
                            <div className='timer-container'>
                            <div className='timer'>
                                <div className='timer-item'>
                                    <span>{countdown.days}</span>
                                    <span> {t('Bdp.timerDay')}</span>
                                </div>
                                <div className='timer-item'>
                                    <span>{countdown.hours}</span>
                                    <span> {t('Bdp.timerHoure')}</span>
                                </div>
                                <div className='timer-item'>
                                    <span>{countdown.minutes}</span>
                                    <span> {t('Bdp.timerMinute')}</span>
                                </div>
                                <div className='timer-item'>
                                    <span>{countdown.seconds}</span>
                                    <span> {t('Bdp.timerSecond')}</span>
                                </div>
                            </div>
                        </div>
                            <div className="button-containerLessons">
                                <div>
                                    <a className="open-enrollment-link" onClick={() => setShowModal(true)}>
                                        • {t('programs.buttonTwo')}
                                    </a>
                                    <a className='pricePromotion'>9999Dh</a>
                                    <a className='pricePromotion'>{t('programs.time2Programs')}</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-image">
                            <img src={SpecialOffer} alt="" />
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
