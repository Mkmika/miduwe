// gameQuestion.ts
export default interface gameQuestion {
    question: string;
    correctAnswer: number;
    choices: { id: number; question: string }[];
  }