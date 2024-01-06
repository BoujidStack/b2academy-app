import React from 'react'
import Navbar from '../../navbar/Navbar'
import Newsletter from '../../newsletter/Newsletter'
import ContactUs from '../../Contact Us/ContactUs'
import Fqa from '../../FrequentlyAskedQuestions/Fqa'
import Footer from '../../footer/Footer'
import WhatsAppChatButton from '../../WhatsApp Chat Button/WhatsAppChatButton'

function Ai() {
  return (
    <div>
      <Navbar hideNavbarLinks={true} />
      <Newsletter />
      <ContactUs />
      <Fqa />
      <Footer hideFooterLinks={true} />
      <WhatsAppChatButton />
    </div>
  )
}

export default Ai