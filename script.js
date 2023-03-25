//fullscreen button
let fullScreenBtn = document.getElementById("fullscreen-btn");

fullScreenBtn.addEventListener("click", function () {
  let docElm = document.documentElement;
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  } else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
  } else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  } else if (docElm.msRequestFullscreen) {
    docElm.msRequestFullscreen();
  }
});

//reset button & action
let resetBtn = document.getElementById('reset-btn');
let scoreDisplay = document.getElementById('scoreDisplay');
let progressBar = document.getElementById('progress-bar');

let score = 0;

resetBtn.addEventListener('click', function() {
  score = 0;
  scoreDisplay.textContent = score;
  progressBar.style.width = "0%";
});

//keys to input box
let keys = document.querySelectorAll('.key');
let input = document.getElementById('input');
let earthLetters = ['E', 'A', 'R', 'T', 'H'];
let currentIndex = 0;

keys.forEach(function(key) {
  key.addEventListener('click', function() {
    let letter = key.textContent;

    if (letter === earthLetters[currentIndex]) {
      input.value += letter;
      currentIndex++;
      key.disabled = true;

      // increase score and progress bar
      score++;
      scoreDisplay.textContent = score;
      progressBar.style.width = `${25 * score}%`;

      if (currentIndex === earthLetters.length) {
        keys.forEach(function(key) {
          key.disabled = true;
        });
      }
    }
  });
});
//play button(fix)
const playBtn = document.getElementById("play-btn");
const mySound = document.getElementById("my-Sound");
// const pixName = ["earth", "jellyfish", "seahorse", "whale", "sun", "rocket"];

playBtn.addEventListener("click", function () {
  if (mySound.paused) {
    mySound.play();
  } else {
    mySound.pause();
  }
});


