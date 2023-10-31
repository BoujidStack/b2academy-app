import React, { useState } from 'react';
import './ContactUs.css';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { saveFormDataToFirestore } from '../firebase/FirebaseUtils';

function ContactUs() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    isChecked: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
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
        formData.isChecked
      ) {
        await saveFormDataToFirestore(formData);

        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Form data saved successfully!',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please fill in all required fields!',
        });
      }
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };

  return (
    <div className="ContactUs" name="contactUs">
      <h1 data-aos="fade-down" data-aos-duration="1000">
        {t('ContactUs.ContactUstitle')}
      </h1>
      <div className="modal-header">
        <h2 data-aos="fade-right" data-aos-duration="1000">{t('ContactUs.title')}</h2>
        <p data-aos="fade-left" data-aos-duration="1000">{t('ContactUs.description')}</p>
      </div>
      <form className="ContactUsform" onSubmit={handleFormSubmit}>
        <div className="ContactUsform-group ContactUsname-inputs">
          <div className="ContactUsform-group">
            <input
              data-aos="fade"
              data-aos-duration="1000"
              type="text"
              id="firstName"
              name="firstName"
              placeholder={t('ContactUs.firstName')}
              className="ContactUsinput"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="ContactUsform-group">
            <input
              data-aos="fade"
              data-aos-duration="1000"
              type="text"
              id="lastName"
              name="lastName"
              placeholder={t('ContactUs.lastName')}
              className="ContactUsinput"
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="ContactUsform-group">
          <input
            data-aos="fade"
            data-aos-duration="1000"
            type="email"
            id="email"
            name="email"
            placeholder={t('ContactUs.email')}
            className="ContactUsinput"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="ContactUsform-group">
          <input
            data-aos="fade"
            data-aos-duration="1000"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder={t('ContactUs.phoneNumber')}
            className="ContactUsinput"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="ContactUsform-group">
          <textarea
            data-aos="fade"
            data-aos-duration="1000"
            id="message"
            name="message"
            placeholder="Message"
            className="ContactUstextarea"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="ContactUsform-group" data-aos="fade" data-aos-duration="1000">
          <label htmlFor="isChecked" className="ContactUscheckbox-label">
            <input
              type="checkbox"
              id="isChecked"
              name="isChecked"
              className="ContactUscheckbox"
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
            <span>{t('ContactUs.button')}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
