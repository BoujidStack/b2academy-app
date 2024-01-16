import React, { useEffect, useRef } from 'react';
import './ProgramModulesAi.css';
import { useTranslation } from 'react-i18next';

const ProgramModulesAi = () => {
  const { t } = useTranslation();


  return (
    <div name="ProgramModulesAi" className="ProgramModulesAi">
      <div class="timeline">
        <div class="timeline-content">
          <div class="timeline-period">Module 1</div>
          <div class="timieline-title">{t('ProgramModulesAi.module1')}</div>
          <div className='timieline-description'>{t('ProgramModulesAi.module1-description')}</div>
        </div>

        <div class="timeline-content">
          <div class="timeline-period">Module 2</div>
          <div class="timieline-title">{t('ProgramModulesAi.module2')}</div>
          <div className='timieline-description'>{t('ProgramModulesAi.module2-description')}</div>
        </div>

        <div class="timeline-content">
          <div class="timeline-period">Module 3</div>
          <div class="timieline-title">{t('ProgramModulesAi.module3')}</div>
          <div className='timieline-description'>{t('ProgramModulesAi.module3-description')}</div>
        </div>

        <div class="timeline-content">
          <div class="timeline-period">Module 4</div>
          <div class="timieline-title">{t('ProgramModulesAi.module4')}</div>
          <div className='timieline-description'>{t('ProgramModulesAi.module4-description')}</div>
        </div>
      </div>
    </div>
  );
};

export default ProgramModulesAi;
