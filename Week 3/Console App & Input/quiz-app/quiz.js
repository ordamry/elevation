const prompt = require('prompt-sync')();

const questions = [
    {question: "what year is it?", answer: "2025"},
    {question: "what is the capital of France", answer: "Paris"},
    {question: "solve the exercise: 5 + 7 = ?", answer: "12"}
]

let score = 0 ;

questions.forEach(q => {
    const userAnswer = prompt(q.question + "")
    if(userAnswer.trim().toLowerCase() === q.answer.toLowerCase()){
        score++ ;
    }
})

console.log(`Final score: ${score}/${questions.length} correct!`)
