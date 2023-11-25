import React from 'react';
import './TermsStyles.css';
import { useTranslation } from 'react-i18next';
import FooterTwo from '../footerForTalk&Bdp/FooterTwo';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

function Terms() {
    const { t } = useTranslation();
    return (
        <div>
            <div name="Terms" className="Terms">
            <Navbar hideNavbarLinks={true} />
                <div className="contentTerms">
                    <h1>{t('Terms&Conditions.title')}</h1>
                    <h2>{t('Terms&Conditions.titleText')}</h2>
                    <h2>{t('Terms&Conditions.Text')}</h2>
                    <p>{t('Terms&Conditions.textTitle1')}</p>
                    <h2>{t('Terms&Conditions.Text1')}</h2>
                    <h3>{t('Terms&Conditions.Text2')}</h3>
                    <p>{t('Terms&Conditions.textTitle2')}</p>
                    <h3>{t('Terms&Conditions.text3')}</h3>
                    <p>{t('Terms&Conditions.textTitle3')}</p>
                    <h3>{t('Terms&Conditions.text4')}</h3>
                    <p>{t('Terms&Conditions.textTitle4')}</p>
                    <h2>{t('Terms&Conditions.text5')}</h2>
                    <p>{t('Terms&Conditions.textTitle5')}</p>
                    <h2>{t('Terms&Conditions.text6')}</h2>
                    <p>{t('Terms&Conditions.textTitle6')}</p>
                    <h2>{t('Terms&Conditions.text7')}</h2>
                    <p>{t('Terms&Conditions.textTitle7')}</p>
                    <h2>{t('Terms&Conditions.text8')}</h2>
                    <p>{t('Terms&Conditions.textTitle8')}</p>
                    <h2>{t('Terms&Conditions.text9')}</h2>
                    <p>{t('Terms&Conditions.textTitle9')}</p>
                    <h2>{t('Terms&Conditions.text10')}</h2>
                    <p>{t('Terms&Conditions.textTitle10')}</p>
                    <h2>{t('Terms&Conditions.text11')}</h2>
                    <p>{t('Terms&Conditions.textTitle11')}</p>
                </div>
            </div>
            <Footer hideFooterLinks={true} />
        </div>
    );
}

export default Terms;
