// QuizGame.tsx
import React, { useState } from 'react';
import Bienvenue from './Bienvenue';
import GameQuestion from './GameQuestion';
import gameQuestion from '@/interfaces/gameQuestion';

// Import your questions data
import questionsData from '@/data/questions';

const QuizGame: React.FC = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const startGame = () => {
    setGameStarted(true);
  };

  const handleAnswer = (answerId: number) => {
    const currentQuestion: gameQuestion = questionsData[currentQuestionIndex];
    if (answerId === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Game over, handle the final score
      console.log('Game over! Your final score is:', score);
    }
  };

  return (
    <div>
      {!gameStarted ? (
        <Bienvenue startGame={startGame} />
      ) : (
        <GameQuestion
          question={questionsData[currentQuestionIndex]}
          score={score}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default QuizGame;