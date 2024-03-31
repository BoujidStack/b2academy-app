import React, { useEffect, useState } from 'react';
import './FormRamadanPromo.css';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { saveFormDataB2AProgramsBrochure } from '../firebase/FirebaseUtils';

function FormRamadanPromo() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    isChecked: false,
    selectedOptionRadio: '',
    selectedOptionSelect: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;

    setFormData({
      ...formData,
      selectedOptionRadio: value,
    });
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;

    setFormData({
      ...formData,
      selectedOptionSelect: value,
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
        formData.isChecked &&
        formData.selectedOptionRadio !== '' &&
        formData.selectedOptionSelect !== ''
      ) {
        await saveFormDataB2AProgramsBrochure(formData);

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: '',
          isChecked: false,
          selectedOptionRadio: '',
          selectedOptionSelect: ''
        });

        Swal.fire({
          icon: 'success',
          title: 'Your request saved successfully!',
          html: "Merci pour votre intérêt pour notre programme ! 🌟 Vous allez recevoir un e-mail avec le lien pour télécharger la brochure et le prospectus sous peu. Nous vous contacterons également pour plus d'informations. 📧",
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Veuillez remplir tous les champs obligatoires et sélectionner une option !',
        });
      }
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div name="FormRamadanPromo" className='FormRamadanPromo'>
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
          <div data-aos="fade-right" data-aos-duration="1000">
            <input
              type="radio"
              name="selectedOptionRadio"
              value="Programme Developer Blockchain"
              checked={formData.selectedOptionRadio === 'Programme Developer Blockchain'}
              onChange={handleRadioChange}
            />
            <label>{t('B2AProgramsBrochure.radiobutton1')}</label>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <input
              type="radio"
              name="selectedOptionRadio"
              value="Programme Developer Consulting"
              checked={formData.selectedOptionRadio === 'Programme Developer Consulting'}
              onChange={handleRadioChange}
            />
            <label>{t('B2AProgramsBrochure.radiobutton2')}</label>
          </div>
        </div>
        <div className="ContactUsform-group" data-aos="fade-up" data-aos-duration="1000">
          <select
            id="selectedOptionSelect"
            name="selectedOptionSelect"
            className="ContactUsinput"
            value={formData.selectedOptionSelect}
            onChange={handleSelectChange}
            required
          >
            <option value="" disabled>{t('B2AProgramsBrochure.selectOption')}</option>
            <option value="student">{t('B2AProgramsBrochure.student')}</option>
            <option value="professional">{t('B2AProgramsBrochure.professional')}</option>
          </select>
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
  )
}

export default FormRamadanPromo