import React from "react";
import { naluka } from "@/fonts";
import gameQuestion from "@/interfaces/gameQuestion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400"] });

interface GameQuestionProps {
    question: gameQuestion;
    score: number;
    handleAnswer: (answerId: number) => void;
  }

const GameQuestion: React.FC<GameQuestionProps> = ({ question, score, handleAnswer }) => {
    const handleAnswerClick = (answerId: number) => {
        handleAnswer(answerId);
      };
  return (
    <div className="px-[30px] py-[50px] bg-default flex flex-col gap-10 h-screen">
      <p className={`text-[#3F0408] text-[50px] ${naluka.className}`}>
      {question.question}
      </p>

      {question.choices.map((choice, index) => (
        <button
          key={index}
          className={`p-8 shadow-xl rounded-xl bg-[#BE894A] text-white text-xl font-light w-full ${montserrat.className}`}
          onClick={() => handleAnswerClick(choice.id)}
        >
          {choice.question}
        </button>
      ))}

      <div className="grid grid-cols-2 gap-4">
        <button className="bg-[#3F0408] rounded-full px-[60px] py-5 text-[#BE894A] text-xl">
          Précédent
        </button>
        <button className="bg-[#3F0408] rounded-full px-[60px] py-5 text-[#BE894A] text-xl">
          Suivant
        </button>
      </div>
    </div>
  );
};

export default GameQuestion;
