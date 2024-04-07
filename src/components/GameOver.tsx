import React from "react";

interface GameOverProps {
  score: number;
  restartGame: () => void
  totalQuestion: number
}

const GameOver = ({ score, restartGame, totalQuestion }: GameOverProps) => {
  return (
    <div className="flex flex-col items-center justify-between bg-default text-white h-[calc(100vh-80px)] p-8">
      <div className="flex flex-col items-center gap-16">
        <h2 className="text-[50px]">{score >= (totalQuestion / 2) ? "Félicitations" : "Domage"}</h2>

        {score >= (totalQuestion / 2) ? (
          <p className="text-center text-[23px]">Vous avez marqué assez de points pour obtenir votre récompense</p>
        ) : (
          <p className="text-center text-[23px]">
            Vous n'avez pas marqué assez de points pour obtenir votre récompense
          </p>
        )}

        <p className="text-[23px]">Votre score:</p>

        <div className="bg-[#3F0408] h-[150px] w-[150px] rounded-full flex items-center justify-center">
          <p className="text-[#BE894A] text-[50px] font-bold">{score}/{totalQuestion}</p>
        </div>
      </div>

      <button className="bg-[#3F0408] flex justify-center items-center rounded-full px-[60px] py-5 text-[#BE894A] text-xl" onClick={restartGame}>
        Rejouer
      </button>
    </div>
  );
};

export default GameOver;
