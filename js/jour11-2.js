// Select elements
const firstNumEl = document.getElementById("firstnumber");
const secondNumEl = document.getElementById("secondnumber");
const operationEl = document.getElementById("operation");
const equalEl = document.getElementById("equalto");
const resultEl = document.getElementById("placeresult");

// Function to get random number 0–99
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

// Function to get random operator + or -
function getRandomOperator() {
    return Math.random() < 0.5 ? "+" : "-";
}

// Function to initialize the game
function initGame() {
    resultEl.textContent = ""; // clear old result
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const op = getRandomOperator();

    // Display them
    firstNumEl.textContent = num1;
    secondNumEl.textContent = num2;
    operationEl.textContent = op;
    
    
    // Add click event
    equalEl.onclick = function() {
        let result;
        if (op === "+") {
            result = num1 + num2;
        } else {
            result = num1 - num2;
        }
        resultEl.textContent = result;

        // Reinitialize after 3 seconds
        setTimeout(initGame, 1000);
    };
}

// Start game
initGame();



