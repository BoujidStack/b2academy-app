import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import './B2A-Programs brochure.css';
import AOS from 'aos';
import photo1 from '../../assets/imageBlockchainConsulting.jpg'
import photo2 from '../../assets/blockchain image.jpeg'
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { saveFormDataB2AProgramsBrochure } from '../firebase/FirebaseUtils';
import Fqa from '../FrequentlyAskedQuestions/Fqa';
import WhatsAppChatButton from '../WhatsApp Chat Button/WhatsAppChatButton';
import { useNavigate } from 'react-router-dom';
import imageBlockchain from '../../assets/blockchain image.jpeg';
import imageBlockchainConsulting from '../../assets/imageBlockchainConsulting.jpg';
import { FaArrowRight } from 'react-icons/fa';
import FormRamadanPromo from '../FormRamadanPromo/FormRamadanPromo';
import ProgramModules from '../programModules/ProgramModules';
import ProgramModulesAi from '../programModules/ProgramModulesAI/ProgramModulesAi';
import ProgramModulesAiConsulting from '../programModules/ProgramModulesAiConsulting/ProgramModulesAiConsulting';
import ProgramModulesBlockchainConsulting from '../programModules/ProgramModulesBlockchainConsulting/ProgramModulesBlockchainConsulting';

function B2AProgramsBrochure() {
  const [showModal, setShowModal] = useState(false);
  const [showOtherModal, setShowOtherModal] = useState(false);
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

  const navigate = useNavigate();
  const handleGoToBdp = () => {
    navigate('/Blockchain-Developer-Program');
    window.scrollTo(0, 0);
  };


  const handleGoToConsultingBlockchainProgram = () => {
    navigate('/Consulting-Blockchain-Program');
    window.scrollTo(0, 0);
  };



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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleOptionChange = (e) => {
    const { name, value } = e.target;

    if (name === 'selectedOption') {
      setFormData({
        ...formData,
        selectedOption: value
      });
    } else if (name === 'selectedOptionBoth') {
      if (value === 'both') {
        setFormData({
          ...formData,
          selectedOption: 'both',
          selectedOptionBoth: value
        });
      } else {
        const { selectedOptionBoth, ...updatedFormData } = formData;
        setFormData(updatedFormData);
      }
    }
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        formData.firstName &&
        formData.lastName &&
        formData.email &&
        formData.phoneNumber &&
        formData.message &&
        formData.isChecked &&
        formData.selectedOption !== ''
      ) {
        await saveFormDataB2AProgramsBrochure(formData);

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: '',
          isChecked: false,
          selectedOption: ''
        });

        Swal.fire({
          icon: 'success',
          title: 'Your request saved successfully!',
          html: 'Thank you for your interest in our program. You will receive an email with the link to download the brochure shortly. Please do not hesitate to contact us, should you have any questions related to the program.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please fill in all required fields and select an option!',
        });
      }
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };



  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <>
      <Navbar hideNavbarLinks={true} />
      <div className='B2AProgramsBrochure'>
        <h1 data-aos='fade-down' data-aos-duration='1000' className='B2AProgramsBrochuretitle'>{t('B2AProgramsBrochure.Title')}</h1>
        <div className='B2AProgramsBrochureimages-container'>
          <img data-aos='fade-right' data-aos-duration='1000' src={photo1} alt='Image Description 1' className='B2AProgramsBrochureimage' />
          <img data-aos='fade-left' data-aos-duration='1000' src={photo2} alt='Image Description 2' className='B2AProgramsBrochureimage' />
        </div>
        <br/>
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
        <ProgramModules/>

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
        <ProgramModulesAi />
      </div>

      <FormRamadanPromo />
      <Fqa />
      <WhatsAppChatButton />
    </>
  );
}

export default B2AProgramsBrochure;
