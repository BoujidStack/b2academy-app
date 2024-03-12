import React, { useEffect, useState } from 'react';
import './B2A-Programs brochure.css';
import AOS from 'aos';
import photo1 from '../../assets/imageBlockchainConsulting.jpg'
import photo2 from '../../assets/blockchain image.jpeg'
import { useTranslation } from 'react-i18next';
import Fqa from '../FrequentlyAskedQuestions/Fqa';
import WhatsAppChatButton from '../WhatsApp Chat Button/WhatsAppChatButton';
import imageBlockchain from '../../assets/blockchain image.jpeg';
import imageBlockchainConsulting from '../../assets/imageBlockchainConsulting.jpg';
import FormRamadanPromo from '../FormRamadanPromo/FormRamadanPromo';
import ProgramModules from '../programModules/ProgramModules';
import ProgramModulesAi from '../programModules/ProgramModulesAI/ProgramModulesAi';
import NavbarRamadan from './navbarramadan/NavbarRamadan';
import logoRamadan from '../../assets/logoRamadan.png';
import ModalOverlayEnroll from '../ModalOverlayEnrollNow/ModalOverlayEnroll';
import { Link } from 'react-scroll';


function B2AProgramsBrochure() {
  const [showModal, setShowModal] = useState(false);
  const [showOtherModal, setShowOtherModal] = useState(false);
  const [showTwoProgramModal, setShowTwoProgramModal] = useState(false);
  const [showAiModal, setShowAiModal] = useState(false);
  const [nav, setNav] = useState(false);

  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    isChecked: false,
    selectedOption: '',
    selectedOptionBoth: ''
  });

  const handleClose = () => {
    setNav(!nav);
  };


  const handleCloseOtherModal = () => {
    setShowOtherModal(false);
  };

  const calculateCountdownRamadan = () => {
    const targetDate = new Date('2024-04-12T23:59:59');
    const now = new Date();
    const difference = targetDate - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const [countdownRamadan, setCountdownRamadan] = useState(calculateCountdownRamadan());

  const [prices, setPrices] = useState({
    oldPrice: 1999,
    newPrice: 999,
  });

  useEffect(() => {
    AOS.init({
    });

    const interval = setInterval(() => {
      setCountdownRamadan(calculateCountdownRamadan());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavbarRamadan hideNavbarLinks={true} />
      <div className='B2AProgramsBrochure'>
        <div className='logo-container'>
          <img src={logoRamadan} alt='logoRamadan' className='logoRamadan' />
        </div>
        <br /><br /><br /><br /><br /><br /><br />
        <h1 data-aos='fade-down' data-aos-duration='1000' className='B2AProgramsBrochuretitle'>{t('B2AProgramsBrochure.Title')}</h1>
        <div className='B2AProgramsBrochureimages-container'>
          <img data-aos='fade-right' data-aos-duration='1000' src={photo1} alt='Image Description 1' className='B2AProgramsBrochureimage' />
          <img data-aos='fade-left' data-aos-duration='1000' src={photo2} alt='Image Description 2' className='B2AProgramsBrochureimage' />
        </div>
        <br />
        <div data-aos='fade-down' data-aos-duration='1000' className='B2AProgramsBrochuredescription'>
          {t('programs.description')}
        </div>
      </div>

      <div name="Lessons" className="Lessons">
        <div className="contentLessons">
          <h1 data-aos="fade-down" data-aos-duration="1000">{t('Lessons.title1')}</h1>
          <div id="container" data-aos="fade-right" data-aos-duration="1000">
            <div className="product-details" data-aos="fade-zoom-in" data-aos-duration="1000">
              <h1>{t('Lessons.titleBlockchain')}</h1>
              <div className='timer-container'>
                <div className='timer'>
                  <div className='timer-item'>
                    <span>{countdownRamadan.days}</span>
                    <span> {t('Bdp.timerDay')}</span>
                  </div>
                  <div className='timer-item'>
                    <span>{countdownRamadan.hours}</span>
                    <span> {t('Bdp.timerHoure')}</span>
                  </div>
                  <div className='timer-item'>
                    <span>{countdownRamadan.minutes}</span>
                    <span> {t('Bdp.timerMinute')}</span>
                  </div>
                  <div className='timer-item'>
                    <span>{countdownRamadan.seconds}</span>
                    <span> {t('Bdp.timerSecond')}</span>
                  </div>
                </div>
              </div>
              <div className="button-containerLessons">
                <div>
                  <a>
                    <Link className="open-enrollment-link"
                      activeClass="active"
                      onClick={handleClose}
                      to="FormRamadanPromo"
                      spy={true}
                      smooth={true}
                      duration={500}>
                      • {t('programs.buttonTwo')}
                    </Link>
                  </a>
                  <div data-aos="zoom-in" data-aos-duration="1000" className='prices-container'>
                    <div className='prices'>
                      <p className='old-price'><span className='strikethrough'>{prices.oldPrice}Dh</span></p>
                      <p className='new-price'>{prices.newPrice}Dh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-image">
              <img src={imageBlockchain} alt="" />
            </div>
          </div>
        </div>
        <ProgramModules />

        <div className="contentLessons">
          <div id="container" data-aos="fade-right" data-aos-duration="1000">
            <div className="product-details" data-aos="fade-zoom-in" data-aos-duration="1000">
              <h1>{t('Lessons.titleBlockchainConsulting')}</h1>
              <div className='timer-container'>
                <div className='timer'>
                  <div className='timer-item'>
                    <span>{countdownRamadan.days}</span>
                    <span> {t('Bdp.timerDay')}</span>
                  </div>
                  <div className='timer-item'>
                    <span>{countdownRamadan.hours}</span>
                    <span> {t('Bdp.timerHoure')}</span>
                  </div>
                  <div className='timer-item'>
                    <span>{countdownRamadan.minutes}</span>
                    <span> {t('Bdp.timerMinute')}</span>
                  </div>
                  <div className='timer-item'>
                    <span>{countdownRamadan.seconds}</span>
                    <span> {t('Bdp.timerSecond')}</span>
                  </div>
                </div>
              </div>
              <div className="button-containerLessons">
                <div>
                  <a>
                    <Link className="open-enrollment-link"
                      activeClass="active"
                      onClick={handleClose}
                      to="FormRamadanPromo"
                      spy={true}
                      smooth={true}
                      duration={500}>
                      • {t('programs.buttonTwo')}
                    </Link>
                  </a>
                  <div data-aos="zoom-in" data-aos-duration="1000" className='prices-container'>
                    <div className='prices'>
                      <p className='old-price'><span className='strikethrough'>{prices.oldPrice}Dh</span></p>
                      <p className='new-price'>{prices.newPrice}Dh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-image">
              <img src={imageBlockchainConsulting} alt="" />
            </div>
          </div>
        </div>
        <ProgramModulesAi />
      </div>

      <FormRamadanPromo />
      <Fqa />
      <WhatsAppChatButton />
      {showOtherModal && <ModalOverlayEnroll onClose={handleCloseOtherModal} />}
    </>
  );
}

export default B2AProgramsBrochure;
