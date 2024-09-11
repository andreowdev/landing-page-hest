import React from 'react';
import team1 from '../../public/img/Andreo Henrique.png';
import team2 from '../../public/img/Leonardo Ribeiro.jpg';

export default function Team() {
  
  const teamMembers = [
    {
      name: "Andreo Henrique",
      role: "CTO e Desenvolvedor",
      image: team1,
    },
    {
      name: "Leonardo Ribeiro",
      role: "CTO e Desenvolvedor",
      image: team2,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className='mt-10 text-center text-black text-4xl font-bold mb-4'>
          Conheça a equipe
        </h1>
        <hr className="border-b-4 border-black w-44 mx-auto mb-8" />
        <p className='text-center text-black w-3/4'>
          Transformando ideias em soluções empresariais: Inovação que nasceu na faculdade, agora impulsiona o seu sucesso!
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center my-5 text-black">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center justify-center mx-2 mb-5 md:mb-0">
            <img src={member.image} alt={member.name} className="rounded" />
            <h3 className='mt-4 font-bold text-lg'>{member.name}</h3>
            <p className='my-4 text-black'>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
