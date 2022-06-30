let user_score = 0;
let comp_score = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userScore = document.getElementById("userscore");
const compScore = document.getElementById("compscore");
const result = document.querySelector(".result");



function game(userChoice){
    let compChoice = Math.random();;
    let comp_Choice;

    if(compChoice<=0.33){
        comp_Choice = "Rock";
    }
    else if(compChoice>0.66){
        comp_Choice = "Scissors";
    }
    else{
        comp_Choice = "Paper";
    } 
    if ((userChoice === "Paper" && comp_Choice === "Rock") || (userChoice === "Rock" && comp_Choice === "Scissors") || (userChoice === "Scissors" && comp_Choice === "Paper")){
        user_score++;
        userScore.innerHTML = user_score;
        result.innerHTML = userChoice + " beats " + comp_Choice + ". You WIN!!"
    }
    else if ((userChoice === "Rock" && comp_Choice === "Rock") || (userChoice === "Scissors" && comp_Choice === "Scissors") || (userChoice === "Paper" && comp_Choice === "Paper")){
        result.innerHTML = "It's a DRAW!!"
    }
    else{
        comp_score++;
        compScore.innerHTML = comp_score;
        result.innerHTML = comp_Choice + " beats " + userChoice + ". You LOSE!!"
    }
}

rock.addEventListener('click', function(){
    game("Rock");
});
paper.addEventListener('click', function(){
    game("Paper");
});
scissors.addEventListener('click', function(){
    game("Scissors");
});