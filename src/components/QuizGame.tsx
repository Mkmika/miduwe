// QuizGame.tsx
import React, { useState } from "react";
import Bienvenue from "./Bienvenue";
import GameQuestion from "./GameQuestion";
import gameQuestion from "@/interfaces/gameQuestion";

import questionsData from "@/data/questions";
import GameOver from "./GameOver";

const QuizGame: React.FC = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const startGame = () => {
    setGameStarted(true);
  };

  const restartGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setCurrentQuestionIndex(0);
  };
  

  const handleAnswer = (answerId: number) => {
    const currentQuestion: gameQuestion = questionsData[currentQuestionIndex];
    if (answerId === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("over");
      setGameOver(true);
    }
  };

  const goBack = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : 0
    );
  }

  return (
    <div>
      {!gameStarted ? (
        <Bienvenue startGame={startGame} />
      ) : gameOver ? (
        <GameOver
          score={score}
          restartGame={restartGame}
          totalQuestion={questionsData.length}
        />
      ) : (
        <GameQuestion
          question={questionsData[currentQuestionIndex]}
          score={score}
          handleAnswer={handleAnswer}
          goBack={goBack}
        />
      )}
    </div>
  );
};

export default QuizGame;
