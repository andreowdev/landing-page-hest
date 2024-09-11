import React from "react";
import Hest from '../../public/img/hest.jpg';
import OutroServico from '../../public/img/em-breve.png';
import MaisUmServico from '../../public/img/em-breve.png';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Services() {

    const services = [
        {
            src: Hest,
            alt: "Aplicativo HEST",
            style: "w-full h-54 object-cover rounded-t-lg",
            title: "HEST Gerenciador",
            description: "Aumente a produtividade e REDUZA os seus PROBLEMAS",
            features: [
                "Aplicativo", 
                "Sistema Desktop", 
                "Controle de pedidos", 
                "Gestão de Funcionários"
            ],
            icon: faCheck,
            href: "https://api.whatsapp.com/send/?phone=%2B559285650879&text&type=phone_number&app_absent=0",
            buttonLabel: "CONTRATAR AGORA"
        },
        {
            src: OutroServico,
            alt: "Outro Serviço",
            style: "w-full h-54 object-cover rounded-t-lg",
            title: "Em Breve",
            description: "",
            features: [],
            buttonLabel: "Em Breve"
        },
        {
            src: MaisUmServico,
            alt: "Mais um Serviço",
            style: "w-full h-54 object-cover rounded-t-lg",
            title: "Em Breve",
            description: "",
            features: [],
            buttonLabel: "Em Breve"
        }
    ];

    return (
        <div className="text-center bg-slate-200 py-12 text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-black text-4xl font-bold mb-3" id="serviços">Nossos serviços</h1>
                <hr className="border-b-4 border-black w-44 mx-auto mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((map, index) => (
                        <div key={index} className="max-w-md mx-auto bg-[#3282B8] rounded-lg overflow-hidden shadow-lg h-full"> 
                            <img src={map.src} alt={map.alt} className={map.style} />    
                            
                            <div className="p-6 h-full">
                                <h2>{map.title}</h2>
                                <p>{map.description}</p>
                                {map.features.length > 0 && (
                                    <ul className="list-disc flex-1">
                                        {map.features.map((feature, i) => (
                                            <li key={i} className="mb-2 flex items-center">
                                            <FontAwesomeIcon icon={map.icon} className="mr-2" />
                                            {feature}
                                        </li>
                                        ))}
                                    </ul>
                                )}
                                <div className="flex justify-center mt-auto"> 
                                    {map.href ? (
                                        <a href={map.href} className="bg-[#71C9CE] hover:bg-[#5aabb8]  font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mt-16">
                                            {map.buttonLabel}
                                        </a>
                                    ) : (
                                        <button className="bg-[#71C9CE] hover:bg-[#5aabb8] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                                            {map.buttonLabel}
                                        </button>
                                    )}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
