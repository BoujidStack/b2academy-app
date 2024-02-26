import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lessons.css';
import imageBlockchain from '../../../assets/blockchain image.jpeg';
import imageAiConsulting from '../../../assets/Ai Consulting.jpg';
import imageBlockchainConsulting from '../../../assets/imageBlockchainConsulting.jpg';
import imageAI from '../../../assets/ai image.jpeg';
import SpecialOffer from '../../../assets/SpecialOfferBlockchain.png';
import SpecialOffer1 from '../../../assets/SpecialOfferAI.png';
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
import ModalOverlayEnrollAiProgramm from '../../ModalOverlayEnrollAiProgramm/ModalOverlayEnrollAiProgramm';
import ModalOverlayEnrollTwoProgramm from '../../ModalOverlayEnrollTwoProgramm/ModalOverlayEnrollTwoProgramm';
import ModalOverlayEnrollBlockchainConsultingProgram from '../../ModalOverlayEnrollBlockchainConsultingProgram/ModalOverlayEnrollBlockchainConsultingProgram';


const Lessons = () => {
    const [nav, setNav] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { t } = useTranslation();
    const [showOtherModal, setShowOtherModal] = useState(false); // State for other section modal
    const [showTwoProgramModal, setShowTwoProgramModal] = useState(false); // State for other section modal

    const [showAiModal, setShowAiModal] = useState(false); // State for AI section modal

    const handleClose = () => {
        setNav(!nav);
    };
    const calculateCountdown = () => {
        const targetDate = new Date('2024-03-18T23:59:59');
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

    const handleCloseOtherModal = () => {
        setShowOtherModal(false);
    };

    const handleCloseTwoProgramModal = () => {
        setShowTwoProgramModal(false);
    };

    const handleCloseAiModal = () => {
        setShowAiModal(false);
    };

    const navigate = useNavigate();
    const handleGoToBdp = () => {
        navigate('/Blockchain-Developer-Program');
        window.scrollTo(0, 0);
    };

    const handleGoToAi = () => {
        navigate('/AI-Developer-Program');
        window.scrollTo(0, 0);
    };

    const handleGoToConsultingBlockchainProgram = () => {
        navigate('/Consulting-Blockchain-Program');
        window.scrollTo(0, 0);
    };


    const handleGoToConsultingAiProgram = () => {
        navigate('/Consulting-Ai-Program');
        window.scrollTo(0, 0);
    };



    return (
        <>
            <Navbar hideNavbarLinks={true} />
            <div name="Lessons" className="Lessons">
                <div className="contentLessons">
                    <h1 data-aos="fade-down" data-aos-duration="1000">{t('Lessons.title1')}</h1>
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
                                    <a className="open-enrollment-link" onClick={() => setShowOtherModal(true)}>
                                        • {t('programs.buttonTwo')}
                                    </a>
                                    <a className='price'>{t('programs.timeProgram')}</a>
                                    <a className='price'>{t('programs.timeProgram1')}</a>
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
                            <h1>{t('Lessons.titleBlockchainConsulting')}</h1>
                            <p className="information">
                                {t('Lessons.descriptionConsultingBlockchain')}
                            </p>
                            <div className="button-containerLessons">
                                <div>
                                    <button className="ctaLessons" onClick={handleGoToConsultingBlockchainProgram}>
                                        <a>
                                            <span className="hover-underline-animation">{t('programs.button')}</span>
                                        </a>
                                        <FaArrowRight />
                                    </button>
                                    <a className="open-enrollment-link" onClick={() => setShowAiModal(true)}>
                                        • {t('programs.buttonTwo')}
                                    </a>
                                    <a className='price'>{t('programs.timeProgram')}</a>
                                    <a className='price'>{t('programs.timeProgram1')}</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-image">
                            <img src={imageBlockchainConsulting} alt="" />
                        </div>
                    </div>
                </div>

                <div className="contentLessons">
                    <div id="container" data-aos="fade-right" data-aos-duration="1000">
                        <div className="product-details" data-aos="fade-zoom-in" data-aos-duration="1000">
                            <h1>{t('Lessons.title2ProgramsBlockchain')}</h1>
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
                                    <a className="open-enrollment-link" onClick={() => setShowTwoProgramModal(true)}>
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
                {showAiModal && <ModalOverlayEnrollBlockchainConsultingProgram onClose={handleCloseAiModal} />}
                {showOtherModal && <ModalOverlayEnroll onClose={handleCloseOtherModal} />}
                {showTwoProgramModal && <ModalOverlayEnrollTwoProgramm onClose={handleCloseTwoProgramModal} />}
            </div>
        </>
    );
};

export default Lessons;
