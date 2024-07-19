import React from 'react';
import team1 from '../../public/img/Andreo Henrique.png';
import team2 from '../../public/img/Leonardo Ribeiro.jpg';

export default function Team() {
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
                <div className="flex flex-col items-center justify-center mx-2 mb-5 md:mb-0">
                    <img src={team1} alt="Andreo Henrique" className="rounded" />
                    <h3 className='mt-4 font-bold text-lg'>Andreo Henrique</h3>
                    <p className='my-4 text-black'>CTO e Desenvolverdor</p>
                </div>

                <div className="flex flex-col items-center justify-center mx-2">
                    <img src={team2} alt="Leonardo Ribeiro" className="rounded" />
                    <h3 className='mt-4 font-bold text-lg'>Leonardo Ribeiro</h3>
                    <p className='my-4 text-black'>CTO e Desenvolverdor</p>
                </div>
            </div>
        </div>
    );
}
