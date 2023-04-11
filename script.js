var quizdata = [
  {
    question: "Which Framework is related to JS?",
    a: ".net",
    b: "flask",
    c: "react",
    d: "django",
    correct: "c"
  },
  {
    question: "Which is not a programming language?",
    a: "HTML",
    b: "Python",
    c: "Java",
    d: "JS",
    correct: "a"
  },
  {
    question: "Which is not a framework?",
    a: "react",
    b: "tailwind",
    c: "js",
    d: "angular",
    correct: "c"
  },
  {
    question: "css stands for?",
    a: "Cascading style sheets",
    b: "Cascading style server",
    c: "Cascading system sheets",
    d: "Cascading system server",
    correct: "a"
  },
];

var quiz=document.getElementById('quizdiv')
var ans=document.querySelectorAll('.ans')
var que=document.getElementById('question')
var option_a=document.getElementById('a_value')
var option_b=document.getElementById('b_value')
var option_c=document.getElementById('c_value')
var option_d=document.getElementById('d_value')
var submitbtn=document.getElementById('submit')

var current_question=0
var quiz_score=0


loadQuiz()

function loadQuiz(){
    deselect();
    question.innerHTML=quizdata[current_question].question
    option_a.innerText=quizdata[current_question].a
    option_b.innerText=quizdata[current_question].b
    option_c.innerText=quizdata[current_question].c
    option_d.innerText=quizdata[current_question].d

}

function deselect(){
    ans.forEach(ans=>ans.checked=false)
}

submitbtn.addEventListener('click',()=>{
    var selectedoption;

    ans.forEach(ans=>{
        if(ans.checked)
        {
            selectedoption=ans.id
        }
    })
    if(selectedoption == quizdata[current_question].correct)
    {
        quiz_score=quiz_score+1;
    }
    current_question+=1;

    if(current_question==quizdata.length){
        document.getElementById('quizdiv').innerHTML=`<h1>You have answered ${quiz_score} out of ${quizdata.length}</h1>`
    }else{

    }
    loadQuiz();


})