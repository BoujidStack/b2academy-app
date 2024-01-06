import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Talk from './components/Lets\'s Talk/Talk';
import Programs from './components/programs/Programs';
import AboutUs from './components/aboutUs/AboutUs';
import OurMethodology from './components/ourMethodology/OurMethodology';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Fqa from './components/FrequentlyAskedQuestions/Fqa';
import Home from './components/home/Home';
import Newsletter from './components/newsletter/Newsletter';
import Bdp from './components/blockchaindeveloperprogram/Bdp';
import Discord from './components/discord/Discord';
import RoadMap from './components/RoadMap/RoadMap';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './components/Languages/en.json';
import frTranslation from './components/Languages/fr.json';
import Terms from './components/Terms and conditions/Terms';
import Privacy from './components/Privacy policy/Privacy';
import Subscription from './components/Subscription/Subscription';
import ContactUs from './components/Contact Us/ContactUs';
import WhatsAppChatButton from './components/WhatsApp Chat Button/WhatsAppChatButton';
import Lessons from './components/programs/Lessons/Lessons';
import Ai from './components/programs/Ai/Ai';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    fr: {
      translation: frTranslation,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Programs />
              <RoadMap />
              <AboutUs />
              <Discord />
              <OurMethodology />
              <Newsletter />
              <ContactUs/>
              <Fqa />
              <Footer />
              <WhatsAppChatButton/>
            </>
          } />
          <Route path="/Talk" element={<Talk />} />
          <Route path="/Terms&Conditions" element={<Terms />} />
          <Route path="/Subscription" element={<Subscription />} />
          <Route path="/Privacy&Policy" element={<Privacy />} />
          <Route path="/blockchain" element={<Bdp />} />
          <Route path="/Lessons" element={<Lessons />} />
          <Route path="/Ai" element={<Ai />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;