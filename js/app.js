const questions =[
    {
        'que': 'Which of the following is markup language ?',
        'a': 'Html',
        'b': 'Css',
        'c': 'Javascript',
        'd': 'PHP',
        'correct': 'a',

    },
    {
        'que': 'What yea was javascript launced ?',
        'a': '1999',
        'b': '1995',
        'c': '1954',
        'd': 'None of above',
        'correct': 'b',

    },

    {
        'que': 'what does css stands for ?',
        'a': 'Hypertext markup language',
        'b': 'Cascading style sheet',
        'c': 'jason oject notation',
        'd': 'Helicopters Terminals Motarboats Lambarginia',
        'correct': 'b',

    }
]

  let index = 0;
  let total = questions.length;
  let rigth = 0,
      wrong = 0;
  const quesBox = document.getElementById("quesBox")
  const optionInput = document.querySelectorAll(".Option")
  const loadQuestion = () =>{
    if(index == total){
       return endQuiz()
    }
    reset();
    const data = questions[index]
    console.log(data);
    quesBox.innerText = ` ${index+1} ) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () =>{
    const data = questions[index]
    const ans = getAnswer()
    console.log(ans, data.correct)
    if(ans === data.correct){
        rigth++
    }else{
        wrong++
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () =>{
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            
            }
        }
)
    return answer;
}

const reset = ()=>{
    optionInput.forEach(
        (input) => {
          input.checked = false;
        }
)
}

const endQuiz = ()=>{
    document.getElementById("box").innerHTML = `
    <div style="text-align:center;">
   <h3>Thank you for Playing quiz</h3>
    <h2> ${rigth} / ${total} are correct</h2>
    </div?
    `
}

loadQuestion()