const questionListArray = [
  {
    que: "Which of the following is markup language ?",
    ans: ["Html", "Css", "Javascript", "PHP"],

    correct: 0,
  },
  {
    que: "What year was javascript launced ?",
    ans: ["1999", "1995", "1954", "None of above"],

    correct: 1,
  },

  {
    que: "what does css stands for ?",
    ans: [
      "Hypertext markup language",
      "Cascading style sheet",
      "jason oject notation",
      "Helicopters Terminals Motarboats Lambarginia",
    ],
    correct: 1,
  },
];

let questionIndex = 0;
let totalQuestions = questionListArray.length;
let rightAnswers = 0,
  wrongAnswers = 0;
const questionBoxElement = document.getElementById("quesBox");
const answerOptionsInputElements = document.querySelectorAll(".answerOptions");

const loadQuestion = () => {
  // total question  3
  // all question index, 0, 1, 2

  if (questionIndex == totalQuestions) {
    return endQuiz();
  }

  resetAnswerOptions();

  const currenteQuestionData = questionListArray[questionIndex]; // load question at index
  // console.log(data);
  questionBoxElement.innerText = ` ${questionIndex + 1} ) ${
    currenteQuestionData.que
  }`;

  // load all answers of current question
  currenteQuestionData.ans.forEach((item, index) => {
    answerOptionsInputElements[index].nextElementSibling.innerText = item;
  });
};

const submitQuiz = () => {
  const currentQuestionData = questionListArray[questionIndex];
  const userAnswer = getUserAnswer(); // "1"   => parseInt("1") = 1
  // currentQuestionData.correct = 1

  //   console.log(userAnswer, currentQuestionData.correct);

  if (parseInt(userAnswer) === currentQuestionData.correct) {
    rightAnswers++;
  } else {
    wrongAnswers++;
  }

  questionIndex++; // 0 => 1

  loadQuestion(); // load question at index 1

  return;
};

const getUserAnswer = () => {
  let answer;
  const answerOptionsArray = [...answerOptionsInputElements];

  answerOptionsArray.every(function (input) {
    if (input.checked) {
      answer = input.value;
      return false;
      // break the loop when a checked answer element is found
    }

    return true; // run the next iteration of loop
  });

  return answer; // 1
};

const resetAnswerOptions = () => {
  answerOptionsInputElements.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
    <div style="text-align:center;">
        <h3>Thank you for Playing quiz</h3>
        <h2> You answered ${rightAnswers} out of ${totalQuestions} questions correctly.</h2>
        <!-- You answered 2 out of 3 questoins correctly. -->
    </div>`;
};

loadQuestion();
