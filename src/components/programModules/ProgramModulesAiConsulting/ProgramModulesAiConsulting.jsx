import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const ProgramModulesAiConsulting = () => {
  const { t } = useTranslation();


  return (
    <div name="ProgramModulesAi" className="ProgramModulesAi">
      <div class="timeline">
        <div class="timeline-content">
          <div class="timeline-period">Module 1</div>
          <div class="timieline-title">{t('ProgramModulesAiConsulting.module1')}</div>
          <div className='timieline-description'>{t('ProgramModulesAiConsulting.module1-description')}</div>
        </div>

        <div class="timeline-content">
          <div class="timeline-period">Module 2</div>
          <div class="timieline-title">{t('ProgramModulesAiConsulting.module2')}</div>
          <div className='timieline-description'>{t('ProgramModulesAiConsulting.module2-description')}</div>
        </div>

        <div class="timeline-content">
          <div class="timeline-period">Module 3</div>
          <div class="timieline-title">{t('ProgramModulesAiConsulting.module3')}</div>
          <div className='timieline-description'>{t('ProgramModulesAiConsulting.module3-description')}</div>
        </div>

        <div class="timeline-content">
          <div class="timeline-period">Module 4</div>
          <div class="timieline-title">{t('ProgramModulesAiConsulting.module4')}</div>
          <div className='timieline-description'>{t('ProgramModulesAiConsulting.module4-description')}</div>
        </div>
      </div>
    </div>
  );
};

export default ProgramModulesAiConsulting;
