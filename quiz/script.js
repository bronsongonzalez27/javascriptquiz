const startButton =document.getElementById('start-btn')

const questionContainerElement=document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
// made it where so the questions are not in the same order when retrying the quiz.
let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click',startGame)

// made it where so when you click the start button, it dissapears and shows the questions instead.
function startGame(){
console.log('Started')
shuffleQuestions = questions.sort(()=>Math.random()- .5)
currentQuestionIndex=0
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
setNextQuestion()

}
function setNextQuestion(){
showQuestion(shuffleQuestions[currentQuestionIndex])


}
function showQuestion(question){
questionElement.innerText=question.question
question.answers.forEach(answer => {
    const button=document.createElement('button')
    button.innerText= answer.text
    button.classList.add('btn')
    // made it where it can tell if answer is true or false.
    if(answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    })

}
function selectAnswer(){

}
// chose a random question because I don't know what to put there.
const questions = [
{
    question: 'what is the color of the sky',
    answers: [
        {text: 'blue',correct:true},
        {text:'red', correct:false}
    ]
}
]
