import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import './B2A-Programs brochure.css';
import AOS from 'aos';
import photo1 from '../../assets/ai image.jpeg'
import photo2 from '../../assets/blockchain image.jpeg'
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { saveFormDataB2AProgramsBrochure } from '../firebase/FirebaseUtils';
import Footer from '../footer/Footer';

function B2AProgramsBrochure() {
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
        <br />
        <div data-aos='fade-down' data-aos-duration='1000' className='B2AProgramsBrochuredescription'>
          {t('programs.description')}
        </div>
        <h3 data-aos='fade-down' data-aos-duration='1000' className='B2AProgramsBrochuretitle'>{t('Lessons.titleBlockchain')}</h3>
        <div data-aos='fade-down' data-aos-duration='1000' className='B2AProgramsBrochuredescription'>
          {t('Lessons.descriptionBlockchain')}
        </div>
        <h3 data-aos='fade-down' data-aos-duration='1000' className='B2AProgramsBrochuretitle'>{t('Lessons.titleAI')}</h3>
        <div data-aos='fade-down' data-aos-duration='1000' className='B2AProgramsBrochuredescription'>
          {t('Lessons.descriptionAI')}
        </div>
        <br />
        <h2 data-aos='fade-down' data-aos-duration='1000' className='B2AProgramsBrochuretitle'>{t('B2AProgramsBrochure.B2AProgramsBrochuretitle')}</h2>

        <form className="ContactUsform" onSubmit={handleFormSubmit}>
          <div className="ContactUsform-group ContactUsname-inputs">
            <div className="ContactUsform-group">
              <input
                data-aos="fade-right"
                data-aos-duration="1000"
                type="text"
                id="firstName"
                name="firstName"
                placeholder={t('ContactUs.firstName')}
                className="ContactUsinput"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="ContactUsform-group">
              <input
                data-aos="fade-left"
                data-aos-duration="1000"
                type="text"
                id="lastName"
                name="lastName"
                placeholder={t('ContactUs.lastName')}
                className="ContactUsinput"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="ContactUsform-group">
            <input
              data-aos="fade-up"
              data-aos-duration="1000"
              type="email"
              id="email"
              name="email"
              placeholder={t('ContactUs.email')}
              className="ContactUsinput"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="ContactUsform-group">
            <input
              data-aos="fade-up"
              data-aos-duration="1000"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder={t('ContactUs.phoneNumber')}
              className="ContactUsinput"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="ContactUsform-group">
            <label data-aos="fade-up" data-aos-duration="1000" className="radio-label">
              <input
                data-aos="fade-up"
                data-aos-duration="1000"
                type="radio"
                name="selectedOption"
                value="blockchain"
                checked={formData.selectedOption === 'blockchain'}
                onChange={handleOptionChange}
              />
              {t('B2AProgramsBrochure.radiobutton1')}
            </label>
            <label data-aos="fade-up" data-aos-duration="1000" className="radio-label">
              <input
                data-aos="fade-up"
                data-aos-duration="1000"
                type="radio"
                name="selectedOption"
                value="AI"
                checked={formData.selectedOption === 'AI'}
                onChange={handleOptionChange}
              />
              {t('B2AProgramsBrochure.radiobutton2')}
            </label>
            <label data-aos="fade-up" data-aos-duration="1000" className="radio-label">
              <input
                data-aos="fade-up"
                data-aos-duration="1000"
                type="radio"
                name="selectedOptionBoth"
                value="both"
                checked={formData.selectedOptionBoth === 'both'}
                onChange={handleOptionChange}
              />
              {t('B2AProgramsBrochure.radiobutton3')}
            </label>
          </div>
          <div className="ContactUsform-group">
            <textarea
              data-aos="fade-up"
              data-aos-duration="1000"
              id="message"
              name="message"
              placeholder="Message"
              className="ContactUstextarea"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="ContactUsform-group" data-aos="fade" data-aos-duration="1000">
            <label data-aos="fade-up" data-aos-duration="1000" htmlFor="isChecked" className="ContactUscheckbox-label">
              <input
                data-aos="fade-up"
                data-aos-duration="1000"
                type="checkbox"
                id="isChecked"
                name="isChecked"
                className="ContactUscheckbox"
                checked={formData.isChecked}
                onChange={handleInputChange}
                required
              />
              {t('ContactUs.Terms and Conditions')}
            </label>
          </div>
          <br />
          <div className="form-group button-container">
            <button
              type="submit"
              className="modal-overlay-btn"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span>{t('B2AProgramsBrochure.button')}</span>
            </button>
          </div>
        </form>
      </div>
      <Footer hideFooterLinks={true} />
    </>
  );
}

export default B2AProgramsBrochure;
