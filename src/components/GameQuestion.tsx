import React, { useState } from "react";
import { naluka } from "@/fonts";
import gameQuestion from "@/interfaces/gameQuestion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400"] });

interface GameQuestionProps {
  question: gameQuestion;
  score: number;
  handleAnswer: (answerId: number) => void;
  goBack: () => void
}

const GameQuestion: React.FC<GameQuestionProps> = ({
  question,
  score,
  handleAnswer,
  goBack
}) => {
  const [clickedAnswer, setClickedAnswer] = useState(-1)

  const handleAnswerClick = (answerId: number) => {
    handleAnswer(answerId);
    setClickedAnswer(-1)
  };
  return (
    <div className="px-[30px] py-[50px] bg-default flex flex-col gap-10 h-screen">
      <p className={`text-[#3F0408] text-[50px] ${naluka.className}`}>
        {question.question}
      </p>

      {question.choices.map((choice, index) => (
        <button
          key={index}
          className={`p-8 shadow-xl rounded-xl text-white text-xl font-light w-full ${montserrat.className} ${clickedAnswer === choice.id ? 'bg-[#3F0408]' : 'bg-[#BE894A]'}`}
          onClick={() => {
            setClickedAnswer(choice.id)
          }}
        >
          {choice.question}
        </button>
      ))}

      <div className="grid grid-cols-2 gap-4">
        <button className="bg-[#3F0408] flex justify-center items-center rounded-full px-[60px] py-5 text-[#BE894A] text-xl" onClick={goBack}>
          Précédent
        </button>
        <button className="bg-[#3F0408] flex justify-center items-center rounded-full px-[60px] py-5 text-[#BE894A] text-xl" onClick={() => handleAnswerClick(clickedAnswer)}>
          Suivant
        </button>
      </div>
    </div>
  );
};

export default GameQuestion;
