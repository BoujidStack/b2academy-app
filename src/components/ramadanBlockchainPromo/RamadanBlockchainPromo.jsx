import React from 'react';
import { FaPhone } from 'react-icons/fa';
import logoImg from '../../assets/b2a-logp.png'; // Import your logo image here
import './RamadanBlockchainPromo.css';

function RamadanBlockchainPromo() {
    return (
      <div>
        <div className="navbar">
          <div className="logo">
            <img src={logoImg} alt="Awesome Logo" />
          </div>
          <div className="contact-info">
            <FaPhone />
            <span>+212 617 94 61 00</span>
          </div>
        </div>
        <div className="landing-page">
          <div className="content">
            <h1>Debloquez Votre Avenir : Promotion Speciale Ramadan sur les Programmes de Pointe</h1>
            <p>Embrassez l'esprit du Ramadan et lancez-vous dans un voyage transformateur avec notre promotion exclusive ! Que vous aspiriez à devenir développeur Blockchain, développeur IA, consultant Blockchain ou consultant IA, Rejoignez-nous et développez votre expertise dès aujourd'hui !</p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    );
  }
  
export default RamadanBlockchainPromo;
