let rock = document.getElementById('idRock');
let paper = document.getElementById('idPaper');
let scissor = document.getElementById('idScissor');
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let currentRoundResult = document.getElementById('currentRoundResult');
let remainingCounts = document.getElementById('remainingPlayerTurn');
let finalResult = document.getElementById('finalResult');


let cEvent = document.querySelectorAll('input')


///////playerSelection
cEvent.forEach(cEvent => {
    cEvent.addEventListener('click',function(){
        gameOn(cEvent.value);
    })
})




let computerNumber = (min, max) => {
    randomNumber = (Math.floor(Math.random() * (max - min))) + min
    return randomNumber;
}


let computerSelect;
function computerEvent() {
    switch (computerNumber(1, 4)) {
        case 1: computerSelect = 'Rock';
            // console.log(x);
            console.log(computerSelect);
            break;
        case 2: computerSelect = 'Paper';
            // console.log(x);
            console.log(computerSelect);
            break;
        case 3: computerSelect = 'Scissor';
            // console.log(x);
            console.log(computerSelect);
            break;
    }
    return computerSelect;
}



let restartBtn;
let num = 1;
let playerCount;
let computerCount;
let turns = 5;
let appendRestartButton =  false;

/////mainGameFunction/////
function gameOn(parameter) {
    let computerPlay = computerEvent()
    console.log('playerSelection: ',parameter);
    console.log('computerSelection: ',computerPlay);
    let currentRoundResultString;


    if (num == 1) {
        playerCount = 0;
        computerCount = 0;
    }

    if (num >= 1 && num <=5) {
        if ((parameter === 'Rock' && computerPlay === 'Rock') || (parameter === 'Paper' && computerPlay === 'Paper') || (parameter === 'Scissor' && computerPlay === 'Scissor')) {
            playerCount += 1;
            computerCount += 1;
            currentRoundResult.innerHTML = `Tie as both have chosen same items. <strong>Player :</strong> ${parameter} and <strong>Computer :</strong> ${computerPlay}`;               
        }
        else if ((parameter === 'Rock' && computerPlay === 'Paper') || (parameter === 'Scissor' && computerPlay === 'Rock') || (parameter === 'Paper' && computerPlay === 'Scissor')) {
            playerCount += 0;
            computerCount += 1;
            currentRoundResult.innerHTML = `Computer wins the current round. <strong>Computer: </strong> ${computerPlay} and <strong>Player: </strong> ${parameter}`;

        }
        else if ((parameter === 'Paper' && computerPlay === 'Rock') || (parameter === 'Rock' && computerPlay === 'Scissor') || (parameter === 'Scissor' && computerPlay === 'Paper')) {
            playerCount += 1;
            computerCount += 0;
            currentRoundResult.innerHTML = `Player wins the current round. <strong>Player: </strong> ${parameter} and <strong>Computer: </strong> ${computerPlay}`;
            
        }
        if (num == 5){
            turns--;
            playerScore.innerText = playerCount;
            computerScore.innerText = computerCount;
            remainingCounts.innerText = turns;
            if (playerCount>computerCount){
                finalResult.innerHTML = '<strong>You won the match.</strong>';
                finalResult.style.color = 'green';
            }
            else if (playerCount<computerCount) {
                finalResult.innerHTML = '<strong>Sorry, Computer won the match.</strong>';
                finalResult.style.color = 'red';
            }
            else if (playerCount == computerCount){
                finalResult.innerHTML = '<strong>Tie, as both has scored same score.</strong>';
                finalResult.style.color = 'green';
            }
            console.log('last round')
            cEvent.forEach(key =>{
                key.setAttribute("disabled", true);
                key.style.backgroundColor = 'red';
            })
            restartBtn =  document.createElement('h3');
            // restartBtn.setAttribute("type","button");
            restartBtn.id = 'restartButton';
            restartBtn.className = 'gameButtonRestart';
            // restartBtn.setAttribute("value",'Restart');
            appendRestartButton = document.querySelector('.restart').appendChild(restartBtn)
            restartBtn.textContent = 'Please Refresh the Page to Play again.';
            restartBtn.style.color = 'Red';
            console.log('Inside Function :  ',appendRestartButton);

            return appendRestartButton;
        } 
    }

    turns--;
    num++;
    playerScore.innerText = playerCount;
    computerScore.innerText = computerCount;
    remainingCounts.innerText = turns;
}

// console.log('element : ', document.querySelector('#restartButton'));
// document.querySelector('.gameButtonRestart').addEventListener('click', restartGame);


// Restart Game Function
function restartGame() {
    num = 1;
    cEvent.forEach(key =>{
        key.disabled = false;
        cEvent.style.backgroundColor = rgb(77, 87, 231);
    });
    computerScore.textContent = "";
    playerScore.textContent = "";
    currentRoundResult.textContent = "";
    remainingPlayerTurn.textContent = "";
    appendRestartButton.parentNode.removeChild(restartBtn);
    computerNumber(1, 4)  
}