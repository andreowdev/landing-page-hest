import React from "react";
import Hest from '../../public/img/hest.jpg';
import OutroServico from '../../public/img/em-breve.png';
import MaisUmServico from '../../public/img/em-breve.png';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Services() {
    return (
        <div className="text-center bg-slate-200 py-12 ">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-black text-4xl font-bold mb-3" id="serviços">Nossos serviços</h1>
                <hr className="border-b-4 border-black w-44 mx-auto mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="max-w-md mx-auto bg-[#3282B8] rounded-lg overflow-hidden shadow-lg h-full">
                        <img 
                            src={Hest} 
                            alt="Aplicativo HEST" 
                            className="w-full h-54 object-cover rounded-t-lg"
                        />
                        <div className="p-6 h-full">
                            <h2 className="text-white text-4xl font-bold mb-2">H e s T Gerenciador</h2>
                            <p className="text-white text-sm mb-3">
                                Aumente a produtividade e <strong>REDUZA</strong> os seus <strong>PROBLEMAS</strong>
                            </p>
                            <ul className="list-disc flex-1">
                                <li className="mb-2 flex items-center text-white">
                                    <FontAwesomeIcon icon={faCheck} className="mr-2 text-white" />
                                    Aplicativo
                                </li>
                                <li className="mb-2 flex items-center text-white">
                                    <FontAwesomeIcon icon={faCheck} className="mr-2 text-white" />
                                    Sistema Desktop
                                </li>
                                <li className="mb-2 flex items-center text-white">
                                    <FontAwesomeIcon icon={faCheck} className="mr-2 text-white" />
                                    Controle de pedidos
                                    </li>
                                <li className="mb-2 flex items-center text-white">
                                    <FontAwesomeIcon icon={faCheck} className="mr-2 text-white" />
                                    Gestão de Funcionários 
                                </li>
                            </ul>
                            <div className="flex justify-center mt-auto">
                                <ul>
                                    <li
                                    className="bg-[#71C9CE] hover:bg-[#5aabb8]
                                    text-white font-bold py-2 px-4 rounded-full focus:outline-none 
                                    focus:shadow-outline mt-16" >
                                        <a href="https://api.whatsapp.com/send/?phone=%2B559285650879&text&type=phone_number&app_absent=0">CONTRATAR AGORA</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="max-w-md mx-auto bg-[#3282B8] rounded-lg overflow-hidden shadow-lg h-full">
                        <img 
                            src={OutroServico} 
                            alt="Outro Serviço" 
                            className="w-full h-54 object-cover rounded-t-lg"
                        />
                        <div className="p-6 h-full">
                            <h2 className="text-white text-4xl font-bold mb-2">Em Breve</h2>
                            <p className="text-white text-sm mb-3">
                                Em Breve
                            </p>
                            <div className="flex justify-center mt-auto">
                                <button className="bg-[#71C9CE] hover:bg-[#5aabb8] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                                    Em Breve
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Card 3 */}
                    <div className="max-w-md mx-auto bg-[#3282B8] rounded-lg overflow-hidden shadow-lg h-full">
                        <img 
                            src={MaisUmServico} 
                            alt="Mais um Serviço" 
                            className="w-full h-54 object-cover rounded-t-lg"
                        />
                        <div className="p-6 h-full">
                            <h2 className="text-white text-4xl font-bold mb-2">Em Breve</h2>
                            <p className="text-white text-sm mb-3">
                                Em Breve
                            </p>
                            <div className="flex justify-center mt-auto">
                                <button className="bg-[#71C9CE] hover:bg-[#5aabb8] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                                    Em Breve
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
