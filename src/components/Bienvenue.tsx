// Bienvenue.tsx
import React from 'react';
import { naluka } from '@/fonts';

interface BienvenueProp {
  startGame: () => void;
}

const Bienvenue: React.FC<BienvenueProp> = ({ startGame }) => {
  return (
    <div className="px-[30px] py-[50px] bg-default flex flex-col justify-center items-center gap-10 h-screen">
      <p className={`text-[#3F0408] text-[50px] ${naluka.className}`}>Bienvenue</p>
      <div className="font-medium text-white text-[20px] text-center flex flex-col gap-2">
        <p>
          Ce petit jeu à pour but de mesurer votre connaissance face au sujet de la valorisation des
          danses traditionnelles Béninoises. Les 5 questions qui vont suivre sont toutes issues de
          notre jeu de cartes présent dans la box de MI DU WE.
        </p>
        <p> Répondez correctement à chacune d'entre elles afin d'obtenir une récompense ! </p>
        <p className="font-bold">BONNE CHANCE </p>
      </div>
      <div>
        <button
          className="bg-[#3F0408] rounded-full px-[60px] py-5 text-[#BE894A] text-xl"
          onClick={startGame}
        >
          Jouer
        </button>
      </div>
    </div>
  );
};

export default Bienvenue;