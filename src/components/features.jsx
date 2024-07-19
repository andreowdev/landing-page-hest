import React from 'react';
import { faPhoneVolume, faFlag, faGear, faShuffle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Features() {
  return (
    <div className="text-center" id=''>
      <h1 className="text-black text-4xl font-bold mt-24 mb-4 ">Características</h1>
      <hr className="border-b-4 border-black w-36 mx-auto mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
        {/* Primeira linha de ícones */}
        <FeatureItem icon={faPhoneVolume} color="#1B262C" title="Suporte e Consultoria Especializados">
          Desenvolve soluções personalizadas e oferece suporte técnico especializado.
        </FeatureItem>
        
        <FeatureItem icon={faFlag} color="#1B262C" title="Análise e Relatórios">
          Fornece análise de dados e geração de relatórios para melhor tomada de decisão.
        </FeatureItem>

        {/* Segunda linha de ícones */}
        <FeatureItem icon={faGear} color="#1B262C" title="Ênfase na Eficiência Operacional">
          Automatiza processos e melhora a eficiência operacional dos clientes.
        </FeatureItem>

        <FeatureItem icon={faShuffle} color="#1B262C" title="Flexibilidade e Escalabilidade">
          Oferece soluções escaláveis e flexíveis para se adaptar ao crescimento empresarial.
        </FeatureItem>
      </div>
    </div>
  );
}

function FeatureItem({ icon, color, title, children }) {
  return (
    <div className="mx-4 rounded-lg p-4 bg-[#3282B8]">
      <FontAwesomeIcon icon={icon} size="2x" style={{ color }} className="m-auto p-3 bg-white rounded-full" />
      <h1 className='text-white text-xl mt-4 text-center'>{title}</h1>
      <p className='text-white text-center mt-4 text-sm'>{children}</p>
    </div>
  );
}
