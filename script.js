let goFirst = confirm("Would you like to play Tic Tac Toe?")
let remainingMoves = ["tl", "tc", "tr", "cl", "cc", "cr", "bl", "bc", "br"];
let playOneMoves = [];
let computerMoves = [];
let fillValue;
let winningMoves = [["tl", "tc", "tr"], ["cl", "cc", "cr"], ["bl", "bc", "br"], ["tl", "cl", "bl"], ["tc", "cc", "bc"], ["tr", "cr", "br"], ["tl", "cc", "br"], ["tr", "cc", "bl"]];
let squareIds = ["tl", "tc", "tr", "cl", "cc", "cr", "bl","bc", "br"];
let squares = $(".cell");
let restart = $(".restart");

let checker = (arr, target) => target.every(v => arr.includes(v));

// Functions 

function restart1() {
    window.location.reload()  
}


const checkMoves = (name, array) => {
    let winner = false;
    for (let i = 0; i < winningMoves.length; i++) {
        if (checker(array, winningMoves[i])) {
            winner = true;
           if (confirm(name + " wins the game")) {
            restart1();
           } 
        } 
    } 
    if (name !== "Computer" && winner == false) {
        if (remainingMoves.length < 1) {
            alert("Game ended in a tie");
            restart1()
                } else {
                    computerChoice()
                }
            }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function computerChoice() {
    fillValue = "O"  
    let number = remainingMoves.length - 1;
    let computerNumber = Math.floor(Math.random() * number);
    document.querySelector("#" + remainingMoves[computerNumber]).innerText = fillValue
    computerMoves.push(remainingMoves[computerNumber]);
    remainingMoves.splice(computerNumber, 1);
    checkMoves("Computer", computerMoves);
}

squares.click(function(e) {
for (let i = 0; i < remainingMoves.length; i++) {
    if (e.target.id == remainingMoves[i]) {
        e.target.innerText = "X";
            playOneMoves.push(remainingMoves[i])
            remainingMoves.splice(i, 1) 
            // let newTime = getRandomArbitrary(150, 1500);
            setTimeout(() => {checkMoves("Player 1", playOneMoves)}, 200); 
            
    }
}
})

restart.click(function() {
    window.location.reload()
    })