import gameQuestion from "@/interfaces/gameQuestion"

const questionsData: gameQuestion[] = [
    {
        question: "1. La danse zinli provient de quelle région:",
        correctAnswer: 2,
        choices: [
            { id: 1, question: "Porto-Novo" },
            { id: 2, question: "Abomey" },
            { id: 3, question: "Savalou" }
        ]
    },
    {
        question: "2. La danse tipenti provient de quelle région:",
        correctAnswer: 3,
        choices: [
            { id: 1, question: "Porto-Novo" },
            { id: 2, question: "Abomey" },
            { id: 3, question: "Otamri" }
        ]
    },
    {
        question: "3. La danse tchinkoumin provient de quelle région:",
        correctAnswer: 3,
        choices: [
            { id: 1, question: "Porto-Novo" },
            { id: 2, question: "Abomey" },
            { id: 3, question: "Savalou" }
        ]
    },
    {
        question: "4. La danse agbadja provient de quelle région:",
        correctAnswer: 1,
        choices: [
            { id: 1, question: "Mono" },
            { id: 2, question: "Donga" },
            { id: 3, question: "Littoral" }
        ]
    }
]

export default questionsData