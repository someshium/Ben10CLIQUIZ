var readLineSync= require("readline-sync");
var chalk= require("chalk");

console.log(chalk.green.bold("It's Hero Time !!!!!!!!!"));
console.log("\n");

var userName = readLineSync.question(chalk.bold("Tell ur name Saviour! :"));
console.log("\n");
console.log(chalk.underline.bold("Hello " + userName + ", Welcome to the Quiz of the Ben 10, Ben 10 Alien force & Ben 10 Ultimate Aliens."));
console.log("\n");


console.log(chalk.bold("I Wish u All the BEST, let's BEGIN! \n"));

var score=0;

function play(q,a,i)
{


console.log(chalk.underline.bold.cyan( i +" "+ q));
var userAnswer= readLineSync.question("Answer:");
userAnswer= userAnswer.split(" ").join("");  
if(userAnswer.toLowerCase()=== a.toLowerCase()){
score++
console.log(chalk.green("Awesome :-) "));
}
else
{
  console.log(chalk.red("Nope!"));
}



}

var data=[
  {
    q: "Strongest Alien of Ben?",
    a: "alienx"
  },
  {
    q: "Biggest Alien of Ben till date?",
    a: "WayBig"
  },
  {
    q: "brainliest alien of ben?",
    a: "graymatter"
  },
  {
    q: "what type of Species does the Kevin Belong?",
    a: "Osmosian"
  },
  {
    q: "What is ultimate Jail for Aliens in Ben 10?",
    a: "nullvoid"
  },
  {
    q: "Name of Time traveller in Ben 10?",
    a: "paradox"
  },
]


for(var i=0;i<data.length;i++)
{
  play(data[i].q, data[i].a,i+1);
  console.log("\n") ;
}
score=score*10;
console.log(chalk.bold.cyan("Your Score is : "+ score));

var highscores= [
  {
    name: "somesh",
    score: 40
  },
  {
    name: "Naren",
    score: 30
  },
  {
    name: "Dayanne",
    score: 40
  }
]
highscores.push({ name: userName, score: score});


highscores.sort(function(a,b){
  ascore= a.score;
  bscore= b.score;
  if(ascore<bscore)
  return 1;
  else
  return -1;
});


console.log("The High Scores");
for(var x= 0; x<highscores.length;x++){
  console.log( (x+1)+". "+highscores[x].name + " "+ highscores[x].score);
}


