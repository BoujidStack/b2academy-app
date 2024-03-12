import React, { useState, useEffect } from 'react';
import Newsletter from '../newsletter/Newsletter';
import NumberCountingSectionAi from '../NumberCountingSection/NumberCountingSectionAi/NumberCountingSectionAi';
import Business from '../B2AcademyForBusiness/Business';
import Fqa from '../FrequentlyAskedQuestions/Fqa';
import ModalOverlayEnroll from '../ModalOverlayEnrollNow/ModalOverlayEnroll';
import { useTranslation } from 'react-i18next';
import Navbar from '../navbar/Navbar';
import ContactUs from '../Contact Us/ContactUs';
import Footer from '../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhatsAppChatButton from '../WhatsApp Chat Button/WhatsAppChatButton';
import ProgramModulesAiConsulting from '../programModules/ProgramModulesAiConsulting/ProgramModulesAiConsulting';
import EnrolltodayAi from '../Enrolltoday/EnrolltodayAi/EnrolltodayAi';
import AdvantagesAi from '../Advantages/AdvantagesAi/AdvantagesAi';

function ConsultingAi() {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [prices, setPrices] = useState({
    oldPrice: 299,
    newPrice: 199,
  });
  const calculateCountdown = () => {
      const targetDate = new Date('2024-04-12T23:59:59');
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
  return (
    <>
            <Navbar hideNavbarLinks={true} />
            <div name='Bdp' className='Bdp'>
                <div className='content-Bdp'>
                    <div className='centered-content'>
                        <h1 className='title-Bdp' data-aos="fade-down" data-aos-duration="1000">
                            {t('Bdp.titleConsultingAI')}
                        </h1>
                        <p className='text-Bdp' data-aos="zoom-in" data-aos-duration="1000">
                            {t('Bdp.descriptionConsultingAI')}
                        </p>
                        <div data-aos="zoom-in" data-aos-duration="1000" className='timer-container'>
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
                        <div data-aos="zoom-in" data-aos-duration="1000" className='prices-container'>
                            <div className='prices'>
                                <p className='old-price'><span className='strikethrough'>{prices.oldPrice}$</span></p>
                                <p className='new-price'>{prices.newPrice}$</p>
                            </div>
                        </div>
                        <button onClick={() => setShowModal(true)} className='centered-button' data-aos="fade-up" data-aos-duration="1000">
                            {t('Bdp.button')}
                        </button>
                    </div>
                </div>
            </div>
            {showModal && <ModalOverlayEnroll onClose={handleCloseModal} />}
            <NumberCountingSectionAi i18n={i18n}  brochureAI="consultingAi"/>
            <ProgramModulesAiConsulting />
            <EnrolltodayAi />
            <AdvantagesAi />
            <Business />
            <Newsletter />
            <ContactUs />
            <Fqa />
            <Footer hideFooterLinks={true} />
            <WhatsAppChatButton />
        </>
  )
}

export default ConsultingAi