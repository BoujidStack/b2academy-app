import './PrivacyStyles.css';
import { useTranslation } from 'react-i18next';
import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import WhatsAppChatButton from '../WhatsApp Chat Button/WhatsAppChatButton';

function Privacy() {
    const { t } = useTranslation();
    const textWithLineBreaks = t('PrivacyPolicy.textTitle1');
    const paragraphs1 = textWithLineBreaks.split('\n');
    const textWithBulletPoints = t('PrivacyPolicy.textTitle6');
    const paragraphs2 = textWithBulletPoints.split('\n');

    return (
        <div>
            <Navbar hideNavbarLinks={true} />
            <div name="Privacy" className="Privacy">
                <div className="contentPrivacy">
                    <h1>{t('PrivacyPolicy.title1')}</h1>

                    {paragraphs1.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    <h2>{t('PrivacyPolicy.Text1')}</h2>
                    <p>{t('PrivacyPolicy.textTitle2')}</p>
                    <h3>{t('PrivacyPolicy.text3')}</h3>
                    <p>{t('PrivacyPolicy.textTitle3')}</p>
                    <h3>{t('PrivacyPolicy.text4')}</h3>
                    <p>{t('PrivacyPolicy.textTitle4')}</p>
                    <h2>{t('PrivacyPolicy.text5')}</h2>
                    <p>{t('PrivacyPolicy.textTitle5')}</p>
                    <h2>{t('PrivacyPolicy.text6')}</h2>

                    {paragraphs2.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    <p>{t('PrivacyPolicy.textTitle6')}</p>
                    <h2>{t('PrivacyPolicy.text7')}</h2>
                    <p>{t('PrivacyPolicy.textTitle7')}</p>
                </div>
            </div>
            <Footer hideFooterLinks={true} />
            <WhatsAppChatButton />
        </div>
    );
}

export default Privacy;
