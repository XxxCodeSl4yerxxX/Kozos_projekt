const quizData = [
    {
      question: "kerdes?",
      options: ["valasz1", "valasz2", "valasz3", "valasz4"],
      answer: "valasz1"
    },
    {
      question: "kerdes?",
      options: ["valasz1", "valasz2", "valasz3", "valasz4"],
      answer: "valasz1"
    },
    {
	  question: "kerdes?",
      options: ["valasz1", "valasz2", "valasz3", "valasz4"],
      answer: "valasz1"
	},
	{
	  question: "kerdes?",
      options: ["valasz1", "valasz2", "valasz3", "valasz4"],
      answer: "valasz1"
	},
	{
	  question: "kerdes?",
      options: ["valasz1", "valasz2", "valasz3", "valasz4"],
      answer: "valasz1"
	},
	{
	  question: "kerdes?",
      options: ["valasz1", "valasz2", "valasz3", "valasz4"],
      answer: "valasz1"
	},
	{
	  question: "kerdes?",
      options: ["valasz1", "valasz2", "valasz3", "valasz4"],
      answer: "valasz1"
	},
	{
	  question: "kerdes?",
      options: ["valasz1", "valasz2", "valasz3", "valasz4"],
      answer: "valasz1"
	},
	{
	  question: "kerdes?",
      options: ["valasz1", "valasz2", "valasz3", "valasz4"],
      answer: "valasz1"
	}
	
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  const nextButton = document.getElementById("nextQuestion");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
    optionsElement.innerHTML="";
	
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  

  
  
  function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;
  selectedButton.style.backgroundColor = "#8f8d8d";

  if (selectedButton.innerText === answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    // Show next question after a delay (e.g., 1000 milliseconds = 1 second)
    setTimeout(() => {
      showQuestion();
    }, 1000);
  } else {
    showResult();
  }
}



  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
	  <p> <a href="file:///Z:/kozos_projekt/kinezet.html"> Vissza a menube </a> </p>
    `;
  }
  
  showQuestion();