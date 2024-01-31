import React, { useState } from 'react';
import './EnrolltodayAi.css';
import imgEnrolltoday from '../../../assets/Ai Image1.png';
import { useTranslation } from 'react-i18next';
import ModalOverlayEnrollAiProgramm from '../../ModalOverlayEnrollAiProgramm/ModalOverlayEnrollAiProgramm';

const EnrolltodayAi = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div name='enrolltoday' className='enrolltoday'>
      <div className="containerEnrolltoday">
        <div className="content-sectionEnrolltoday">
          <button data-aos="fade-right" data-aos-duration="1000" id='Enrolltoday-btn' onClick={() => setShowModal(true)}>
            <span>{t('Enrolltoday.button')}</span>
          </button>
          <div className="content" data-aos="fade-right" data-aos-duration="1000">
            <h2>{t('Enrolltoday.title')}</h2>
          </div>
        </div>
        <div className="image-section" data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={imgEnrolltoday} />
        </div>
      </div>
      {showModal && <ModalOverlayEnrollAiProgramm onClose={handleCloseModal} />}
    </div>
  );
};

export default EnrolltodayAi;
