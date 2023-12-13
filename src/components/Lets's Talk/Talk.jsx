import React, { useEffect } from 'react';
import './TalkStyles.css';
import Newsletter from '../newsletter/Newsletter';
import Fqa from '../FrequentlyAskedQuestions/Fqa';
import Appointment from '../Appointment scheduling/Appointment';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Navbar from '../navbar/Navbar';
import ContactUs from '../Contact Us/ContactUs';
import Footer from '../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhatsAppChatButton from '../WhatsApp Chat Button/WhatsAppChatButton';

const Talk = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <>
      <Navbar hideNavbarLinks={true} />
      <div name='talk' className='talk'>
        <div className='content-talk'>
          <div className='centered-content'>
            <h1
              data-aos='fade-down'
              data-aos-duration='1000'
              className='title-talk'
            >
              {t('talk.title')}
            </h1>
            <p
              data-aos='zoom-in'
              data-aos-duration='1000'
              className='text-talk'
              dangerouslySetInnerHTML={{ __html: t('talk.description') }}
            ></p>
            <div data-aos='fade-up' data-aos-duration='1000'>
              <Link
                onClick={() => AOS.refreshHard()} 
                activeClass='active'
                to='appointment'
                spy={true}
                smooth={true}
                duration={500}
              >
                <button className='centered-button'>{t('talk.button')}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Appointment />
      <Newsletter />
      <ContactUs />
      <Fqa />
      <Footer hideFooterLinks={true} />
      <WhatsAppChatButton/>
    </>
  );
};

export default Talk;
