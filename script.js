let userscore = 0 ;
let compscore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
    const randomidx =  Math.floor(Math.random() * 3);
    return options[randomidx];
};

const drawGame = () => {
    msg.innerText = "Game was draw. Play again..!"
    msg.style.backgroundColor = "#081b31";


}

let showWinner = (userWin,userchoice , compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win..! Your ${userchoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }else {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lose..! ${compChoice} beats Your ${userchoice}`
        msg.style.backgroundColor = "red";


    }
}

const playgame = (userchoice) =>{
    console.log("user choice = ",userchoice);
    // Generates a computer choice 
    let compChoice = gencompchoice();
    console.log("comp choice = ",compChoice);


    if(userchoice === compChoice){
        // draw
        drawGame();
    }else {
        let userWin = true ;
        if(userchoice === "rock"){
            // scissors , paper
            userWin = compChoice ==="paper" ? false : true ;
        } else if (userchoice === "paper"){
            // rock , scissors 
            userWin = compChoice === "scissors" ? false :  true ;
        }else {
            // rock , paper 
            userWin = compChoice === "rock" ? false : true ;
        }

        showWinner(userWin,userchoice, compChoice);
    }
}

choices.forEach((choice) =>{
     choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
     })
})