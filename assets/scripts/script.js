/* checked with jshint esversion 2.13.6 */

// Query selectors for control buttons
const leftButton = document.querySelector('#left-button');
const middleButton = document.querySelector('#middle-button');
const rightButton = document.querySelector('#right-button');

//Get other required elements
const resetButton = document.getElementById("reset-button");
var modal = document.getElementById("myModal");
var modalBtn = document.getElementById("how-to-play-btn");
var span = document.getElementsByClassName("close")[0];
const gameImg = document.getElementById('game-image');
const charlieScoreBoard = document.getElementById('charlie-score');
const roxyScoreBoard = document.getElementById('roxy-score');
const gameText = document.getElementById('game-text');

// Local variables
let catches = 0;
const winningScore = 5;
let interceptions = 0;
const losingScore = 5;
let roxyDirection;

// Function to generate Roxy's random direction (1 = left, 2 = middle, 3 = right)
function generateRoxyDirection() {
    const directions = ['left', 'middle', 'right'];
    const randomIndex = Math.floor(Math.random() * directions.length);
    return directions[randomIndex];
}

// Event listeners for control buttons
leftButton.addEventListener("click", () => {
    roxyDirection = generateRoxyDirection();
    if (roxyDirection === 'left') {
        gameImg.src = "assets/images/roxy-has-chop-roxy-left-charlie-middle.jpg";
        interceptions++;
        gameText.innerHTML = `Oh no! Roxy caught the chop!`;
        charlieScoreBoard.innerHTML = catches;
        roxyScoreBoard.innerHTML = interceptions;
    } else {
        const randomImage = Math.random() < 0.5 ? 'assets/images/charlie-has-chop-roxy-middle-charlie-left.jpg' : 'assets/images/charlie-has-chop-roxy-right-charlie-left.jpg';
        gameImg.src = randomImage;
        catches++;
        gameText.innerHTML=`Charlie caught the chop! Well done!`;
        charlieScoreBoard.innerHTML = catches;
        roxyScoreBoard.innerHTML = interceptions;
    }
    checkGameStatus();
});

middleButton.addEventListener("click", () => {
    roxyDirection = generateRoxyDirection();
    if (roxyDirection === 'middle') {
        gameImg.src = "assets/images/roxy-has-chop-roxy-middle-charlie-middle.jpg";
        interceptions++;
        gameText.innerHTML = `Oh no! Roxy caught the chop!`;
        charlieScoreBoard.innerHTML = catches;
        roxyScoreBoard.innerHTML = interceptions;
    } else {
        const randomImage = Math.random() < 0.5 ? 'assets/images/charlie-has-chop-roxy-left-charlie-middle.jpg' : 'assets/images/charlie-has-chop-roxy-right-charlie-middle.jpg';
        gameImg.src = randomImage;
        catches++;
        gameText.innerHTML=`Charlie caught the chop! Well done!`;
        charlieScoreBoard.innerHTML = catches;
        roxyScoreBoard.innerHTML = interceptions;
    }
    checkGameStatus();
});

rightButton.addEventListener("click", () => {
    roxyDirection = generateRoxyDirection();
    if (roxyDirection === 'right') {
        gameImg.src = "assets/images/roxy-has-chop-roxy-right-charlie-middle.jpg";
        interceptions++;
        gameText.innerHTML = `Oh no! Roxy caught the chop!`;
        charlieScoreBoard.innerHTML = catches;
        roxyScoreBoard.innerHTML = interceptions;
    } else {
        const randomImage = Math.random() < 0.5 ? 'assets/images/charlie-has-chop-roxy-left-charlie-right.jpg' : 'assets/images/charlie-has-chop-roxy-middle-charlie-right.jpg';
        gameImg.src = randomImage;
        catches++;
        gameText.innerHTML=`Charlie caught the chop! Well done!`;
        charlieScoreBoard.innerHTML = catches;
        roxyScoreBoard.innerHTML = interceptions;
    }
    checkGameStatus();
});

// Function to check game status
function checkGameStatus() {
    if (catches === winningScore) {
        gameText.innerHTML = `YOU WIN,CHARLIE WINS!`;
        endGame();
    } else if (interceptions === losingScore) {
        gameText.innerHTML = `YOU LOSE,ROXY WINS!`;
        endGame();
    }
}

// Function to end the game
function endGame() {
    leftButton.disabled = true;
    middleButton.disabled = true;
    rightButton.disabled = true;
    document.getElementById("replay-button").style.display = "block";
}

// Event listener for replay button to reload the page when clicked
const reloadButton = document.getElementById("replay-button");
reloadButton.addEventListener("click", () => {
    location.reload();
});

// When the user clicks the how to play button the how to play modal opens
modalBtn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on the (x) in the modal it will close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal the modal will close
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//Reset button
resetButton.addEventListener("click", () => {
    location.reload();
});









