import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgramsStyles.css';
import image from '../../assets/imgProgramm.png';
import imageAIProgram from '../../assets/AIProgram.png';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Programs = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleGoToBdp = () => {
    navigate('/Programs-Blockchain');
    window.scrollTo(0, 0);
  };

  const handleGoToProgramsAi = () => {
    navigate('/Programs-Ai');
    window.scrollTo(0, 0);
  };

  return (
    <div name="programs" className="programs">
      <div className="contentPrograms">
        <h1 data-aos="fade-down" data-aos-duration="1000">{t('programs.titleSection')}</h1>
        <div id="container" data-aos="fade-right" data-aos-duration="1000">
          <div className="product-details" data-aos="fade-zoom-in" data-aos-duration="1000">
            <h1>{t('programs.title')}</h1>
            <p className="information">
            {t('programs.description')}
            </p>
            <div className="button-containerPrograms">
              <div>
                <button className="ctaPrograms" onClick={handleGoToBdp}>
                  <a>
                    <span className="hover-underline-animation">{t('programs.button')}</span>
                  </a>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="product-image">
            <img src={image} alt="" />
          </div>
        </div>
      </div>

      <div className="contentPrograms">
        <div id="container" data-aos="fade-right" data-aos-duration="1000">
          <div className="product-details" data-aos="fade-zoom-in" data-aos-duration="1000">
            <h1>{t('programs.titleAI')}</h1>
            <p className="information">
            {t('programs.descriptionAI')}
            </p>
            <div className="button-containerPrograms">
              <div>
                <button className="ctaPrograms" onClick={handleGoToProgramsAi}>
                  <a>
                    <span className="hover-underline-animation">{t('programs.button')}</span>
                  </a>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="product-image">
            <img src={imageAIProgram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
