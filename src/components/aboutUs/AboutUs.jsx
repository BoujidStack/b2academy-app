import React from 'react';
import YouTube from 'react-youtube';
import './AboutUsStyles.css';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const { t } = useTranslation();
    const videoId = 'SsdE75J7d2Q';

    return (
        <div name="aboutUs" className="aboutUs">
            <div className="section">
                <div className="titleAboutUs">
                    <h1 data-aos="fade-down" data-aos-duration="1000">{t('AboutUs.AboutUs')}</h1>
                </div>
                <div className="containerAboutUs">
                    <div className="content-section" data-aos="fade-right" data-aos-duration="1000">
                        <div className="title">
                            <h4>B<sup>2</sup>Academy</h4>
                        </div>
                        <div className="content">
                            <p>B<sup>2</sup>Academy {t('AboutUs.description')}</p>
                        </div>
                    </div>
                    <div className="pyramidImage-section" data-aos="fade-left" data-aos-duration="1000">
                        <div className="pyramid-loader">
                            <div className="wrapper">
                                <span className="side side1"></span>
                                <span className="side side2"></span>
                                <span className="side side3"></span>
                                <span className="side side4"></span>
                                <span className="shadow"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-container">
                <YouTube videoId={videoId}/>
            </div>
        </div>
    );
};

export default AboutUs;
