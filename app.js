let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");




function getComputerChoice(userChoice) {
    const choices = ['r', 'p', 's'];
    
    if (difficulty.value === 'easy') {
        // 30% eséllyel veszít, 70% véletlen
        if (Math.random() < 0.3) {
            if (userChoice === 'r') return 's';
            if (userChoice === 'p') return 'r';
            if (userChoice === 's') return 'p';
        }
        return choices[Math.floor(Math.random() * 3)];
    } 
    else if (difficulty.value === 'normal') {
        // Véletlenszerű választás
        return choices[Math.floor(Math.random() * 3)];
    }
    else if (difficulty.value === 'hard') {
        // 70% eséllyel nyer, 30% véletlen
        if (Math.random() < 0.7) {
            if (userChoice === 'r') return 'p';
            if (userChoice === 'p') return 's';
            if (userChoice === 's') return 'r';
        }
        return choices[Math.floor(Math.random() * 3)];
    }
    else if (difficulty.value === 'impossible') {
        // Mindig nyer
        if (userChoice === 'r') return 'p';
        if (userChoice === 'p') return 's';
        if (userChoice === 's') return 'r';
    }
}

/*
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
*/

function convertToWord(letter) {
    if (letter === "r") return "Kő";
    if (letter === "p") return "Papír";
    return "Olló";
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " Erősebb a(z) " + convertToWord(computerChoice) + "-nál/nél, Nyertél!";
    userChoice_div.classList.add('green-glow'); 
    setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 500);
}


function lose(userChoice,computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " Gyengébb a(z) " + convertToWord(computerChoice) + "-nál/nél, Vesztettél!";   
    userChoice_div.classList.add('red-glow'); 
    setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 500);
}
function draw(userChoice,computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " Megegyezik " + convertToWord(computerChoice) + "-val/vel, Döntetlen!";    
    userChoice_div.classList.add('yellow-glow'); 
    setTimeout(function() {userChoice_div.classList.remove('yellow-glow')}, 500);
}

function game(userChoice) {
    const computerChoice  = getComputerChoice(userChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {

    rock_div.addEventListener('click', function() {
        game('r')
    })
    paper_div.addEventListener('click', function() {
        game('p')
    })
    scissors_div.addEventListener('click', function() {
        game('s')
    })
}


main();
