import React from 'react';
import YouTube from 'react-youtube';
import './AboutUsStyles.css';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const { t } = useTranslation();

    const videoOptions = {
        playerVars: {
            autoplay: 1,
        },
    };
    const videoId = 'SsdE75J7d2Q';

    return (
        <div name="aboutUs" className="aboutUs">
            <div class="section">
                <div class="titleAboutUs">
                    <h1 data-aos="fade-down" data-aos-duration="1000">{t('AboutUs.AboutUs')}</h1>
                </div>
                <div class="containerAboutUs">
                    <div class="content-section" data-aos="fade-right" data-aos-duration="1000">
                        <div class="title">
                            <h4>B<sup>2</sup>Academy</h4>
                        </div>
                        <div class="content">
                            <p>B<sup>2</sup>Academy {t('AboutUs.description')}</p>
                        </div>
                    </div>
                    <div class="image-section" data-aos="fade-left" data-aos-duration="1000">
                        <div class="pyramid-loader">
                            <div class="wrapper">
                                <span class="side side1"></span>
                                <span class="side side2"></span>
                                <span class="side side3"></span>
                                <span class="side side4"></span>
                                <span class="shadow"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-container">
                <YouTube videoId={videoId} opts={videoOptions} />
            </div>
        </div>
    );
};

export default AboutUs;
