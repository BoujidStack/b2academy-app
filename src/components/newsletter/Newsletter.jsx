import React, { useState } from 'react';
import './NewsletterStyles.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import { saveFormDataToOtherFormEmails } from '../firebase/FirebaseUtils';

const Newsletter = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.email) {
        await saveFormDataToOtherFormEmails(formData);

        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Email subscription saved successfully!',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please enter a valid email address!',
        });
      }
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };


  return (
    <div className='newsletter'>
      <h1 className='newsletter-title' data-aos="fade-down" data-aos-duration="1000">{t('newsletter.title')}</h1>
      <div className='newsletter-input' data-aos="zoom-in" data-aos-duration="1000">
        <input
          placeholder={t('newsletter.email')}
          className="input-newsletter"
          name="email"
          type="email"
          required
          onChange={handleInputChange}
        />
        <button onClick={handleFormSubmit} className="button-newsletter"><span>{t('newsletter.button')}</span></button>
      </div>
      <div className='social-media-icons' data-aos="zoom-in" data-aos-duration="1000">
        <div className="media-icons" >
          <a href=""><FaFacebook /></a>
          <a href=""><FaLinkedin /></a>
          <a href=""><FaInstagram /></a>
          <a href="https://www.youtube.com/channel/UCY8XFWyBLeRNze3yhSp-7oA"><FaYoutube /></a>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
