const num1 = Math.ceil( Math.random()*10)
const num2 = Math.ceil( Math.random()*10)
// console.log(num1)

const questionEl = document.getElementById("question");

const formEl = document.getElementById("form");

const inputEl = document.getElementById("input");

const scoreEl = document.getElementById("score");

let score=JSON.parse(localStorage.getItem("score"));

if(!score) {
    score =0}

questionEl.innerText=`What is ${num1} multiply by ${num2} ?`;

scoreEl.innerHTML=`Score: ${score}`

const correctAns=num1*num2;

formEl.addEventListener("submit", () => {
const userAns= +inputEl.value;
if(userAns==correctAns){
score++;
   updateLocalStorage();
}else{
    score--;
    updateLocalStorage();
    
}
})

console.log(questionEl)

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}