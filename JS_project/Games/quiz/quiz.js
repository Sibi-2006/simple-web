const questions=[
    {
        question:"Which planet is known as the Red Planet?",
        answer:[
            {text:"Venus",correct:false},
            {text:"Mars",correct:true},
            {text:"Jupiter",correct:false},
            {text:"Mercury",correct:false},
        ]
    },
    {
        question: "Which programming language is used to style web pages?",
        answer: [
            {text: "HTML", correct: false},
            {text: "Python", correct: false},
            {text: "CSS", correct: true},
            {text: "Java", correct: false},
    ]
},
    {
        question:"What is the largest ocean on Earth?",
        answer:[
            {text:"Atlantic Ocean",correct:false},
            {text:"Indian Ocean",correct:false},
            {text:"Arctic Ocean",correct:false},
            {text:" Pacific Ocean",correct:true},
        ]
    },
    {
    question: "What does CPU stand for?",
    answer: [
        {text: "Central Process Unit", correct: false},
        {text: "Central Processing Unit", correct: true},
        {text: "Computer Personal Unit", correct: false},
        {text: "Control Panel Unit", correct: false},
    ]
},
    
    {
        question:"Which galaxy do we live in?",
        answer:[
            {text:"Andromeda Galaxy",correct:false},
            {text:"Whirlpool Galaxy",correct:false},
            {text:"Milky Way Galaxy",correct:true},
            {text:"Sombrero Galaxy",correct:false},
        ]
    },
    {
    question: "How many bones are in the adult human body?",
    answer: [
        {text: "206", correct: true},
        {text: "201", correct: false},
        {text: "189", correct: false},
        {text: "213", correct: false},
    ]
},
    {
        question:" Which planet has the most moons?",
        answer:[
            {text:"Venus",correct:false},
            {text:"Mars",correct:false},
            {text:"Jupiter",correct:false},
            {text:" Saturn",correct:true},
        ]
    },
    {
    question: "How many legs does a spider have?",
    answer: [
        {text: "6", correct: false},
        {text: "8", correct: true},
        {text: "10", correct: false},
        {text: "12", correct: false},
    ]
},
    {
    question: "Which is the national animal of India?",
    answer: [
        {text: "Lion", correct: false},
        {text: "Tiger", correct: true},
        {text: "Elephant", correct: false},
        {text: "Leopard", correct: false},
    ]
},
    {
    question: "Who is known as the father of computers?",
    answer: [
        {text: "Alan Turing", correct: false},
        {text: "Charles Babbage", correct: true},
        {text: "Tim Berners-Lee", correct: false},
        {text: "Bill Gates", correct: false},
    ]
},
    {
        question:" What type of water is found in the sea?",
        answer:[
            {text:"Fresh water",correct:false},
            {text:"Distilled water",correct:false},
            {text:"Salt water",correct:true},
            {text:"Rain water",correct:false},
        ]
    },
    {
    question: "Who was the first Prime Minister of India?",
    answer: [
        {text: "Mahatma Gandhi", correct: false},
        {text: "Jawaharlal Nehru", correct: true},
        {text: "Dr. B.R. Ambedkar", correct: false},
        {text: "Sardar Patel", correct: false},
    ]
},
    {
    question: "What gives blood its red color?",
    answer: [
        {text: "Plasma", correct: false},
        {text: "Hemoglobin", correct: true},
        {text: "Oxygen", correct: false},
        {text: "Iron", correct: false},
    ]
},
{
    question: "Which animal is known as the King of the Jungle?",
    answer: [
        {text: "Tiger", correct: false},
        {text: "Lion", correct: true},
        {text: "Elephant", correct: false},
        {text: "Leopard", correct: false},
    ]
},
{
    question: "What is the capital of India?",
    answer: [
        {text: "Mumbai", correct: false},
        {text: "Kolkata", correct: false},
        {text: "New Delhi", correct: true},
        {text: "Chennai", correct: false},
    ]
}
];
const questionElement =document.getElementById("question");
const answerElement =document.getElementById("answer");
const nextBTN =document.getElementById("nextbtn");
let currentQuestionInd=0;
let score=0;
function startQuiz(){
    currentQuestionInd=0;
    score=0;
    nextBTN.innerHTML="Next ➡️";
    showQuestion();
}
function showQuestion(){
    resetquestion();
    let currentQuestion=questions[currentQuestionInd];
    let questionNo=currentQuestionInd+1;
    questionElement.innerHTML=questionNo+" - "+currentQuestion.question;

    currentQuestion.answer.forEach(answer=> {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectanswer)
    });
}
function resetquestion(){
    nextBTN.style.display="none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}

function selectanswer(e){
    const selectedBTN=e.target;
    const iscorrect = selectedBTN.dataset.correct==="true";
    if(iscorrect){
        selectedBTN.classList.add("correct");
        score++;
    }
    else{
        selectedBTN.classList.add("incorrect");
    }
    Array.from(answerElement.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true; 
    });
    nextBTN.style.display="block"
}
function handleNextBTN(){
    currentQuestionInd++;
    if(currentQuestionInd<questions.length){
        showQuestion();
    }else{
        showscore();
    }
}
function showscore(){
   
    resetquestion();

    let message = "";
    let emoji = "";


    if(score === questions.length){
        message = "Perfect Score! You're a genius!";
        emoji = "🏆🎉🚀";
    } else if(score >= questions.length - 1){
        message = "Great job! Almost perfect!";
        emoji = "👏😎⭐";
    } else if(score >= Math.floor(questions.length / 2)){
        message = "Not bad! You can do even better!";
        emoji = "👍😊💪";
    } else {
        message = "Keep trying! You'll get it!";
        emoji = "💡😅🔥";
    }

    questionElement.innerHTML = `
        <h2>You scored ${score} out of ${questions.length}!!</h2>
        <p>${message}</p>
        <h3>${emoji}</h3>
    `;

    nextBTN.innerHTML = "Play again 🔄";
    nextBTN.style.display = "block";
}


nextBTN.addEventListener("click",()=>{
    if(currentQuestionInd<questions.length){
        handleNextBTN();
    }else{
        startQuiz();
    }
});

startQuiz();