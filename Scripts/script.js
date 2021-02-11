let playArray = ['Rock','Paper','Scissor']; 
let playerScore = 0;
let computerScore = 0;

let computerPlay = () => playArray[Math.floor(Math.random()*3)];

const scoreDisplayPlayer = document.querySelector('#playerScore');
const scoreDisplayComputer = document.querySelector('#computerScore');
const statusDisplay = document.querySelector('#statusDisplay');
scoreDisplayPlayer.textContent = playerScore;
scoreDisplayComputer.textContent = computerScore;
const body = document.querySelector('body');
const container = document.querySelector('.container');
const newcontainer = document.createElement('div');
newcontainer.classList.toggle('new-container');
const reset = document.createElement('button');
reset.textContent = 'Play Again?';
const finalScore = document.createElement('h3');
const winner = document.createElement('h2');
newcontainer.append(winner,finalScore,reset);

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
console.log(buttons)
buttons.forEach(div => {
    div.addEventListener('click', ()=>{
        playerSelection = div.id
        game();
    });
})
function game(){
    computerSelection = computerPlay();
    statusDisplay.textContent=playRound(playerSelection,computerSelection);
    scoreDisplayPlayer.textContent = playerScore;
    scoreDisplayComputer.textContent = computerScore;
    if (playerScore==5||computerScore==5){
        body.removeChild(container);
        winnerDisplay();
        body.appendChild(newcontainer);       
    }
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
reset.onclick = () => {
    playerScore=0;
    computerScore=0;
    body.removeChild(newcontainer);
    body.appendChild(container);
    scoreDisplayPlayer.textContent = playerScore;
scoreDisplayComputer.textContent = computerScore;
    statusDisplay.textContent='';   
}