// Query selectors for control buttons
const leftButton = document.querySelector('#left-button');
const middleButton = document.querySelector('#middle-button');
const rightButton = document.querySelector('#right-button');
const gameButtons = document.getElementsByClassName('game-btn');
const resetButton = document.getElementById("reset-button");
var modal = document.getElementById("myModal");
var modalBtn = document.getElementById("how-to-play-btn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the how to play button the how to play modal opens
modalBtn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on the (x) in the modal it will close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal the modal will close
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Reset button
resetButton.addEventListener("click", () => {
    location.reload();
});
