import React from 'react';
import './WhatsAppChatButton.css';

const WhatsAppChatButton = () => {
    const phoneNumber = '651025852';
    const openWhatsAppChat = () => {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
    };

    return (
        <div
            className="whatsapp-button"
            onClick={openWhatsAppChat}
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
                alt="WhatsApp"
                className="whatsapp-icon"
            />
        </div>
    );
};

export default WhatsAppChatButton;
