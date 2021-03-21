var readlineSync = require('readline-sync')

var userName = readlineSync.question("what's ur name? ");

console.log("Welcome " + userName + " Do you knw Aman? ");

var score= 0;

//play function

function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("correct")
    score = score+1;
  }
  else{
    console.log("wrong")

  }
  console.log("current score ",score);
  console.log("---------") 

}
//array of objects
var questions =  [{
  question: "Where I live? ",
  answer: "mumbai"
},{
  question: "my favorite place to be at? ",
  answer:"navsari "
}];

//loop

for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)

}

console.log("Yay!!! you scored", score);


//data score

var highscore =[ {
  name: "Aman",
  score:10
},
{
  name: "Amanda",
  score:9
}]

//need a forloop to run this...
//then check with if which one is bigger
