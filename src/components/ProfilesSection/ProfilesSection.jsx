import React from 'react'
import './ProfilesSection.css';
import imgPerson1 from '../../assets/imgPerson1.jpg';
import imgPerson2 from '../../assets/imgPerson2.jpg';

function ProfilesSection() {
    return (
        <div name='ProfilesSection' className='ProfilesSection'>

            <section className="ProfilesSectionreview">
                <div   data-aos="fade-left" data-aos-duration="1000" className="ProfilesSectioncards">
                    <div className="ProfilesSectioncard">
                        <div className="ProfilesSectioncard__shap">
                            <img src={imgPerson1} alt="Ali" className="ProfilesSectioncard__img" />
                            <figcaption className="ProfilesSectioncard__caption">Ali</figcaption>
                        </div>
                        <div className="ProfilesSectioncard__text">
                            <h3>Mr. Ali-President</h3>
                            <p>Is a visionary leader dedicated to driving innovation and growth within our organization.</p>
                        </div>
                    </div>

                    <div className="ProfilesSectioncard">
                        <div className="ProfilesSectioncard__shap">
                            <img src={imgPerson2} alt="Moise" className="ProfilesSectioncard__img" />
                            <figcaption className="ProfilesSectioncard__caption">Moise</figcaption>
                        </div>
                        <div className="ProfilesSectioncard__text">
                            <h3>Mr. Moise-Director of Operations</h3>
                            <p>Excels in optimizing operations and fostering a culture of excellence.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ProfilesSection