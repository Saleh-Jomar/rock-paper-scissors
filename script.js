let playArray = ['Rock','Paper','Scissor']; 
let playerScore = 0;
let computerScore = 0;

let computerPlay = () => playArray[Math.floor(Math.random()*3)];

const scoreDisplay = document.querySelector('h2');
const statusDisplay = document.querySelector('h3');
scoreDisplay.textContent = `Your score: ${playerScore} vs Computer score: ${computerScore}`;
const body = document.querySelector('body');
const container = document.querySelector('.container');
const newcointainer = document.createElement('div');
newcointainer.classList.toggle('container');
const reset = document.createElement('button');
reset.textContent = 'Want To Play Again?';
const finalScore = document.createElement('h3');
const winner = document.createElement('h2');
newcointainer.append(winner,finalScore,reset);

function playRound(playerSelection,computerSelection){
    switch(true) {
        case playerSelection=='Rock' && computerSelection=='Scissor':
        case playerSelection=='Paper' && computerSelection=='Rock':
        case playerSelection=='Scissor' && computerSelection=='Paper':
            playerScore++;
            return (`You win! ${playerSelection} beats ${computerSelection}.`);
            break;
        case playerSelection==computerSelection:
            return ('Tie Game!');
            break;
        default:
            computerScore++;
            return (`You lose. ${computerSelection} beats ${playerSelection}.`);
    }
}

const buttons = document.querySelectorAll('.player-input');
buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        playerSelection = button.value
        game();
    });
})
function game(){
    computerSelection = computerPlay();
    statusDisplay.textContent=playRound(playerSelection,computerSelection);
    scoreDisplay.textContent = `Your score: ${playerScore} vs Computer score: ${computerScore}`;
    gameEnd();
}
function winnerDisplay(){
    switch(true){
        case playerScore>computerScore:
            winner.textContent='You win! Congratulations!';
            break;
        case computerScore>playerScore:
            winner.textContent='Computer wins. Better luck next time!';
            break;
    }
    finalScore.textContent = `Final score: ${playerScore}-${computerScore}`;
}
function gameEnd (){
    if (playerScore==5||computerScore==5){
        body.removeChild(container);
        winnerDisplay();
        body.appendChild(newcointainer);       
    }
}
reset.onclick = () => {
    playerScore=0;
    computerScore=0;
    body.removeChild(newcointainer);
    body.appendChild(container);
    scoreDisplay.textContent = `Your score: ${playerScore} vs Computer score: ${computerScore}`;
    statusDisplay.textContent='';   
}
