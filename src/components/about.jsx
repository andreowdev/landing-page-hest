import React from "react";
import AboutImage from '../../public/img/about.png';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {
  return (
    <div id="about" className="py-17">
      <div className="container mx-auto px-4 mt-14">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Imagem */}
          <div className="w-full md:w-1/2 px-4 mb-2  md:mb-0">
            <img
              src={AboutImage}
              className="rounded-lg shadow-md mb-10 xl:ml-28 xl:mb-14  md:mb-56"
              alt="About Us"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <div className="about-text text-black">
              <h2 className="text-4xl font-bold mb-2">Sobre Nós</h2>
              <hr className="border-b-4 border-black w-24 mb-4" />
              <div>
                <p className="mb-2 text-justify " style={{ fontSize: '1em' }}>
                Fundada com raízes acadêmicas, nossa agência surge como uma força inovadora no desenvolvimento 
                de aplicações destinadas a otimizar e gerenciar modelos de negócios. 
                O espírito empreendedor que inicialmente floresceu na faculdade continua a guiar nossa jornada, 
                impulsionando-nos a transformar ideias criativas em soluções práticas e eficientes para nossos clientes. 
                Na vanguarda da tecnologia e com um compromisso inabalável com a excelência, estamos dedicados a criar 
                ferramentas que não apenas atendam, mas superem as expectativas do mercado empresarial moderno.
                </p>
              </div>
              
              <h3 className="text-lg mb-4">Porque Escolher-nos?</h3>
              <div className="flex flex-wrap -mx-4 mb-4">
                <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 ml-4">
                  <ul className="list-disc">
                    <li className="mb-2 flex items-center">
                      <FontAwesomeIcon icon={faCheck} className="mr-2 text-blue-500" />
                      Compromisso com a Qualidade e Eficiência.
                    </li>
                    <li className="mb-2 flex items-center">
                      <FontAwesomeIcon icon={faCheck} className="mr-2 text-blue-500" />
                      Parceria Estratégica.
                    </li>
                    <li className="mb-2 flex items-center">
                      <FontAwesomeIcon icon={faCheck} className="mr-2 text-blue-500" />
                      Suporte e Atendimento ao Cliente.
                    </li>
                    <li className="mb-2 flex items-center">
                      <FontAwesomeIcon icon={faCheck} className="mr-2 text-blue-500" />
                      Inovação Contínua.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
