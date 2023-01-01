const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
      question: 'What is 2 + 2?',
      choice1: '4',
      choice2: '2',
      choice3: '1',
      choice4: '22',
      answer: 1    
  },
  {
      question: "What is Teddy's favorite toy?",
      choice1: 'rope',
      choice2: 'tenny ball',
      choice3: 'longhorn',
      choice4: 'hedgehog',
      answer: 3     
  },
  {
      question: "Will I ever get my Amazon gift card from DHI?",
      choice1: 'maybe',
      choice2: 'probably not',
      choice3: 'yes',
      choice4: 'noh hue',
      answer: 4     
  }
];


  // constants
  const CORRECT_BONUS = 10;
  const MAX_QUESTIONS = 3;

    startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [... questions]
    console.log(availableQuestions)
    getNewQuestion()
  }

  getNewQuestion = () => {

    if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS ){
      return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
      const number = choice.dataset["number"];
      choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
  };

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];
    console.log(selectedAnswer);
    getNewQuestion();
  });
});

   startGame();

// function startGame() {
//     var sec = 60;
//     function startTimer(){
//         console.log('timer started')
//         var timer = setInterval(function(){
//             sec--;
//             document.getElementById('timer').innerHTML='00:'+sec;
//             if (sec <= 0) {
//                 clearInterval(timer);
//                 alert("Time is up!")
//             }
//         }, 1000);
//     }
//     startTimer();
