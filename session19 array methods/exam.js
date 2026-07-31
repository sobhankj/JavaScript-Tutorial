const questions = [
    {id: 1, question: "What is the capital of France?", answer: "Paris" },
    {id: 2, question: "What is the capital of Germany?", answer: "Berlin" },
    {id: 3, question: "What is the capital of Italy?", answer: "Rome" },
    {id: 4, question: "What is the capital of Spain?", answer: "Madrid" },
    {id: 5, question: "What is the capital of Portugal?", answer: "Lisbon" },
]

let score = 0;

questions.forEach(question => {
    let userAnswer = prompt(question.question);
    if (userAnswer.toLowerCase() === question.answer.toLowerCase()) {
        score++;
    }
});

alert(`your score is ${score}`);