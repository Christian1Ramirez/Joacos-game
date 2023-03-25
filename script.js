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

//reset button & action(figure out)
// let resetBtn = document.getElementById('reset-Btn');
// const scoreDisplay = document.getElementById('scoreDisplay');

// let score = 0;

// resetBtn.addEventListener('click', function() {
//   score = 0;
//   scoreDisplay.textContent = score;
// });

//play button(fix)
const playBtn = document.getElementById("play-btn");
const mySound = document.getElementById("my-Sound");
const pixName = ["jellyfish", "venus", "seahorse", "whale", "sun", "rocket"];

playBtn.addEventListener("click", function () {
  if (mySound.paused) {
    mySound.play();
  } else {
    mySound.pause();
  }
});
