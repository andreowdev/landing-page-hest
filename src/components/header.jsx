import React from 'react';
import image from '../../public/img/bg.png';

export default function Header() {
    return (
        <div className="relative h-screen">
            <img 
                src={image} 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover animate-slideDown mt-14" 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white" id='home'>
                <div className="text-center animate-fadeIn">
                    <h1 className="text-4xl font-bold">L.A Soft Solutions</h1>
                    <hr className="border-b-2 border-white w-64 mx-auto mb-8 mt-2 " />
                    <p className="mt-2 text-lg">Agência de Serviços de Aplicativos de Gerenciamento</p>
                </div>
            </div>
        </div>
    );
}
