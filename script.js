let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");


//function for computer choice
const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
   const randIdx = Math.floor(Math.random()* 3);
   return options[randIdx];
};

// Function  for Condition

// First draw Condition

const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "game was draw. play again";
    msg.style.backgroundColor = "#081b31";
}

//  Function for winner
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin) {
      for(let userScore=0; userScore<userChoice;userScore++){
        userScore++;
      }
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        for(let compScore=0; compScore<userChoice;compScore++){
           compScore++;}
        msg.innerText = `you lose!  ${compChoice} beats your ${userChoice}`;     
        msg.style.backgroundColor = "red";
    }
    };


 const playGame = (userChoice)=> {
    console.log("user choice =", userChoice);
   
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);
    
    //Drow Game
    if(userChoice === compChoice) {
      drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userChoice = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

 };


choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
            playGame(userChoice)
    });
});