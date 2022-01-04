const btn = document.querySelector('button');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const hr = document.querySelector('hr');

const yChoice = document.querySelector('#your-choice');
const cChoice = document.querySelector('#computer-choice');

const gry = document.querySelector('#gry');
const wygrane = document.querySelector('#wygrane');
const przegrane = document.querySelector('#przegrane');
const remisy = document.querySelector('#remisy');

const whoWin = document.querySelector('.who-win');
const warning = document.querySelector('.warning');

const game = ["kamień", "papier", "nożyczki"];

let yourDecision;

let gameCounter = 0;
let winCounter = 0;
let defeatCounter = 0;
let drawCounter = 0;

let start = true;

rock.addEventListener('click', () => {
    hr.style.display = "block";
    yChoice.innerHTML = "Twój wybór: <br>kamień";
    yourDecision = game[0];

    cChoice.innerHTML = "Wybór przeciwnika:";
    whoWin.style.display = "none";
    warning.style.display = "none";
    start = false;
});
paper.addEventListener('click', () => {
    hr.style.display = "block";
    yChoice.innerHTML = "Twój wybór: <br>papier";
    yourDecision = game[1];

    cChoice.innerHTML = "Wybór przeciwnika:";
    whoWin.style.display = "none";
    warning.style.display = "none";
    start = false;
});
scissors.addEventListener('click', () => {
    hr.style.display = "block";
    yChoice.innerHTML = "Twój wybór: <br>nożyczki";
    yourDecision = game[2];

    cChoice.innerHTML = "Wybór przeciwnika:";
    whoWin.style.display = "none";
    warning.style.display = "none";
    start = false;
});



btn.addEventListener('click', () => {
    if (!start) {
        const computerDecision = game[Math.floor(Math.random() * game.length)];

        cChoice.innerHTML = "Wybór przeciwnika:<br>" + computerDecision;

        gry.textContent = `Gry: ${++gameCounter}`;

        if (yourDecision == computerDecision) {
            remisy.textContent = `Remisy: ${++drawCounter}`;
            whoWin.textContent = "Remis";
            whoWin.style.display = "block";
        }
        else if ((yourDecision == game[0] && computerDecision == game[2]) || (yourDecision == game[1] && computerDecision == game[0]) || (yourDecision == game[2] && computerDecision == game[1])) {
            wygrane.textContent = `Wygrane: ${++winCounter}`;
            whoWin.textContent = "Wygrałeś";
            whoWin.style.display = "block";
        }
        else {
            przegrane.textContent = `Przegrane: ${++defeatCounter}`;
            whoWin.textContent = "Przegrałeś";
            whoWin.style.display = "block";
        }

        hr.style.display = "none";

        start = true;
    }
    else {
        whoWin.style.display = "none";
        warning.style.display = "block";
    }
});