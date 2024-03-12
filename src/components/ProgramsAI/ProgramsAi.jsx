import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import Newsletter from '../newsletter/Newsletter';
import ContactUs from '../Contact Us/ContactUs';
import Fqa from '../FrequentlyAskedQuestions/Fqa';
import Footer from '../footer/Footer';
import WhatsAppChatButton from '../WhatsApp Chat Button/WhatsAppChatButton';
import ModalOverlayEnrollAiProgramm from '../ModalOverlayEnrollAiProgramm/ModalOverlayEnrollAiProgramm';
import Navbar from '../navbar/Navbar';
import imageAI from '../../assets/ai image.jpeg';
import SpecialOffer1 from '../../assets/SpecialOfferAI.png';
import imageAiConsulting from '../../assets/Ai Consulting.jpg';
import ModalOverlayEnrollAIConsultingProgram from '../ModalOverlayEnrollAIConsultingProgram/ModalOverlayEnrollAIConsultingProgram';
import ModalOverlayEnrollTwoProgramAI from '../ModalOverlayEnrollTwoProgramAI/ModalOverlayEnrollTwoProgramAI';



function ProgramsAi() {

    const { t } = useTranslation();
    const [showConsultingProgram, setShowConsultingProgram] = useState(false);
    const [showTwoProgramModal, setShowTwoProgramModal] = useState(false);

    const [showAiModal, setShowAiModal] = useState(false);


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

    const handleCloseAIConsultingProgram = () => {
        setShowConsultingProgram(false);
    };

    const handleCloseTwoProgramModal = () => {
        setShowTwoProgramModal(false);
    };

    const handleCloseAiModal = () => {
        setShowAiModal(false);
    };

    const navigate = useNavigate();

    const handleGoToAi = () => {
        navigate('/AI-Developer-Program');
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
                    <h1 data-aos="fade-down" data-aos-duration="1000">{t('Lessons.title2')}</h1>
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
                                    <a className="open-enrollment-link" onClick={() => setShowAiModal(true)}>
                                        • {t('programs.buttonTwo')}
                                    </a>
                                    <a className='price'>{t('programs.timeProgram')}</a>
                                    <a className='price'>{t('programs.timeProgram1')}</a>
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
                            <h1>{t('Lessons.titleConsultingAI')}</h1>
                            <p className="information">
                                {t('Lessons.descriptionConsultingAI')}
                            </p>
                            <div className="button-containerLessons">
                                <div>
                                    <button className="ctaLessons" onClick={handleGoToConsultingAiProgram}>
                                        <a>
                                            <span className="hover-underline-animation">{t('programs.button')}</span>
                                        </a>
                                        <FaArrowRight />
                                    </button>
                                    <a className="open-enrollment-link" onClick={() => setShowConsultingProgram(true)}>
                                        • {t('programs.buttonTwo')}
                                    </a>
                                    <a className='price'>{t('programs.timeProgram')}</a>
                                    <a className='price'>{t('programs.timeProgram1')}</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-image">
                            <img src={imageAiConsulting} alt="" />
                        </div>
                    </div>
                </div>

                <div className="contentLessons">
                    <div id="container" data-aos="fade-right" data-aos-duration="1000">
                        <div className="product-details" data-aos="fade-zoom-in" data-aos-duration="1000">
                            <h1>{t('Lessons.title2ProgramsAI')}</h1>
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
                                    <a className='pricePromotion'>299$</a>
                                    <a className='pricePromotion'>{t('programs.time2Programs')}</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-image">
                            <img src={SpecialOffer1} alt="" />
                        </div>
                    </div>
                </div>
                <Newsletter />
                <ContactUs />
                <Fqa />
                <Footer hideFooterLinks={true} />
                <WhatsAppChatButton />
                {showAiModal && <ModalOverlayEnrollAiProgramm onClose={handleCloseAiModal} />}
                {showConsultingProgram && <ModalOverlayEnrollAIConsultingProgram onClose={handleCloseAIConsultingProgram} />}
                {showTwoProgramModal && <ModalOverlayEnrollTwoProgramAI onClose={handleCloseTwoProgramModal} />}
            </div>
        </>
    )
}

export default ProgramsAi