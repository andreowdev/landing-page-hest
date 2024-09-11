import React, { useState } from 'react';
import whatsapp from '../../public/img/whatsapp.svg';

export default function PopUp() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="fixed bottom-0 left-0 p-4">
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg"
                onClick={() => setShowPopup(!showPopup)}
            >
                Contato
            </button>
            {showPopup && (
                <div className="fixed bottom-16 left-4 bg-white p-4 rounded-lg shadow-lg flex items-center mb-2">
                    <img src={whatsapp} alt="WhatsApp Icon" className="w-10 h-12 mr-2" />
                    <p><a href="https://api.whatsapp.com/send/?phone=%2B559285650879&text&type=phone_number&app_absent=0" 
                    className="text-blue-500 font-semibold hover:text-black">
                    Entre em contato via WhatsApp</a></p>
                </div>
            )}
        </div>
    );
}
