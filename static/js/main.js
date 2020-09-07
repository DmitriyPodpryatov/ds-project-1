// Set range of numbers (from MIN to (MAX + MIN - 1))
const MIN = 2;
const MAX = 13;

let currentNumber = 0;
let currentWinStreak = 0;


/* ======================= Getters ======================= */
// Return random number between MIN and (MAX + MIN - 1)
function getRandomNumber() {
    let randomNumber;
    let currentNumber = getCurrentNumber();

    // Generate random number until it's not equal to the current one
    do {
        randomNumber = MIN + Math.floor(Math.random() * MAX);
    }
    while (randomNumber === currentNumber);

    return randomNumber;
}

// Get current number
function getCurrentNumber() {
    return currentNumber;
}

function getCurrentWinStreak() {
    return currentWinStreak;
}


/* ======================= Setters ======================= */
// Execute function on load page
window.onload = setRandom;

// Set random number and corresponding image
function setRandom() {
    let newNumber = getRandomNumber();
    setNumber(newNumber);
    setImage(newNumber);
}

// Set given number to the text element
function setNumber(number) {
    currentNumber = number;
}

// Set new image for the given number (offset is 2)
function setImage(number) {
    let element = document.getElementById("image");
    element.src = "/static/cards/" + number + ".jpg";
}

// Set win streak
function setWinStreak(winStreak) {
    currentWinStreak = winStreak;

    let element = document.getElementById("win-streak");
    element.textContent = winStreak.toString();
}


/* ======================= Win Streak ======================= */
// Increase win streak
function increaseWinStreak() {
    currentWinStreak += 1;
    setWinStreak(currentWinStreak);
}

// Reset win streak to 0
function resetWinStreak() {
    setWinStreak(0);
}


/* ======================= High-Low ======================= */
// User predicts higher
function higher() {
    // Generate new number
    let newNumber = getRandomNumber();
    let currentNumber = getCurrentNumber();

    // Correct prediction => increase win streak
    // Wrong prediction => reset win streak
    if (newNumber > currentNumber) {
        increaseWinStreak();
    } else {
        openModal();
        resetWinStreak();
    }

    setNumber(newNumber);
    setImage(newNumber);
}

// User predicts lower
function lower() {
    // Generate new number
    let newNumber = getRandomNumber();
    let currentNumber = getCurrentNumber();

    // Correct prediction => increase win streak
    // Wrong prediction => reset win streak
    if (newNumber < currentNumber) {
        increaseWinStreak();
    } else {
        openModal();
        resetWinStreak();
    }

    setNumber(newNumber);
    setImage(newNumber);
}


/* ======================= Save Results ======================= */
// Open modal to save results
function openModal() {
    $('#modal').modal('show');

    let element = document.getElementById("modal-win-streak");
    element.textContent = "Your win streak is " + getCurrentWinStreak() + ".";
}

// Save results
function saveResults() {
    let username = document.getElementById("name").value;
    let winStreak = getCurrentWinStreak();

    console.log(username + ': ' + winStreak);
    $('#modal').modal('hide');
}
