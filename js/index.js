const form = document.getElementById('form');
let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const guess = {
    max: 10,
    attemptNumber: 0,
    numberDrawn: function randomValue(){
        return Math.round(Math.random() * this.max);
    }
}

let numberDrawn = guess.numberDrawn();

function updateAttempt(attempt, value){
    attempt.innerHTML = 'Tentativas: ' + value;
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(e){
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    updateAttempt(attempt, ++guess.attemptNumber);

    if(numberDrawn == kick){
        playAgain();
        status.innerHTML = 'Parabéns, você acertou!';
        result.style.transition = '0.5s';
        result.style.background = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff';
        clear();
    }else if(numberDrawn > kick){
        status.innerHTML = 'O número é maior!';
        status.style.color = '#de4251';
        clear();
    }else if(numberDrawn < kick){
        status.innerHTML = 'O número é menor!';
        status.style.color = '#de4251';
        clear();
    }
}

function playAgain(){
    document.getElementById('btnRestart').style.visibility = 'visible';
}


function restart(){
    document.location.reload(true);
}

function clear(){
    document.getElementById('kick').value = '';
}